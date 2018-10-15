// require

const dotenv = require("dotenv").config();
const request = require("request");

// store process.argv in variables

const a = process.argv[2];
const b = process.argv[3];

// functions

const concertThis = function() {
  request("https://rest.bandsintown.com/artists/" + b + "/events?app_id=codingbootcamp", function(error, response, body) {
    
    console.log(JSON.parse(body));
    // console.log(JSON.parse(body).venue);
    // console.log(JSON.parse(body).datetime);
  })
}

const spotifyThis = function() {

}

const movieThis = function() {

}

const doIt = function() {

}

if (a === "concert-this") {
  concertThis();
} else if (a === "spotify-this-song") {
  spotifyThis();
} else if (a === "movie-this") {
  movieThis();
} else if (a === "do-what-it-says") {
  doIt();
} else {
  return false;
}


