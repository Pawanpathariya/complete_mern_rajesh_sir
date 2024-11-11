/*
//open()
const fs=require("fs");
fs.open("pawam.txt" , "w" , (err)=>{
    if(err) throw err;
    console.log("succesfully file created");
});
*/

//writeFile()
const fs=require("fs");
fs.writeFile("pawam.txt" , "welcome to bhopal" , (err)=>{
    if(err) throw err;
    console.log("succesfully file created");
});