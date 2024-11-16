const stuhomePage=(req, res)=>{
    res.send("<h1>Welcome to homepage </h1>")
}

const aboutStudent=(req,res)=>{
    res.send("<h1> About page of student </h1>")
}

const stuFees=(req, res)=>{
    res.send ("<h1>Student fees record</h1>")
}

module.exports={
    stuhomePage,
    aboutStudent,
    stuFees
}