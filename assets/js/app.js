var movieTitle = document.getElementById("Title");
var movieReleased = document.getElementById("Released");
var movieRated = document.getElementById("Rated");
var movieDirector = document.getElementById("Director");
var movieGenre = document.getElementById("Genre");
var movieActors = document.getElementById("Actors");
var moviePlot = document.getElementById("Plot");
var searchInput = document.getElementById("input");
var searchButton = document.getElementById("searchButton");




function getTitle () {
  var titleSearch = searchButton.value;

  var requestUrl = "http://www.omdbapi.com/?apikey=5befe5de&t= " + searchInput.value;
  
  console.log(requestUrl);


  fetch(requestUrl)
    .then(function (res) {
      return res.json();
    })
      
    .then(function (data) {
      console.log(data);
      var searchMovie = data;

    movieTitle.value = "Movie Title: " + searchMovie.Title;
    movieReleased.value = "Year Released: " + searchMovie.Released;
    movieRated.value = "Movie Rating: " + searchMovie.Rated;
    movieDirector.value = "Movie Director: " + searchMovie.Director;
    movieGenre.value = "Movie Genre: " + searchMovie.Genre;
    movieActors.value = "Movie Actors: " + searchMovie.Actors;
    moviePlot.value = "Movie Plot: " + searchMovie.Plot;
    
      searchInput.value = "";

      console.log(searchMovie.Title);
    
  });
}

searchButton.addEventListener("click", getTitle);
  
