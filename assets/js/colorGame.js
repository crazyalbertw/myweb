// only written in JS
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var judge = document.querySelector("#judge");
var resetBtn = document.querySelector(".reset");
var modeBtn = document.querySelectorAll(".mode");


init();

function init(){
    setupModeBtns();
    setupSquares();
    reset();
}

function setupModeBtns(){
    for (var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            (this.textContent === "Easy") ? (numSquares = 3) : (numSquares = 6);
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i<squares.length; i++) {
        // squares[i].style.background = colors[i];
        resetBtn.textContent = "New Colors";
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                changeColor(pickedColor);
                h1.style.background = pickedColor;
                judge.textContent = "Congratulations!";
                resetBtn.textContent = "Play Again";
            }else {
                this.style.background = "#333333";
                judge.textContent = "Try Again";
                resetBtn.textContent = "New Colors";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    judge.textContent = "";
    resetBtn.textContent = "New Colors";
    for (var i = 0; i<squares.length; i++){
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.background = "steelblue";
}

resetBtn.addEventListener("click",function(){
    reset();
})


function changeColor(color) {
    for (var i = 0; i<squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// add design patterns in future codes
// var game = {}
// game.init = function(){

// }
// game.init();









