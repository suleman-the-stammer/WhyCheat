const express = require("express")
const UserModel = require("../Models/user.model")
const jwt = require("jsonwebtoken")


const validateUser = async (req, res, next) => {

    try {
        let Token = req.headers.authrization;
        if (Token && Token.startsWith("Bearer")) {
            Token = Token.split(" ")[1]

            let IsValidToken = jwt.verify(Token, "ThisIsTokenPassword")
            if (IsValidToken && IsValidToken?.UserData) {
                const UserData = await UserModel.findById(IsValidToken?.UserData?._id)
                if (UserData) {
                    req.UserData = UserData
                    next()
                    return;
                } else {
                    res.status(401).json({ message: "Token Invalid / User Not Found" })
                }
            } else {
                res.status(401).json({ message: "Token Expired / Invalid" })
            }

        } else {
            res.status(401).json({ message: "Token not Found / Invalid" })
        }
    } catch (err) {
        res.status(401).json({ message: "Authentication Failed", err })
    }

}


module.exports = validateUser