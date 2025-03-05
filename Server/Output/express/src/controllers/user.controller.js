import { User } from '../models/user.model.js';

const options = {
  httpOnly: true,
  secure: true,
  sameSite: 'None',
}


const GenerateToken = async (userId) => {
  const user = await User.findById(userId);
  const AccessToken = await user.GenerateAccessToken();
  const RefreshToken = await user.GenerateRefreshToken();

  user.refreshToken = RefreshToken;
  await user.save({ validateBeforeSave: false });

  return AccessToken;
}



// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if([name, email, password].some(field => field.trim()==='')) return res.status(400).json({ message: 'All fields are required' });

  try {

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const newUser = await User.create({ 
      name: name, 
      email: email, 
      password: password, 
    });
    await newUser.save();

    const AccessToken = await GenerateToken(newUser?._id);
    const FetchedUser = await User.findById(newUser._id).select("-password -refreshToken");
    
    res
      .status(200)
      .cookie("accessToken", AccessToken, options)
      .json({ message: "User created successfully", user: FetchedUser });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// Login user
const loginUser = async (req, res) => {

  const { email, password } = req.body;
  if([email, password].some(field => field.trim()==='')) return res.status(400).json({ message: 'All fields are required' });

  try {

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const AccessToken = await GenerateToken(user?._id);
    const FetchedUser = await User.findById(user._id).select("-password -refreshToken");
    
    res
      .status(200)
      .cookie("accessToken", AccessToken, options)
      .json({ message: "User logged in successfully", user: FetchedUser});

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// Logout user
const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
      req.user._id, 
      {refreshToken: ""}, 
      {new: true}
  );

  return res.status(200)
  .clearCookie("accessToken", options)
  .json({message: "User logged out successfully"});

}



export {
  loginUser,
  registerUser,
  logoutUser,
}
