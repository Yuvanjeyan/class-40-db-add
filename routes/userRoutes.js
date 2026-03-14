const express = require("express");

const route = express.Router();
const userCOntroller = require("../controller/userController");


//post api route
route.post("/users",userCOntroller.createUser)
route.get("/getusers",userCOntroller.getUsers)

//export the router
module.exports = route;