
var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/static'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(1337);

console.log("Running at Port 3000");