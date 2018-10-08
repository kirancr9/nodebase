var express = require('express');
var app = express();

var add = function()
{
    console.log("Addtion")
}
module.exports.add = add;
