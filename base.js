let sillyString = "HeY, How it's GOINg?";
let lowerString = sillyString.toLowerCase();
let firstCharacter = lowerString[0];
let firstCharacterUpper = firstCharacter.toUpperCase();
let restOfString = lowerString.slice(1);

console.log(firstCharacterUpper + restOfString);


let sillyStringg = "HeY, How it's GOINg?";
console.log(sillyStringg[0].toUpperCase() + sillyStringg.slice(1).toLowerCase());


let hadShower = true;
let hasBackpack = false;
console.log(hadShower && hasBackpack);



let age = 11;
let accompanied = true;
let enterAge = 12;

console.log(enterAge <= age || accompanied);