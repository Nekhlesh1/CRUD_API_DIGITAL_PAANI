const mongoose = require('mongoose')
const {isEmail} = require('validator')
const userSchema = mongoose.Schema(
    {
        name : 
        {
            type : String,
            required: [true,'Name is requried'],
            
        },   
        email : 
        {
            type: String,
            required: [true,' Please enter email'],
            unique: true,
            validate : [isEmail, "Please enter a valid email"]
        },
        password: {
            type: String,
            required: [true,'Password is required'],


        }
    },
    {
        timestamps: true
    })
    module.exports = mongoose.model('User', userSchema)