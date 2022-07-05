
/*let name = prompt("Your name?");
console.log("Hey, " + name);

let likesCats = confirm("Do you like cats?");
if(likesCats){
  console.log("You're good cat")
} else{
  console.log("Don't worry.")
}
*/
let words = ["программа","макака","прекрасный","оладушек","помидор","тапки","апельсин"];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for(let i = 0; i < word.length; i++){
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let trying = 8;

while(remainingLetters > 0 && trying > 0){
  alert(answerArray.join(" "));
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
  if(guess === null){
    break;
  } else if (guess.length !== 1){
    alert("Введите только одну букву");
  }else{
    trying--;
    for (let j=0; j<word.length;j++){
      if(word[j] === guess && answerArray[j] === "_"){
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  }
  alert(answerArray.join(" "));
  alert("Вы угадали слово " + word)
  if (trying > 0) {
    alert("Good job! The answer was " + word);
  } else {
    alert("Too bad! The answer was " + word);
  }


