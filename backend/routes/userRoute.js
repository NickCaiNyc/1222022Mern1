//3 routes 
//Register
//log in
//getUsers info
const express = require('express')
const router = express.Router()

const {getMe,registerUser, loginUser} = require('../controller/userController')

const {protect} = require('../middleware/authMiddleware')

router.get('/me',protect, getMe)
router.post('/', registerUser)
router.post('/login',loginUser)

//need to encrypt password
//npm i bcryptjs
//npm i jsonwebtoken
module.exports = router