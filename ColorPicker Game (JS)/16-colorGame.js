var numberOfSquares = 6;
var colors = [];
var answer;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode button event listeners
    for(var i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //Set numberOfSquares depending on if we are on easy or hard
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
    //click event listeners for tiles
    for(var i=0; i< squares.length; i++){
        //add click listeners
        squares[i].addEventListener("click", function() {
            //grab color of clicked and compare to answer
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === answer){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}

function reset(){
    colors = generateColors(numberOfSquares);
    answer = pickColor();
    colorDisplay.textContent = answer;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";

    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

resetBtn.addEventListener("click", function() {
    reset();
});



function changeColors(color){
    //change all squares to match given color
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function generateColors(num){
    //make array of num random colors
    var arr = [];
    for(var i=0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick red, green, and blue from 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
