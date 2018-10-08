var express = require('express');
var app = express();

var sub = function()
{
    console.log("Substarction")
}
module.exports.sub = sub;