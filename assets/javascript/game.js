document.querySelector("#ShowWins").innerHTML = "<h1>HABIB</h1>"

document.querySelector("#textbox").value = "WORD GUESS GAME EXOTIC CAR EDITION"

document.querySelector("#BoardGame").innerHTML = "<h1> _ _ _ _ _ </h1>"

// Step 1 How to display wins and losses
var wins = 0;
var losses = 0;

var wrongguesses = ""

// Step 2 How to put the values of zero for the wins and losses

// Step 3 How to show number of remaining guesses
var remainingGuesses = 10
// Step 4 How to show remaining guesses to be 10

// Step 5 How to pick a words for gamew 

// Step 6 How to leave the under score for the chossen word 

// Step 7 How to display wrong guesses 

// step 8 How do you subtract remaining guesses when wrong anwser is choosen 

// below is how to create a variable start with the word var and name you choose
//    var wins=0
//   var losses=0

// 1 = assignments 
//==== comparing 2 values to see if its true

//Data types are srting, number and boolean
// "string" is text that has double quotes
// number would be 0 to 9 without the double quotes
// boolean is true or false with out double quotes

// point of an array is store data, startimg index zero
var listOfWords = ["Ferrari", "Porsche", "Mercedes Benz", "Bently", "McLaren"] //length of this array is 5

var computerPickWord = Math.floor(Math.random() * listOfWords.length)
//0 to 1, it is in decimal
//



var boardGame = []

var chosenWord = listOfWords[computerPickWord]

//split function converts a string into a an aray 
// i.g. from "bootcamp" =>  chosenWord=['b','o','o','t','c','a','m','p']
chosenWord = chosenWord.split("")

// function always has (). starts with the word function and then the name you choose relating to the work  
function intializeGame() {
    computerPickWord = Math.floor(Math.random() * listOfWords.length)


    boardGame = []

    chosenWord = listOfWords[computerPickWord]

    console.log(listOfWords[computerPickWord])

    document.querySelector("#ShowWins").innerHTML = wins

    document.querySelector("#remainingGuess").innerHTML = remainingGuesses


    wrongguesses = ""
    document.querySelector("#wrongGuess").innerHTML = wrongguesses

    // Step 2 How to put the values of zero for the wins and losses

    // Step 3 How to show number of remaining guesses
    remainingGuesses = 10


    //to make the underscores in boardgame 
    for (let index = 0; index < chosenWord.length; index = index + 1) {
        //adds data to my array
        boardGame.push("_");
    }
    //this function takes an array and converts it back into a string
    //boardGame=['_','_','_','_','_','_','_','_'] => " _ _ _ _ _ _ _ _ _"


    document.querySelector("#BoardGame").innerHTML = boardGame.join(" ")

}



intializeGame()

// onKeyPress Function captures your key press.
document.onkeypress = function (events) {
    console.log(events.key)
    var userKeyPress = events.key.toLowerCase()
    //to put the letter if its correct into boardgame. 
    //to replace to the underscore with correct letter
    for (let index = 0; index < chosenWord.length; index++) {

        // if statments are true staments only, 
        if (userKeyPress === chosenWord[index].toString().toLowerCase()) {
            //index is your postion to replace underscore with the user Key press

            boardGame[index] = userKeyPress
        }

    }
    if (chosenWord.toString().toLowerCase().indexOf(userKeyPress) === -1 && wrongguesses.toLowerCase().indexOf(userKeyPress) === -1
        && remainingGuesses != 0) {
        remainingGuesses--
        wrongguesses += userKeyPress + " "
        document.querySelector("#wrongGuess").innerHTML = wrongguesses
        alert("WRONG LETTER GUESS")
    }

    else if (remainingGuesses === 0) {
        losses++
        document.querySelector("#ShowLosses").innerHTML = losses
        alert("YOU HAVE LOST THE GAME")
        intializeGame()
    }

    else if (wrongguesses.toLowerCase().indexOf(userKeyPress) > -1 && chosenWord.toString().toLowerCase().indexOf(userKeyPress) === -1) {

        alert("WRONG LETTER SELECTED")
    }

    else if (boardGame.indexOf("_") === -1 && remainingGuesses <= 10) {
        wins++
        document.querySelector("#ShowWins").innerHTML = wins

        alert("YOU HAVE WON")
        intializeGame()

    }




    document.querySelector("#BoardGame").innerHTML = boardGame.join(" ")
    document.querySelector("#remainingGuess").innerHTML = remainingGuesses


}