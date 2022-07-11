window.onload = function(){
let headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
let NewHedingText = prompt("Enter a new h");
headingElement.innerHTML = NewHedingText;
}