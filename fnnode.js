var express = require('express');
var app = express();
var add = require('./nodecalc').add;
var sub = require('./sub').sub;

var triangle = function()
{
    console.log("Triangle")
}
var square = function()
{
    console.log("This is a square")
} 

app.listen(8300, function(req, res){
    console.log("Hello World!");
    square();
    triangle();
    add();
    sub();
});