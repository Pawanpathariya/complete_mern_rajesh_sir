//open()
const fs=require("fs");
fs.open("pawam.txt" , "w" , (err)=>{
    if(err) throw err;
    console.log("succesfully file created");
});