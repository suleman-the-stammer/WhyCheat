const express = require ("express")
const User = require("../Models/user.model")

exports.CreateUser = async (req, res)=>{
    try{
        const {userName,email,password,role} = req.body;

        const newUser = new User({
            userName,
            email,
            password,
            role


        })
        await newUser.save();
    }
    catch (err){
        res.status(500).json({ message: "Something went wrong", err });  
    }
}