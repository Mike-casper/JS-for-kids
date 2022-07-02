
let animals = [];
animals.push("Кот");
animals.push("Пес");
animals.push("Лама");
console.log(animals.length);

animals.unshift("Мартышка");
console.log(animals);

let lastAnimal = animals.pop();
console.log(lastAnimal);

let firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);


let furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
let scalyAnimals = ["Удав", "Годзилла"];
let featheredAnimals = ["Ара", "Додо"];
let allAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals);

console.log(allAnimals);
console.log(furryAnimals);


let colors = ["красный","зеленый","синий","черный","белый",];
let redColor = colors.indexOf("синий");
let whiteColor = colors.indexOf("белый");
console.log(redColor);
console.log(whiteColor);

let boringAnimals = ["Мартышка","Кот","Рыба","Ящерица",];
let boringAnimalss = boringAnimals.join(" - ");
console.log(boringAnimalss);



let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

let randomWord = ["Взрыв","Пещера","Принцесса","Карандаш","Ручка","Ластик"];
let randomLength = randomWord.length;
console.log(randomLength);
let randomIndex = Math.floor(Math.random() * 6);
let randomWords = randomWord[randomIndex];
console.log(randomWords);




let phrases = ["Звучит неплохо","Да, это определнно нужно сделать","Не думаю,что это хорошая идея","Может, не сегодня?","Компьютер говорит нет"];
let randomPhrase = phrases[Math.floor(Math.random() * 5)];
console.log(randomPhrase);


let randomBodyParts = ["глаз","нос","череп",];
let randomAdjectives = ["вонючая","унылая","дурашка",];
let randomWordss = ["муха","выдра","дубина","мартышка","крыса",];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWorD = randomWordss[Math.floor(Math.random() * randomWordss.length)];

let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWorD + "!";
console.log(randomInsult);

let randomBodyPartss = ["глаз","нос","череп",];
let randomAdjectivess = ["вонючая","унылая","дурашка",];
let randomWordsss = ["муха","выдра","дубина","мартышка","крыса",];
let randomBodyPartt = randomBodyPartss[Math.floor(Math.random() * 3)];
let randomAdjectivet = randomAdjectivess[Math.floor(Math.random() * 3)];
let randomWorDD = randomWordsss[Math.floor(Math.random() * randomWordss.length)];

let randomInsultss = ["У тебя",randomBodyPartt,"словно",randomAdjectivet,randomWorDD + "!"].join(" ");
console.log(randomInsultss);

let mas = [3,2,1].join(" more, than ");
console.log(mas);

