// Geolocation

let theLocation = document.getElementById("my-coordinates")

function obtainLocation() {
  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(showPosition, error)
  } 
}

function showPosition(position) {
  theLocation.innerHTML = "Longitude: " + 
  position.coords.longitude + " Latitude: " + 
  position.coords.latitude
}

function error() {
  theLocation.innerHTML = "Unable to get location."
}

// Date 

var today = new Date();

var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}

var out = document.getElementById("output");

out.innerHTML = month + "/" + day + "/" + year;

// Time

window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var mid = 'PM';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'AM';
    }     
  document.getElementById('currentTime').innerHTML = hour+':'+min + mid ;
    setTimeout(clock, 1000);
    }
}


// To Do List

$(function() {

  let $list = $('ul');
  let $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val('');
  });

  $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
  });

});
