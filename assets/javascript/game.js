/******************************************
 * ----------VARIABLES--------------- * 
 *********************************************/

//Function Expressions

function game(wordToGuess, userWord, typeBox) {

    console.log(typeof(userWord), userWord);
    let guessRemaining = 10;

    // $(typeBox).click(function() { 
    //     guessRemaining--;
    //     console.log(guessRemaining);
    //     // $('.guessCounter').append(guessRemaining);

    //     $('.guessCounter').text(guessRemaining);
    // });

    $('body').keydown(function (e) { 
        let wordCompare;
        const key = event.key; // "a", "1", "Shift", etc.
        console.log("User pressed: " + key, guessRemaining);
        wordCompare = checkLetterMatch(key, wordToGuess, userWord, guessRemaining);

        if (wordCompare === userWord) {
            guessRemaining--;
            $('.guessCounter').text(guessRemaining);

            if (guessRemaining === 0) {
                input = prompt("You Lose! Try Again? (y/n)");
                if (rematchChoice(input)) {
                    location.reload();
                } else {
                    $('h3').text("Thanks for Playing!");
                }
            }
        }
        userWord = wordCompare;

        $(".guessArea").text(userWord);
    });

};

let rematchChoice = function(input) {
    $('body').keyup(function (f) {
        if (input === 'y') {
            return true;
        } else {
            return false;
        }
    });
}

let fillIn = function(entry, letter, i) {
    let switchLetter = entry[i];
    switchLetter = letter;
    return switchLetter;
}

let updateGuess = function(word, letter, i) {
    wordArr = word.split("");
    wordArr[i] = letter;
    wordStr = wordArr.join("");
    return wordStr;
}

let checkLetterMatch = function(key, word, userWord, guessRemaining) {
    word = word.toLowerCase();
    userWord = userWord;
    match = false;
    guessRemaining = guessRemaining;
    for (let i = 0; i < word.length; i++) {

        if (key === word[i]) {
            let correctLetter = fillIn(userWord, key, i);
            console.log("Important!" + correctLetter, userWord);
            userWord = updateGuess(userWord, correctLetter, i);
            console.log("User Word " + userWord);
            match = true;
        }
    }

    console.log("Word To Guess: " + word, "Word Guessed So Far: " + userWord);
    return userWord;
}

let randomizer = function(list) {

    randomWord = list[Math.floor(Math.random() * list.length)];
    return randomWord;
};

let underScoreCount = function(charCount) {
    let underscores = "";

    for (let i = 0; i < charCount; i++) {
        underscores += "_";
    }
    return underscores;
}

let setColor = function(color, image) {
    color = color.toLowerCase();
    image.style.backgroundColor = color;
}


//Essential Variables

const colorList = [
    "Firebrick",
    "Chocolate",
    "Lime",
    "Salmon",
    "Crimson",
    "Gold",
    "Pink",
    "Coral",
    "Tomato ",
    "Orange",
    "Maroon",    
    "Yellow",
    "Moccasin",
    "Khaki",
    "Lavender",
    "Thistle",    
    "Plum",
    "Fuchsia",
    "Purple",
    "Indigo",
    "Green",
    "Olive",
    "Teal",
    "Turquoise",    
    "Cyan",
    "Aquamarine",
    "Blue",
    "Navy",
    "Cornsilk",    
    "Brown",
    "Bisque",
    "Wheat",
    "Tan",
    "Peru",    
    "Chocolate",
    "Sienna",
    "Azure",
    "Beige",
    "Silver",
];

let colorMatch = document.body.querySelector('#colorExample');
let guessArea = document.body.querySelector(".guessArea");
let wordGenerated = randomizer(colorList);
let letterCount = wordGenerated.length;
let wordTranslatedUnderscore = underScoreCount(letterCount);
$(".guessArea").text(wordTranslatedUnderscore);
let wordOutput = $(".guessArea").text();
// let wordOutput = ;

/******************************************
 * ----------GAME SET UP--------------- * 
 *********************************************/
console.log(wordOutput);
setColor(wordGenerated, colorMatch);
console.log(letterCount + " " + wordGenerated);
// guessArea.appendChild(wordOutput);

/******************************************
 * ----------GAME--------------- * 
 *********************************************/

 game(wordGenerated, wordOutput, document.body.querySelector(".game-body"));