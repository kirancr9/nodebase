var express = require('express');
var app = express();

function callserver()
{
    console.log("Hello World")
}

app.listen(7000,callserver());
