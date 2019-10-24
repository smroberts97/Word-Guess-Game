// set up the words to guess in an array

var words: ["simba", "daisy", "bambi", "nemo", "tramp", "flounder", "dumbo"]

//variable set up

//variable refers to random word from the array
var randomWord = "";

//variable refers to the number of letters in the word
var wordLetters = [];

//variable refers to the number of blanks to show when word is selected by computer
var blanks = 0;

//variable refers to showing how many blanks and the correct letters
var blanksAndCorrect = [];

//variable refers to showing a list of letters that were incorrect
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

//functions to show images

//set up variables

var simba = document.getElementById("simba");
var daisy = document.getElementById("daisy");
var bambi = document.getElementById("bambi");
var nemo = document.getElementById("nemo");
var tramp = document.getElementById("tramp");
var flounder = document.getElementById("flounder");
var dumbo = document.getElementById("dumbo");

//functions to show images when correct word is filled in

//simba
function img() {

    if (randomWord === words[0]) {
        daisy.pause();
        bambi.pause();
        nemo.pause();
        tramp.pause();
        flounder.pause();
        dumbo.pause();
        simba.show_image();
        document.getElementById("image").src = "assets/images/simba.jpg";
    }

//daisy    
    else if (randomWord === words[1]) {
        simba.pause();
        bambi.pause();
        nemo.pause();
        tramp.pause();
        flounder.pause();
        dumbo.pause();
        daisy.show_image();
        document.getElementById("image").src = "assets/images/daisy.png";
    }

//bambi      
    else if (randomWord === words[2]) {
        simba.pause();
        daisy.pause();
        nemo.pause();
        tramp.pause();
        flounder.pause();
        dumbo.pause();
        bambi.show_image();
        document.getElementById("image").src = "assets/images/bambi.png";
    }    

//nemo
    else if (randomWord === words[3]) {
        simba.pause();
        daisy.pause();
        bambi.pause();
        tramp.pause();
        flounder.pause();
        dumbo.pause();
        nemo.show_image();
        document.getElementById("image").src = "assets/images/nemo.png";
    }  

//tramp
    else if (randomWord === words[4]) {
        simba.pause();
        daisy.pause();
        bambi.pause();
        nemo.pause();
        flounder.pause();
        dumbo.pause();
        tramp.show_image();
        document.getElementById("image").src = "assets/images/nemo.png";
    }

//flounder
    else if (randomWord === words[5]) {
        simba.pause();
        daisy.pause();
        bambi.pause();
        nemo.pause();
        tramp.pause();
        dumbo.pause();
        flounder.show_image();
        document.getElementById("image").src = "assets/images/flounder.png";
    }

//dumbo
    else if (randomWord === words[6]) {
        simba.pause();
        daisy.pause();
        bambi.pause();
        nemo.pause();
        tramp.pause();
        flounder.pause();
        dumbo.show_image();
        document.getElementById("image").src = "assets/images/dumbo.jpg";
    }
}

//start over function, reset the game; when user guessed 9 already, placeholder for wrongguess and blanks and correct

function reset() {
    guessesLeft = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//check for correct letters, compare if they are right; if letter is found in word
//if letter matches letters in word, then true
//if letter does not match, then false
//check each letter to see if it is in random word
//if wrong, put letter in list of tried letters, and subtract from guess count
function checkLetters(letter) {
    var letterIsInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] === letter) {
            letterIsInWord = true;
        }
    }

    if (letterIsInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] === letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else {wrongGuess.push(letter); guessesLeft--;}

    console.log(blanksAndCorrect)
}






