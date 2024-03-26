const animals = ["MONKEY", "TIGER", "POLARBEAR", "LION", "ELEPHANT"];
const randomIndex = Math.floor(Math.random() * animals.length);
let targetWord = animals[randomIndex];
let guessedWord = "_".repeat(targetWord.length);

document.getElementById("hint").innerText = getHint(randomIndex);
document.getElementById("guessedWord").innerText = guessedWord;

function getHint(index) {
  switch (index) {
    case 0:
      return "The animal which is closely related to humans";
    case 1:
      return "The national animal of India";
    case 2:
      return "Animals which live in igloos";
    case 3:
      return "An animal which is known as Simba";
    case 4:
      return "Giant animal lives in forests";
    default:
      return "";
  }
}

function checkGuess() {
  const guess = document.getElementById("guessInput").value.toUpperCase();
  document.getElementById("guessInput").value = "";

  let found = false;
  let newGuessedWord = "";

  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i] === guess) {
      newGuessedWord += guess;
      found = true;
    } else {
      newGuessedWord += guessedWord[i];
    }
  }

  guessedWord = newGuessedWord;

  document.getElementById("guessedWord").innerText = guessedWord;

  if (guessedWord === targetWord) {
    document.getElementById("message").innerText = "Congratulations! You guessed the word: " + targetWord;
  } else if (found) {
    document.getElementById("message").innerText = "Correct guess!";
  } else {
    document.getElementById("message").innerText = "Incorrect guess! This letter does not match the word.";
  }
}
