var express =require('express')
var app = express();


var bodypareser = require('body-parser');
app.use(bodypareser.urlencoded({extended:false}));

app.get("/",function(req,res){
    res.sendfile("./login.html")
    
})

app.get("/home",function(req,res){
    if(req.body.username == "kiran" && req.body.password == "1234")
    res.sendfile("./login.html")
})

app.get("/home",function(req,res){
    res.sendfile("./home.html")
    
})

app.get("/logout",function(req,res){
    res.sendfile("./logout.html")
    
})

function callserver()
{
    console.log("Server Started..")
}

app.listen(7000,callserver());
