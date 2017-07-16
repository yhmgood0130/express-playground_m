function pi(){
  return Math.PI;
}

function operating(operator,num1,num2){
  if(operator == 'add'){
    return parseFloat(num1) + parseFloat(num2)
  }else if(operator == 'subtract'){
    return parseFloat(num1) - parseFloat(num2)
  }else if(operator == 'multiply'){
    return parseFloat(num1) * parseFloat(num2)
  }else if(operator == 'divide'){
    return parseFloat(num1) / parseFloat(num2)
  }
}

function sum(arr){
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += parseFloat(arr[i])
  }
  return String(total);
}

function volume(length, width, height){
  return length * width * height
}

function area(width,height,radius,type){
  if(type == 'rectangle'){
    return width * height
  }else if(type == 'circle'){
    return radius * radius * Math.PI
  }
}

module.exports = {
  operating: operating,
  pi: pi,
  sum: sum,
  volume: volume,
  area: area
}
