

let ourFisrtFunction = function(){
  alert("Hello, World")
}

ourFisrtFunction();

let sayHelloTo = function(name){
  console.log("Hello, " + name + "!");
};
sayHelloTo("Nik");

let drawCats = function(howManyTimes){
  for(let i = 0; i<howManyTimes;i++ ){
    console.log(i + " =^.^= ");
  }
};
drawCats(5);


let printMultipleTimes = function(howManyTimess, whatToDraw){
  for(let i=0; i<howManyTimess;i++){
    console.log(i + " " + whatToDraw);
  }
};
printMultipleTimes(5, "=^.^=");

let printTwo = function(numbers, whatDraw){
for(let i=0; i<numbers;i++){
  console.log(i + " " + whatDraw);
}
};

printTwo(2, "oooo");

let double = function(numbersss){
  return numbersss * 2;
};
console.log((double)(double(3)));
console.log(double(3));





let pickRandom = function (words){
  return words[Math.floor(Math.random() * words.length)];
};
let randomWords = ["Planet", "Flower","Computer","Chervjak",];
console.log(pickRandom(randomWords));


let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWordss = ["муха", "выдра", "дубина", "мартышка", "крыса"];
let randomInsult = "You have " + pickRandom(randomBodyParts) + " " +pickRandom(randomAdjectives) + " " + pickRandom(randomWordss);
console.log(randomInsult);


let fifthLetter = function(name){
  if(name.length<5){
    return;
  }
  return("Пятая буква вашего имени: " + name[4] + ".");
}
console.log(fifthLetter("Николай"));
console.log(fifthLetter("Нико"));


let medalForScore = function(score){
  if (score<3){
    return "Бронзовая";
  } if (score<7){
    return "Серебряная";
  } return "Золотая";
};

console.log(medalForScore(5));

////----///

let doublee = function (number){
  return number * 2;
};

function doubleee(number){
  return number * 2;
}


let add = function(a,b){
  return a + b;
};

let multiply = function(a,b){
  return a * b;
}
console.log (add(multiply(36325, 9824),777));