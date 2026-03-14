//import mongoose 
const mongoose = require("mongoose");

//create schema
const userSchema = new mongoose.Schema({
    //name
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }

}, {timestamps: true}); //for when user register

//create models
const User = mongoose.model("GuviZenStudents",userSchema)

module.exports = User;