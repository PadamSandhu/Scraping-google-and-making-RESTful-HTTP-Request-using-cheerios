

var request = require("request"),
cheerio = require("cheerio"),
movie_name = process.argv[2],           // This will extract the name of the movie which was entred 
timeout    = Number(process.argv[3]),   // This will extract the time which is required for spoiler to appear
request = require("request"),
cheerio = require("cheerio"),
url = "https://www.google.ca/search?q=" + movie_name,
urlsarr = [];

console.log ("\n==========================================================================")
console.log("SPOILER WARNING** We will be spoiling the plot of "+ movie_name+ " in " + timeout +" seconds")
console.log ("==========================================================================\n")


console.log("\n ============== This is Quick Google Search for "+movie_name+ " ========== \n")



var url = "https://www.google.ca/search?q=" + movie_name + "+film";

request(url, function (error, response, body) {
if (!error) {
  const $ = cheerio.load(body);
    let information = $(".r a");
  
    information.each(function(i,elements){
        let displacygoogle = $(elements).text();
        console.log("\n"+displacygoogle);

    })
} else {
  console.log("We’ve encountered an error: " + error);
}
});



var movie_plot = ""

// Making a call to Restful API to get spoiler information from themoviedb.

// Note (Update the key by registering your free account at themoviedb)


var weblink = "https://api.themoviedb.org/3/search/movie?api_key=23e48c4666249e77fcb9c74c9013300e&query="+ movie_name;


var request = require('request');

request(weblink, function (error, response, body) {
  if (!error) {
    movie_plot = JSON.parse(body);
    var plotmov = ""
    
    for (let i=0;i<movie_plot.total_results;i++){
      if(movie_name.toLowerCase()===(movie_plot.results[i].title).toLowerCase()||movie_name.toLowerCase()===(body.results[i].original_title).toLowerCase()){
          plotmov = movie_plot.results[i].overview
          break
      }
      else if(movie_plot.total_results===0){
        plotmov = "Buddy are you high..???"
        break
      }
      else if(movie_plot.total_results>0){
        plotmov = "Can't find the movie, check your spellings"
        break
      }
    }

    
    
    function alertFun() {
      console.log ("\n \n=====================  Plot of the movie  ===============================\n")
      console.log(plotmov)
      console.log ("\n=========================================================================")
      
    }
    
    // This function will display the results which are received from the API

    setTimeout(function() { alertFun()}, timeout*1000);
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
  });

