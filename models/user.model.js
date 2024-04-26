const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

    userSchema.methods.isPasswordCorrect = async function(password)
    {
        return await bcrypt.compare(password, this.password);
    }
    

    userSchema.methods.generateAccessToken = async function()
    {
        return jwt.sign({
            _id : this._id,
            username : this.username,
            password : this.password
        },  
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )

    }
    module.exports = mongoose.model('User', userSchema)