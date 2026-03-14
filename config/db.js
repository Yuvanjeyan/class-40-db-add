//imort the mongoose lib
const mongoose = require("mongoose");

//function to connnect db
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MOngoDB Connetion successful");
    }
    catch(error){
        console.log("DB connection Error")
    }
}

module.exports = connectDB;