const express = require('express')
const router = express.Router()
const user = require('../Controllers/user.controller')
const validateUser = require('../Middleware/auth')


router.post('/createUser', user.CreateUser)
router.post('/loginUser', user.LoginUser)

router.get('/profileDetails', validateUser, user.ProfileDetails)
router.put('/updateUser', validateUser, user.UpdateUser)
router.get('/studentList', validateUser, user.StudentList)


module.exports = router