const express = require("express");

//import .env variable
require("dotenv").config();

//import the connection
const connectDB = require("./config/db")

//import route
const userRoutes = require("./routes/userRoutes");

//create the express app
const app = express();

//middleware to parse the JSON data
app.use(express.json());

connectDB();

app.use("/",userRoutes);

//read port from .env
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running at the port number ${PORT}`)
})