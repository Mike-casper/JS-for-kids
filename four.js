
let cat = {
  "legs" : 3,
  "name" : "Гармония",
  "color" : "Черепаховый",
};

let dog = {
  legs : 4,
  name : "Шарик",
  color : "Черный",
};

console.log(dog["name"]);
console.log(Object.keys(dog));

let secondCat = {
  "legs" : 3,
  "name first" : "Гармония Филомена Морган",
  color : "Черепаховый",
};

console.log(secondCat["name first"]);

//---// Добавление элементов 2 способами
let thirdCat = {};
thirdCat["legs"] = 4;
thirdCat["name"] = "Гармошка";
thirdCat["color"] = "Рыжий";
console.log(Object.keys(thirdCat));
console.log(thirdCat["name"]);

let secondDog = {};
secondDog.legs = 4;
secondDog.name = "Барбос";
secondDog.color = "Пятнистый";
console.log(secondDog["legs"]);
//---//

let dinosaurs = [
  {name: "Тиранозавр рекс", period: "Верхнемеловой"},
  {name: "Стегозавр", period: "Верхнеюрский"},
  {name: "Платеозавр", period: "Триасовый"},
];
console.log(dinosaurs[0]);
console.log(dinosaurs[0].name);

let anna = {name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = {name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
let kate = {name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };
let friends = [anna, dave, kate];

console.log(friends[1]);
console.log(friends[1].luckyNumbers);
console.log(friends);

let owedMoney = {};
owedMoney.Джимми = 5;
owedMoney.Анна = 3;
owedMoney.Джимми +=5;
console.log(owedMoney.Джимми);

let movies = {
  "В поисках Немо": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерс", "Александр Гоулд"],
    format: "DVD",
  },
  "Звездные войны: Эпизод 5 - Возвращение джедая": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
    format: "DVD",
  },
  "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
    format: "Blu-ray"
    }
   };

console.log(movies);
let cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
  format: "Blu-ray"
 };
 movies["Тачки"] = cars;

 console.log(movies);

 var myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула"
  };
  console.log(myCrazyObject["some array"][2].number);


