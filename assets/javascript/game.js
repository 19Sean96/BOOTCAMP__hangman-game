/******************************************
 * ----------VARIABLES--------------- * 
 *********************************************/

//Function Expressions

const game = function(wordToGuess, userWord, typeBox) {


    // typeBox.addEventListener('click', function() {
    //     let guessRemaining = document.body.querySelector('.guessCounter').textContent;
    //     guessRemaining = guessRemaining - 1;
    //     console.log(guessRemaining);
    // });

    let guessRemaining = 10;

    $(typeBox).click(function() { 
        guessRemaining--;
        console.log(guessRemaining);
        // $('.guessCounter').append(guessRemaining);

        $('.guessCounter').text(guessRemaining);
    });

    $('body').keyup(function (e) { 
        const key = event.key; // "a", "1", "Shift", etc.
        // console.log(key);

        checkLetterMatch(key, wordToGuess, userWord);
    });

};

// let guessReducer = function(guessCount) {
//     guessCount--;
//     console.log(guessCount);
//     guessCount--;
//     console.log(guessCount);

//     // return true;
// };

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
let wordOutput = document.createTextNode(wordTranslatedUnderscore);


/******************************************
 * ----------GAME SET UP--------------- * 
 *********************************************/

setColor(wordGenerated, colorMatch);
console.log(letterCount + " " + wordGenerated);
guessArea.appendChild(wordOutput);


/******************************************
 * ----------GAME--------------- * 
 *********************************************/

 game(wordGenerated, wordOutput, document.body.querySelector(".game-body"));