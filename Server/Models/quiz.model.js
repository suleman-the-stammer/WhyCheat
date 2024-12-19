const mongoose = require('mongoose')

const QuizSchema = mongoose.Schema(
    {
        title: String,
        type: String,
        questions: [
            {
                title: String,
                options: Array,
                answer: String
            }
        ],
        auther: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    }

)

module.exports = mongoose.model('quizModel', QuizSchema)