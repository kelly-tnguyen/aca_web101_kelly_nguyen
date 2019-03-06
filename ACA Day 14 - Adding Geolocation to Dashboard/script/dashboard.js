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