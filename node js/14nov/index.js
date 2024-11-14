const express=require("express")
const app=express();

const route=require("./routes/studentRoute")
const route1=require("./routes/teacherRoute")
app.use("/students",route);
app.use("/teacher",route1)
app.listen(8000,()=>{
console.log("run at 8000");
})