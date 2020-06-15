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