const Book = require('../models/book.model.js')

module.exports.addBook = async (req, res) => {
    try {
        const { title, author, year, pages } = req.body
        // console.log(title, author, year, pages )
        const book = await Book.create({ title, author, year, pages })
        if (!book) {
            throw new Error("Book cannot be added now!")
        }
        return res.status(201).json({ msg: "Book added successfully", data: book })

    }

    catch (error) {
        res.status(400).json({ err: error.message })
    }
}

module.exports.viewAllBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        if (!books)
            throw new Error("Cannot fetch all books at the moment!")
        return res.status(200).json(books)
    }
    catch (error) {
        res.status(400).json({ err: error.message })

    }

}
module.exports.deleteBookWithId = async (req, res) => {

    try {
        const bookId = req.params.id
        const deletedBook = await Book.findByIdAndDelete(bookId)
        return res.status(200).json({ msg: " book deletion successfull", Book: deletedBook })
    }
    catch (error) {
        res.status(400).json({ err: error.message })
    }

}
module.exports.updateBookWihId = async (req, res) => {
    try {
        const bookId = req.params.id
        const { title, year, author, pages } = req.body
        const updatedBook = await Book.findByIdAndUpdate(bookId,
            {
                title,
                year,
                author,
                pages
            },
            {
                new: true
            })
        if (!updatedBook)
            throw new Error("Error occured while updating book")
        return res.status(200).json({ msg: "Book details updated", updated_details: updatedBook })
    } catch (error) {
        res.status(400).json({ err: error.message })

    }
}

module.exports.filterByAuthorOrYear = async (req, res) => {
    try {
        const { author, year } = req.query
        const filter = {}

        if (author)
            filter.author = author

        if (year)
            filter.year = year

        const filteredResult = await Book.find(filter);
        if (filteredResult.length === 0)

            return res.status(400).json({ msg: "No books found " })


        return res.status(200).json(filteredResult)
    }
    catch (error) {
        res.status(400).json({ err: error.message })

    }
}