 let gameMarker = "x";
 let game = [0,0,0,0,0,0,0,0,0];

 let boxes = document.querySelectorAll('.box');
 let turnDiv = document.querySelectorAll('.turn');



function changeMarkerToX(){ 
    gameMarker = "X";
    console.log("The x button was clicked!");
}

function changeMarkerToO(){ 
    gameMarker = "O";
    console.log("The o button was clicked!");
}

function placeMark(myDiv){
    document.getElementById(myDiv).innerText=gameMarker;
    console.log("Clicked!");
}

function reset() {
        console.log("Clear")
        let boxes = document.getElementsByClassName("box");
        for (var i=0; i<boxes.length; i++) {
            boxes[i].innerHTML = "";
        }
}



function changeMarker(box){
    if (currentPlayer === "X")
    {
        box.innerHTML = 'X';
    }
    else
    {
        box.innerHTML = 'O';
    }
}

function switchPlayers(){
    if (currentPlayer === "X")
    {
        currentPlayer = 'O';
    }
    else
    {
        currentPlayer = 'X';
    }
}





// Trying something new

let placeMark() = "x";

function startGame() {
    docment.turn = "X";
}

function placeMark(square) {
    square.innerText = document.turn;
    switchTurn();
}

function switchTurn() {
    if(document.turn == "X") {
        document.turn = "O";
    } else {
        document.turn = "X";
    }
}