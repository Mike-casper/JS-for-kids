

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