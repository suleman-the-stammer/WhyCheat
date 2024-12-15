const express = require('express')
const router = express.Router()
const user = require('../Controllers/user.controller')


router.post('/createUser', user.CreateUser)



module.exports = router