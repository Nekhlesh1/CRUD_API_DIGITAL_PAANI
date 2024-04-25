const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title :
        {
            required : true,
            type : String,
            unique: true,
            trim : true
        },
        author :
        {
            required : true,
            type : String,
        },
        year :
        {
            required : true,
            type : Date,
        }, 
        pages: 
        {
            required: true,
            type: Number,
            min: 1
        }

    },
    {
        timestamps: true
    })


    module.exports = mongoose.model('Book',bookSchema)