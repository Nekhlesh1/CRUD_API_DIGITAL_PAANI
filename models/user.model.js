const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema(
    {
        username : 
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

    userSchema.pre("save", async function(next){
        if(!this.isModified("password"))
        {
            return next()
        }
        this.password = await bcrypt.hash(this.password, 10)
        next()

    });

    userSchema.methods.isPasswordCorrect = async function()
    {
        return await bcrypt.compare(password, this.password)
    }
    
    module.exports = mongoose.model('User', userSchema)