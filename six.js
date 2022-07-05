

let name = "Niko";
if(name.length > 6){
  console.log("Such a long name");
}else{
  console.log("Name is short");
}

let lemonChicken = false;
let beefWithBlackBean = false;
let sweetAndSourPork = true;

if(lemonChicken) {
  console.log("good, i'd chicken");
} else if(beefWithBlackBean){
  console.log("I order a beef");
} else if(sweetAndSourPork){
  console.log("all rigth, I'd pork");
} else{
  console.log("Ohhh, okay, rise with eggs");
}

let myName = "Sasha";
if(myName === "Mike"){
  console.log("Hey");
}else if(myName === "Nata"){
  console.log("Hey, Nata");
}else if(myName === "Sasha"){
  console.log("Hey, Sasha")
}else{
  console.log("Hey, stragner");
}


///////////
/*while*/
//////////
let shipcounter = 0;
while(shipcounter < 10){
  console.log("Count is " + shipcounter + "!");
  shipcounter++;
}
console.log("hpppp");

///////////
/*for*/
//////////
for(let shipcounter = 0; shipcounter < 10; shipcounter++){
  console.log("Count is " + shipcounter + "!");
}
console.log("hppppp");


let timesToHello = 3;
for(let i = 0; i<timesToHello; i++){
  console.log("Hey");
}



let animals = ["Lion", "Flamengo", "Burn", "Ydav"];
for (let i=0; i < animals.length;i++){
console.log("This zoo has animals: " + animals[i] + "!");
}

let names = "Niko";
for (let i=0; i<names.length;i++){
  console.log("Name has a " + name[i] + "!");
}


for(let x = 2; x < 10000; x = x*2){
  console.log(x);
}

for (let y = 3; y < 10000; y = y*3){
  console.log(y);
}

let counter = 3;
while(counter < 10000){
  console.log("Count is " + counter + "!");
  counter = counter * 3;
};

let animalss = ["Cat", "Fish", "Lemur", "Varan"];
for (let i=0; i < animalss.length;i++){
animalss[i] = "Perfect animals " + animalss[i];
}
console.log(animalss);


var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
var stringLength = 6;

for (var i = 0; i < stringLength; i++) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString)