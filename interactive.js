
let leftOffset = 0;
let moveHeading = function(){
  $("#heading").offset({left:leftOffset});

  leftOffset++;
  if(leftOffset>200){
    leftOffset = 0;
  }
};

setInterval(moveHeading, 30);