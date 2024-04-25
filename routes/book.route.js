const express = require('express')
const router = express.Router()

router.get('/home', (req,res)=> res.send('books home'))

module.exports = router 