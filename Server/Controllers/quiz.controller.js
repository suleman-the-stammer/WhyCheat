const UserModel = require("../Models/user.model")
const QuizModel = require("../Models/quiz.model")




exports.CreateQuiz = async (req, res) => {
    try {
        let UserData = req.UserData;
        let { title, questions, type } = req.body;


        let NewQuiz = await QuizModel.create({
            title,
            type,
            questions,
            auther: UserData?._id

        })
        res.status(200).json({ message: "Quiz created" })
    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
}

exports.GetAllQuizzes = async (req, res) => {
    try {
        const result = await QuizModel.find().populate("auther")

         

        res.status(200).json({
            message: "Operation Successful",
            result,
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
};