const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>This is express framework</h1>")
})
app.listen(8080,()=>{
    console.log("Run Sucessfully")
})