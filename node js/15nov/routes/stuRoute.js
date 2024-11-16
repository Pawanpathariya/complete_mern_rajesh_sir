const express = require("express");
const route= express.Router();
const stuController = require("../controllers/studentController");


route.get("/stuinfo", stuController.stuhomePage)
route.get("/about", stuController.aboutStudent);
route.get("/fees",stuController.stuFees)


module.exports=route