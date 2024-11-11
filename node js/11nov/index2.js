const http=require("http");
http.createServer((req,res)=>{
    res.write("<h1> hello guys</h1>")
    res.end("<h2> Server ending nh..........</h2>")
}).listen(5050);