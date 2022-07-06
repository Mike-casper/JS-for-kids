
let pickWord = function(){
  let words = ["программа","макака","прекрасный","оладушек","помидор","тапки","апельсин"];
  
  return words[Math.floor(Math.random() * words.length)];
  };
  
  let setupAnswerArray = function (word) {
  let answerArray = [];
  for(let i = 0; i < word.length; i++){
    answerArray[i] = "_";
  }
  return answerArray;
  };
  
  let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
  };
  
  let getGuess = function () {
    return prompt("Guess a letter, or click Cancel to stop playing.");
  };
  
  let updateGameState = function (guess, word, answerArray) {
    let appearances = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        appearances++;
      }
    }
  
    return appearances;
  };
  
  let showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert("Good job! The answer was " + answerArray.join(""));
  };
  
  let word = pickWord();
  let answerArray = setupAnswerArray(word);
  let remainingLetters = word.length;
  
  
  while (remainingLetters > 0) { showPlayerProgress(answerArray); let guess = getGuess();
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      let correctGuesses = updateGameState(guess, word, answerArray);
      remainingLetters -= correctGuesses;
    }
  }
  
  showAnswerAndCongratulatePlayer(answerArray);