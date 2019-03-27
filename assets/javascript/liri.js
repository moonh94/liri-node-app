require("dotenv").config();

var keys = require("./key.js");
var Spotify =require(`node-spotify-api`);
var spotify = new Spotify(keys.Spotify);
var song = process.argv[2];
spotify.search({type: "track", query: song})
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(err) {
        console.log(err);
    })


var axios = require("axios");
var artist = process.argv[2];
var bandsInTown = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
axios.get(bandsInTown)
    .then(function(response){
        console.log(response.data.venue);
        //can't get past object
       // console.log(`Venue: ${response.data.venue.name} /nVenue location: ${response.data.venue.city}, ${response.data.venue.country} \nDate of Event: ${response.data.datetime}`);
    });



var title = process.argv[2];
var queryUrl= "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";
axios.get(queryUrl)
    .then (function(response) {
        console.log(`Title: ${response.data.Title} \nYear: ${response.data.Year} \nRating: ${response.data.imbdRating} \nRotten Tomatoes: ${response.data.Ratings[1]} \nCountry: ${response.data.Country} \nLanguage: ${response.data.Language} \nPlot: ${response.data.Plot} \nActors: ${response.data.Actors}`);
    });

var fs = require("fs");
fs.readFile("random.txt","utf8", function(error, data) {
    if (error) {
        return console.log(error);
    }else {
    console.log(data);
    }
});