const express = require('express')
const { addBook, viewAllBooks, updateBookWihId, deleteBookWithId, filterByAuthorOrYear } = require('../controllers/book.controller')
const router = express.Router()

router.post('/add', addBook)
router.get('/viewBooks', viewAllBooks)
router.get('/filter',filterByAuthorOrYear)
router.put('/updateBook/:id', updateBookWihId)
router.delete('/delete/:id', deleteBookWithId)

module.exports = router 