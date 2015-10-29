var express = require('express')
var app = express()

function getHomePage (req , res) {
	res.send('<h1> IoT-Mongo-server Test </h1>')
}

 app.get('/',getHomePage)

var server = app.listen(5555,function(){
	console.log('express is running on port 5555')
});