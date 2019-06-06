/******************************************
 * ----------VARIABLES--------------- *
 *********************************************/

//Function Expressions

function game(wordToGuess, userWord, guessRemaining) {
    let lost = false;
    let won = false;

    $("body").keydown(function(e) {
        let wordCompare;
        let alreadyGuessed = false;
        const key = event.key; // "a", "1", "Shift", etc.
        console.log("User pressed: " + key, guessRemaining);
        wordCompare = checkLetterMatch(
            key,
            wordToGuess,
            userWord,
            guessRemaining
        );
        console.log(userWord, wordCompare, wordToGuess);

        if (!won && !lost) {
            if (userWord !== wordCompare) {
                userWord = wordCompare;
                $(".guessArea").text(userWord);
            } else if (wordCompare === userWord && !lost) {
                if (guessRemaining > 0) {
                    let count = 0;
                    for (let i = 0; i < userWord.length; i++) {
                        if (key === userWord[i]) {
                            alreadyGuessed = true;
                            break;
                        }
                    }
                    if (!alreadyGuessed) {
                        guessRemaining--;
                        $(".guessCounter").text(guessRemaining);

                        resetAlreadyGuessed();
                    }
                    alreadyGuessed = false;
                } else if (guessRemaining <= 0) {
                    $(".directions").text("You Lose! Try Again?");
                    $(".guessArea").text('"' + wordToGuess + '"');
                    $("#resetData").css("display", "block");
                    lost = true;
                    lossCount++;
                    return;
                }
            }

            if (userWord === wordToGuess && !won) {
                $(".directions").text("You Win! Play Again?");
                $("#resetData").css("display", "block");
                won = true;
                winCount++;

                return;
            }
        }
    });
}

let resetScore = function() {
    winCount = 0;
    lossCount = 0;
    won = false;
    lost = false;
    $(".wins").text(winCount);
    $(".losses").text(lossCount);
    return;
};

let resetAlreadyGuessed = function() {
    alreadyGuessed = false;
};

let resetGame = function() {
    guessRemaining = 10;
    $(".wins").text(winCount);
    $(".losses").text(lossCount);
    $(".directions").text(directions);
    $(".guessCounter").text(guessRemaining);
    colorMatch = document.body.querySelector("#colorExample");
    guessArea = document.body.querySelector(".guessArea");
    wordGenerated = randomizer(colorList);
    letterCount = wordGenerated.length;
    wordTranslatedUnderscore = underScoreCount(letterCount);
    $(".guessArea").text(wordTranslatedUnderscore);
    wordOutput = $(".guessArea").text();
    setColor(wordGenerated, colorMatch);
    $("#resetData").css("display", "none");
    return;
};

let rematchChoice = function(input) {
    $("body").keyup(function(f) {
        if (input === "y") {
            return true;
        } else {
            return false;
        }
    });
};

let fillIn = function(entry, letter, i) {
    let switchLetter = entry[i];
    switchLetter = letter;
    return switchLetter;
};

let updateGuess = function(word, letter, i) {
    let wordArr = word.split("");
    wordArr[i] = letter;
    let wordStr = wordArr.join("");
    return wordStr;
};

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
};

let randomizer = function(list) {
    //   array.splice(Math.floor(Math.random()*array.length), 1);

    randomWord = list[Math.floor(Math.random() * list.length)];
    // console.log(list.indexOf(randomWord), randomWord);
    // cutWord = list.splice(randomWord, 1);
    // console.log(cutWord);
    return randomWord;
};

let underScoreCount = function(charCount) {
    let underscores = "";

    for (let i = 0; i < charCount; i++) {
        underscores += "_";
    }
    return underscores;
};

let setColor = function(color, image) {
    color = color.toLowerCase();
    image.style.backgroundColor = color;
};

let makeArrLowerCase = function(colorList) {
    for (let i = 0; i < colorList.length; i++) {
        colorList[i] = colorList[i].toLowerCase();
    }
    return colorList;
};

//Essential Variables

let colorList = [
    "Firebrick",
    "Chocolate",
    "Lime",
    "Salmon",
    "Crimson",
    "Gold",
    "Pink",
    "Coral",
    "Tomato",
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
    "Silver"
];
colorList = makeArrLowerCase(colorList);

let guessRemaining = 10;
let winCount = 0;
let lossCount = 0;

let directions = $(".directions").text();

let colorMatch = document.body.querySelector("#colorExample");
let guessArea = document.body.querySelector(".guessArea");
let wordGenerated = randomizer(colorList);
let letterCount = wordGenerated.length;
let wordTranslatedUnderscore = underScoreCount(letterCount);
$(".guessArea").text(wordTranslatedUnderscore);
let wordOutput = $(".guessArea").text();

/******************************************
 * ----------GAME SET UP--------------- *
 *********************************************/

console.log(colorList);
console.log(wordOutput);
setColor(wordGenerated, colorMatch);
$(".guessCounter").text(guessRemaining);
$(".wins").text(winCount);
$(".losses").text(lossCount);
console.log(letterCount + " " + wordGenerated);

/******************************************
 * ----------GAME--------------- *
 *********************************************/

game(wordGenerated, wordOutput, guessRemaining);

$("#resetData").click(function() {
    resetGame();
    game(wordGenerated, wordOutput, guessRemaining);
});

$("#resetScore").click(function() {
    resetScore();
});
