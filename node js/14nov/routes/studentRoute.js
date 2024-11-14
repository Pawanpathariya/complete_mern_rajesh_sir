const express=require("express")
const route=express.Router();

route.get("/stuinfo",(req,res)=>{
    res.send("this is student info")
})
route.post("/stusave",(req,res)=>{
    res.send("Data Save")
})
route.get("/sturesult",(req,res)=>{
    res.send("This is student result")
})
route.get("/stufees",(req,res)=>{
    res.send("This is student fees")
})

module.exports=route;