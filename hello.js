var express = require('express');
var app = express();

function callserver()
{
    console.log("Hello World")
}

app.listen(8000,callserver());
