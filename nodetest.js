var fs = require('fs');
var contents = fs.readFileSync('sample.json');

var bodypareser = require('body-parser');
app.use(bodypareser.urlencoded({extended:false}));