var express = require('express');
var app = express();

function star(){
    console.log("*************************")
}

app.listen(8300,function(req, res){
    console.log("Hello World!");
    star();

});
