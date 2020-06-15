function PlacesIveBeen() {
  this.locations = [];
  this.currentID = 0;
}

function Locations(name, landmarks, seasonVisited, notes) {
  this.name = name;
  this.landmarks = landmarks;
  this.seasonVisited = seasonVisited;
  this.notes = notes;
}