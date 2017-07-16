var express = require('express');
var server = express();
var bodyParser = require('body-parser')
var mathRouter = require ('./router/math')
var port = process.env.PORT || 8080

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.get('/',function(req,res){
  res.send("Welcome to g55 comrade");
})

server.use('/', mathRouter)

server.listen(port)
