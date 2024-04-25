
const User  = require('../models/user.model.js')

module.exports.addUser = async (req, res) => {  
    // get user details
    const { username, email, password } = req.body

    // validations
    if (
        !username || !email || !password
    ) {
        throw new Error("All fields are required! ")
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
            username: username.toLowerCase()
        })
    const createdUser = await User.findById(user._id)
    
    if (!createdUser) {
        throw new Error(" Something went wrong while registering user")
    }
    return res.status(201).json(createdUser)
}
