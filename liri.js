require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");
// Twitter package
var Twitter = require("twitter");
// Spotify package
var Spotify = require("node-spotify-api");
//this one is for OMDb
var request = require("request");
var input = process.argv[2];
var input2 = process.argv[3];

if (input === "movie-this") {
// var movieName = function(gitMovie) {
request("http://www.omdbapi.com/?t=" + input2 + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
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
})}

else if (input === "my-tweets") {
    var client = new Twitter(keys.twitter);
    var params = {screen_name: 'x21082133'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++){
    console.log(tweets[i].text);
    console.log(tweets[i].created_at);
  }}
})
}
else if (input === "spotify-this-song") {
  var spotify = new Spotify(keys.spotify);
  spotify.search({ type: 'track', query: input2 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
var songs = data.tracks.items
for (var i = 0; i < songs.length; i++){
  console.log(songs[i].name);
  console.log(songs[i].album.name);
  console.log(songs[i].artists[0].name);
  console.log(songs[i].preview_url);
  }})
}
else if (input === "do-what-it-says") {
  fs.readFile("random.text", "utf8", function(error, data) {
    console.log(data);
  })
}
else {
  console.log("your doing it wrong");
}





// * `do-what-it-says`

