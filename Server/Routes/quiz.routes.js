const express = require('express')
const router = express.Router()
const QuizController = require('../Controllers/quiz.controller')
const validateUser = require('../Middleware/auth')


router.get('/', validateUser, QuizController.GetAllQuizzes)
router.post('/createQuiz', validateUser, QuizController.CreateQuiz)

module.exports = router