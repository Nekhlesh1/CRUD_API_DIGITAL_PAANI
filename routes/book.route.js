const express = require('express')
const { addBook, viewAllBooks, updateBookWihId, deleteBookWithId } = require('../controllers/book.controller')
const router = express.Router()

router.post('/add', addBook)
router.get('/viewBooks', viewAllBooks)
router.post('/updateBook', updateBookWihId)
router.delete('/delete', deleteBookWithId)

module.exports = router 