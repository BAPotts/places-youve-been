function PlacesIveBeen() {
  this.locations = [];
  this.currentId = 0;
}

PlacesIveBeen.prototype.addLocation = function(location) {
  location.id=this.assignId();
  this.locations.push(location);
}

PlacesIveBeen.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
}


function Locations(name, landmarks, seasonVisited, notes) {
  this.name = name;
  this.landmarks = landmarks;
  this.seasonVisited = seasonVisited;
  this.notes = notes;
}

$(document).ready(function() {

let listOfPlaces = new PlacesIveBeen();

let annArbor = new Locations("Ann Arbor", ["U of M", "Pinball Pete's"], "Summer 2019", "I've been here lots of times.");
let frankenmuth = new Locations("Frankenmuth", ["That chicken place", "The other chicken place"], "Spring 2018", "I stayed overnight in a cute cabin.");
let hamtramck = new Locations("Hamtramck", ["Bumbos", "Polish Village"], "Winter 2017", "I used to live here in the world's nastiest apartment");







});