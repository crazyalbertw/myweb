
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] }
    ],
    //ships:[ {locations: ["34", "35", "36"], hits: ["", "", ""]},
    //        {locations: ["02", "03", "04"], hits: ["", "", ""]},
    //        {locations: ["13", "14", "15"], hits: ["", "", ""]} ],

    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            //var location = ship.locations;
            //var index = location.indexOf(guess);
            var index = ship.locations.indexOf(guess);
            //get the index of location
            if (index >= 0) {
                //get a hit
                ship.hits[index] = "hit";
                //this.ship[i].hits[index]
                view.displayHit(guess);
                view.displayMessage("We got a Hit!");
                if (this.isSunk(ship)) {
                    this.shipsSunk++;
                    view.displayMessage("We crash a battleship!");
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("Miss Shot");
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
        console.log("Ships array: ");
        console.log(this.ships);
    },

    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if (direction === 1) { // horizontal
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        } else { // vertical
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize);
        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};



var view = {
    displayMessage: function(msg) {
        var message = document.getElementById("messageView");
        message.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class","hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class","miss");
    }
};




var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        //real numerical location
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
            view.displayMessage("You sank all my battleship in " + this.guesses + " guesses");
            }
        }

    }

};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length!== 2) {
        alert("please enter a letter and a number");
    }
    else {
        var first = guess.charAt(0);
        var row = alphabet.indexOf(first);
        var col = guess.charAt(1);
        if (isNaN(row) || isNaN(col)) {
            alert("please enter a valid letter and number here");
        }
        else if (row < 0 || row >= model.boardSize || col < 0 || col >= model.boardSize) {
            alert("Your input is off the board");
        }
        else {
            return row + col;
        }
    }
    return null;
}


function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toUpperCase();
    controller.processGuess(guess);
    guessInput.value = "";
}


function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");

    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    // handle "return" key press
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    // place the ships on the game board
    model.generateShipLocations();
}
window.onload = init;
//view.displayHit("55");
//view.displayMiss("35");
//view.displayHit("05");
//view.displayMiss("01");
//view.displayHit("55");
//view.displayMessage("Sink!");
//model.fire("34");
//model.fire("35");
//model.fire("36");
//
//controller.processGuess("A5");