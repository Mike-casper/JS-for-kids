

let timeUp = function(){
  alert("Time is over")
};

let timer = setTimeout(timeUp, 5000);

clearTimeout(timer);


let counter = 1;
let printMessage = function(){
  console.log("ты смотришь в консоль " + " " + counter + " секунд");
  counter++;
};

let intervalID = setInterval(printMessage, 1000);
clearTimeout(intervalID);
