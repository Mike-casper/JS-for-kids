window.onload = function(){
let getRandomNumber = function(size){
  return Math.floor(Math.random() * size);
}

let width = 400;
let height = 400;
let target = {
  x: getRandomNumber(width),
  y:getRandomNumber(height)
};

$("#map").click(function(event){

});

let clicks = 0;

let getDistance = function(event, target){
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return(Math.sqrt(diffX * diffX) + (diffY*diffY));
};

let getDistanceHint = function(distance){
  if(distance<10){
    return "Hot";
  } else if(distance<20){
    return "Very hot";
  } else if(distance<30){
    return "Quite hot";
  } else if(distance<80){
    return "Warm";
  } else if(distance<160){
    return "Cold";
  }else if (distance<320){
    return "Very cold"
  } else{
    return "Died";
  }
}

let distance = getDistance(event,target);
let distanceHint = getDistanceHint(distance);
$("#distance").text(distanceHint);

if(distance<9){
  alert("You won! Cделано кликов: " + clicks);
}
}