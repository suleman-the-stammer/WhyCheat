const express = require('express')
const router = express.Router()
const user = require('../Controllers/user.controller')
const validateUser = require('../Middleware/auth')


router.post('/createUser', user.CreateUser)
router.post('/loginUser', user.LoginUser)

router.post('/updateUser', validateUser, user.LoginUser)


module.exports = router