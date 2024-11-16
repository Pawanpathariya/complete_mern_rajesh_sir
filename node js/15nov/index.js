const express = require("express");
const app= express();

const stuRoutes = require("./routes/stuRoute")

app.use("/students", stuRoutes);


app.listen(8000,()=>{
    console.log("service run on 8000")
})