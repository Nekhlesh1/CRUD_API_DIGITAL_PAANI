const jwt  = require('jsonwebtoken')
const User = require('../models/user.model.js')

module.exports.verifyJWT = async(req,res, next) => 
{
    try 
    {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log(req.cookies.accessToken)
        
        if(!token)
        {
            throw new Error("Unauthorized request")
        }
        const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log(decodedToken._id)

        const user = await User.findById(decodedToken?._id)
        console.log(user)
        if(!user)
        throw new Error("Invalid access token")
        req.user = user
    } 
    catch (error) 
    {
        return res.status(401).json({error : error.message})
    }
    next()
}