
const User  = require('../models/user.model.js')

const generateToken = async(userId) =>{ try {
    
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken()
        console.log(accessToken)
        return accessToken
    
    }
catch (error) {
    console.log(err)
    
}}

module.exports.addUser = async (req, res) => {  
    // get user details
    const { username, email, password } = req.body

    // validations
    if (
        !username || !email || !password
    ) {
        res.status(400).json("All fields are required")
    }

    // check if user already exists

    const existedUser = await User.findOne({email})
    if (existedUser) {
        throw new Error("User already exists with the given username/ Email")
    }
    // console.log(req.files);
    
    // create user in db
    const user = await User.create(
        {
            email,
            password,
            username: username?.toLowerCase()
        })
    const createdUser = await User.findById(user._id)
    
    if (!createdUser) {
        throw new Error(" Something went wrong while registering user")
    }
    return res.status(201).json(createdUser)
}

module.exports.loginUser = async(req,res) =>
{
    const { email, password} = req.body;
    if(!email) 
    throw new Error("email requried");

    const user = await User.findOne({email})
    if (!user) {
        throw new Error("No user with given name/ email. Register first!")
    }

    // check password
    const isPasswordValid = await user.isPasswordCorrect(password)
    if (!isPasswordValid) {
        throw new Error("Incorrect password");
    }

    const accessToken = await generateToken(user._id)
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    const options = {
        htttpOnly: true,  // can be modified only by server not from frontend
        secure: true
    }
    return res.status(200).cookie("accessToken", accessToken , options).json({loggedInUser, accessToken})


}