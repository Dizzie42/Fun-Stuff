var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var res = document.getElementById("reset");
var p1display = document.querySelector("#p1score");
var p2display = document.querySelector("#p2score");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var finalScore = 5;

function reset() {
    gameOver = false;
    p1Score = 0, p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
}

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === finalScore){
            p1display.classList.add("winner");
            gameOver=true;
        }
        p1display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === finalScore){
            p2display.classList.add("winner");
            gameOver=true;
        }
        p2display.textContent = p2Score;
    }
});

res.addEventListener("click", function(){
    reset();
});


numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    finalScore = Number(this.value);
    reset();
});
