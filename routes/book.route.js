const express = require('express')
const { addBook, viewAllBooks, updateBookWihId, deleteBookWithId } = require('../controllers/book.controller')
const router = express.Router()

router.post('/add', addBook)
router.get('/viewBooks', viewAllBooks)
router.put('/updateBook/:id', updateBookWihId)
router.delete('/delete/:id', deleteBookWithId)

module.exports = router 