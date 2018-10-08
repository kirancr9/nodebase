var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("Welcome to Ooty nice to meet you :)")
})

app.get('/home',function(req,res){
    res.send("Welcome to home nice to meet you! ;)")
})

app.get('/home/logout',function(req,res){
    res.send("Logged out :(")
})

app.listen(8000,function(req,res){
    console.log("Server strated!")

})