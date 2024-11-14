const express=require("express")
const route=express.Router();

route.get("/teacherinfo",(req,res)=>{
    res.send("this is teacher info")
})
route.post("/teachersubject",(req,res)=>{
    res.send("Teacher subject information ")
})
route.get("/teacher salary",(req,res)=>{
    res.send("This is Teacher salary 69000")
})


module.exports=route;