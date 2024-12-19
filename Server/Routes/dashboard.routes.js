const express = require('express')
const router = express.Router()
const DashboardController = require('../Controllers/dashboard.controller')
const validateUser = require('../Middleware/auth')


router.get('/dashboardStatistics', validateUser, DashboardController.DashboardStatistics)


module.exports = router