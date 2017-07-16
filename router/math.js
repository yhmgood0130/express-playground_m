var express = require ('express')
var router = express.Router()
var operator = require ('../logic').operating
var pi = require ('../logic').pi
var sum = require ('../logic').sum
var volume = require ('../logic').volume
var area = require ('../logic').area

router.get('/math/pi',function(req,res){
  var total = pi();
  res.send(`${total}`);
})

router.get('/math/calculate',function(req,res){

  var operate = req.query.operation
  var num1 = req.query.x
  var num2 = req.query.y
  var result = operator(operate,num1,num2)
  res.send(`${result}`)
})

router.post('/math/sum',function(req,res){
  let num = req.query.n
  let total = sum(num)
  res.send(total)
})

router.patch('/math/volume/:num1/:num2/:num3',function(req,res){
  var length = parseInt(req.params.num1)
  var width = parseInt(req.params.num2)
  var height = parseInt(req.params.num3)
  var total = volume(length, width, height)
  res.send(String(total))
})

router.post('/math/area',function(req,res){
  let type = req.body.type
  if(type == 'rectangle'){
    var width = parseFloat(req.body.width);
    var height = parseFloat(req.body.height);
    var radius = 0;
  }else if (type == 'circle'){
    var radius = parseFloat(req.body.radius);
    var width = 0;
    var height = 0;
  }
  var total = area(width,height,radius,type)
  res.send(String(total))
})

module.exports = router
