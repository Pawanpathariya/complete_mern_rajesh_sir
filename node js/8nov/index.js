const Myclg=require("./cybrom.js");
const http=require("http");
http.createServer((req,res)=>{
//res.writeHead(200,{'Content-Type':'text/html'}); 
res.write("<h1> I am MERN Stack Developer</h1>")
res.write(Myclg.Mycollege());
res.write(Myclg.myfees());
res.end("<h3>this is end</h3>");
}).listen(8000);