import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { GenerateToken } from "../controllers/user.controller.js";

export const VerifyToken = async (req, res, next) => {
    console.log("A new request to the server");

    let token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized, you need to login" });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const DecodedUser = await User.findById(decoded.id).select("-password -refreshToken");
        req.user = DecodedUser;
        return next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            console.log("Access token expired. Checking refresh token...");

            try {
                const decoded = jwt.decode(token);
                if (!decoded) return res.status(401).json({ message: "Invalid token" });

                const user = await User.findById(decoded.id);
                if (!user || !user.refreshToken) {
                    return res.status(403).json({ message: "Unauthorized, refresh token not found" });
                }

                const decodedRefresh = jwt.verify(user.refreshToken, process.env.REFRESH_TOKEN_SECRET);

                if (decodedRefresh?.id !== user?._id.toString()) {
                    return res.status(403).json({ message: "Unauthorized, invalid refresh token" });
                }

                // Generate a new access token
                const newAccessToken = await GenerateToken(user._id);

                res.cookie("accessToken", newAccessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'None',
                  });

                req.user = user;
                return next();
            } catch (refreshError) {
                return res.status(401).json({ message: "Unauthorized, refresh token expired or invalid" });
            }
        } else {
            return res.status(401).json({ message: "Unauthorized, invalid token" });
        }
    }
};
