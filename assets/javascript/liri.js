require("dotenv").config();

var keys = require("./key.js");
var Spotify =require(`node-spotify-api`);
var spotify = new Spotify({
    id: "6360e6d7441b48babd652a0abd007790",
    secret: "49dc057fad644a9caaf93e15339d5441"
});

var song = process.argv[3];
if (process.argv[2]=== "spotify-this-song") {
spotify.search({type:'track', query: song})
    .then(function(response) {
        for (var i = 0; i < response.tracks.items.length; i++) {
        console.log(`Artist: ${response.tracks.items[i].artists[0].name} \nSong: ${response.tracks.items[i].name} \nAlbum: ${response.tracks.items[i].album.name} \nPreview link: ${response.tracks.items[i].preview_url} \n\n`);
        }
    })
    .catch(function(err) {
        console.log(err);
    })
    
};


var axios = require("axios");
var artist = process.argv[3];
var bandsInTown = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
if(process.argv[2]=== "concert-this") {
axios.get(bandsInTown)
    .then(function(response){
        for (var i=0; i<response.data.length; i++) {
        console.log(`Venue: ${response.data[i].venue.name} \nCity: ${response.data[i].venue.city}, ${response.data[i].venue.country} \nDate: ${response.data[i].datetime} \n\n`);
        }
    })
};



var title = process.argv[3];
var queryUrl= "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";
if (process.argv[2]=== "movie-this") {
axios.get(queryUrl)
    .then (function(response) {
        console.log(`Title: ${response.data.Title} \nYear: ${response.data.Year} \nRating: ${response.data.Rated} \nRotten Tomatoes: ${response.data.Ratings[1].Value} \nCountry: ${response.data.Country} \nLanguage: ${response.data.Language} \nPlot: ${response.data.Plot} \nActors: ${response.data.Actors} \n\n`);
    })
};

var fs = require("fs");
var terms = [];
if (process.argv[2] === "do-what-it-says") {
fs.readFile("random.txt","utf8", function(error, data) {
    if (error) {
        return console.log(error);
    } else {
    var dataArr = data.split(", ");
dataArr.forEach(function(song) {
    console.log(song);


//     terms.push(dataArr);
//     console.log(terms);
//         spotify.search({type:'track', query: terms[1]})
//     .then(function(response) {
//         for (var i = 0; i < response.tracks.items.length; i++) {
//         console.log(`Artist: ${response.tracks.items[i].artists[0].name} \nSong: ${response.tracks.items[i].name} \nAlbum: ${response.tracks.items[i].album.name} \nPreview link: ${response.tracks.items[i].preview_url} \n\n`);
//         }
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
// }
// dataArr.forEach(function(song) {
//     console.log(song);
    

//     }
})
}
})
}