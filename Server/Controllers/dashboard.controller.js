const express = require("express")
const UserModel = require("../Models/user.model")
const QuizModel = require("../Models/quiz.model")





exports.DashboardStatistics = async (req, res) => {
    try {
        let UserData = req.UserData;

        let result = {
        }

        if (UserData?.role == "Student") {
            let QuizCount = await QuizModel.countDocuments()
            let Users = await UserModel.find({ role: "Teacher" })
            result.QuizCount = QuizCount
            result.AllTeachers = Users

        } else {
            let QuizCount = await QuizModel.countDocuments()
            let Users = await UserModel.find({ role: "Student" })
            result.QuizCount = QuizCount
            result.AllStudents = Users
        }

        res.status(200).json({ message: "Operation Successful" , result })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong", err });
    }
}