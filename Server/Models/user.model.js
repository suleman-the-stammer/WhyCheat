const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        userName: String,
        email: String,
        password: String,
        role: {
            type: String,
            default: 'Student',
            enum: ['Student', 'Teacher']
        }

    }

)

const Users = mongoose.model('user', userSchema)
module.exports = Users