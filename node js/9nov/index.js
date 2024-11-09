//read file
// const http=require("http");
// const fs=require("fs");
// http.createServer((req,res)=>{
// fs.readFile("pawan.txt",(err,data)=>{
//     res.write(data);
//     res.end();
// })
// }).listen(5000); 


//appendFile
const fs=require("fs");
fs.appendFile("new1.pdf"," hello i am pawan i am from bhopal",(err)=>{
    if(err) throw err;
    console.log("succesfully created "); 
});