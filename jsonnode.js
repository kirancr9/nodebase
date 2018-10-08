var fs = require('fs');
var contents = fs.readFileSync('sample.json');
var jsoncontent = JSON.parse(contents);
console.log("Username : ",jsoncontent.username);
console.log("Email : ",jsoncontent.email);
console.log("UserID : ",jsoncontent.uid);
