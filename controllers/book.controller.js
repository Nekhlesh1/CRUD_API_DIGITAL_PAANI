const Book = require('../models/book.model.js')

module.exports.addBook = async (req,res)=> {
    const {title, author, year, pages} = req.body
    // console.log(title, author, year, pages )
    const book =  await Book.create({title, author, year, pages})
    if(!book)
    {
        throw new Error("Book cannot be added now!")
    }
    res.status(201).json({msg: "Book added successfully", data : book})

}


module.exports.viewAllBooks = async (req,res)=> {
     const books = await Book.find({})
     if(!books)
     throw new Error("Cannot fetch all books at the moment!")
     res.status(200).json(books)

}
module.exports.deleteBookWithId = async (req,res)=> {

}
module.exports.updateBookWihId = async (req,res)=> {

}