import mongoose, {Schema, model} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    },
    refreshToken: {
        type: String
    }

}, {timestamps: true});



userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        console.log(error);
        next();
    }
});


userSchema.methods.GenerateAccessToken = async function () {
    const AccessToken = jwt.sign(
        {
            id: this._id,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
    return AccessToken;
};
 
userSchema.methods.GenerateRefreshToken = async function () {
    const RefreshToken = jwt.sign(
        {
            id: this._id, 
            email: this.email
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
    return RefreshToken;
};


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};


export const User = model('User', userSchema);