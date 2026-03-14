//import model
const User = require("../models/Users")

//post api ->  craete user
exports.createUser = async(req,res) => {
    try{
        const {name,email} = req.body;
        const user = new User({
            name: name,
            email: email
        })

        //save doc in db
        const savedUser = await user.save()

        //send the response
        res.status(201).json({
            message: "user created successfully",
            data: savedUser
        })
    }
    catch(error){
        console.log("Server error", error)
    }
}

exports.getUsers = async(req,res) => {
    try{
        // retriving all user info from db
        const users = await User.find()
        res.status(201).json({
            message : "User fetch successfully",
            data : users
        })
    } catch(error){
        res.status(500).json({
            message : "Error fetch user",
            error : error.message
        })
    }
}