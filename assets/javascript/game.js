// words to guess

var words: ["simba", "daisy", "bambi", "nemo", "tramp", "flounder", "dumbo"]

//variable set up

var randomWord = "";
var wordLetters = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//other variables

var losses = 0;
var wins = 0;
var guessesLeft = 0;

//Functions

//Start the game

function Game () {
//generate random words from array
    randomWord = words[Math.floor(Math.random() * words.length)];

//make separate array, store in new array
    wordLetters = randomWord.split("");

//store word length, make blanks
    blanks = wordLetters.length;

//loop to make blanks 
    for (var i = 0; in < blanks; i++) {
        blanksAndCorrect.push("_");
    }
//blanks in html
    documents.getElementById("correctword").innerHTML = " " + blanksAndCorrect.join(" ");
    
//console
    console.log(randomWord);
    console.log(wordLetters);
    console.log(blanks);
    console.log(blanksAndCorrect);
}

