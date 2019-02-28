var gameMarker = "x"

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
