var express =require('express')
var app = express();


var bodypareser = require('body-parser');
app.use(bodypareser.urlencoded({extended:false}));

app.get("/",function(req,res){
    res.sendfile("./login.html")
    
})

app.post("/home",function(req,res){
if(req.body.uname == "kiran" && req.body.pass =="123"){
    res.sendfile("./home.html");
}
else
{
    res.sendfile("./login.html");
}

})




function callserver()
{
    console.log("Server Started..")
}

app.listen(7000,callserver());