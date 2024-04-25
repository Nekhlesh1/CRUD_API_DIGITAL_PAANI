const express = require('express');
const { addUser, loginUser } = require('../controllers/user.controller');
const router = express.Router()

router.post('/add',addUser);
router.post('/login',loginUser);


module.exports = router