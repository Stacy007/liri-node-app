require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");
// Twitter package
var Twitter = require("twitter");
// Spotify package
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
//this one is for OMDb
var request = require("request");
var movie = process.argv[2] ;

var movieName = function(gitMovie) {
request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
// * `movie-this`'<movie name here>
  if (!error && response.statusCode === 200) {
    var movieThis = JSON.parse(body);
    console.log("Title: " + movieThis.Title);
    console.log("Year: " + movieThis.Year);
    console.log("Rating: " + movieThis.Rated);
    console.log("Rotten Tomatoes: " + movieThis.Ratings[1].Value);
    console.log("Country: " + movieThis.Country);
    console.log("Language: " + movieThis.Language);
    console.log("Plot: " + movieThis.Plot);
    console.log("Actors: " + movieThis.Actors);
  }
})};

// * `my-tweets` - show last 20 tweets
var client = new Twitter(keys.twitter);
var myTweets = function(getTweets) {

}

// * `spotify-this-song` '<song name here>'
var spotify = new Spotify(keys.spotify);
var spotifyThisSong = function(getSpotify) {
    
}
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.





// * `do-what-it-says`

