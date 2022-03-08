var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event){
    event.preventDefault();
    var search = document.querySelector("#search-input").value;
    var libraryURL = "https://www.loc.gov/search/?q=" + search + "&fo=json";





    fetch(libraryURL).then(function (response) {
    console.log(response);
    return response.json();
  }) .then(function(data) {
      console.log(data.results);
      
      var results = data.results;
      for(var i = 0; i < results.length; i++) {
          console.log(results[i].title)
          var resultItem = document.createElement("h1");
          resultItem.textContent = results[i].title;
          var resultDescription = document.createElement("p");
          resultDescription.textContent = results[i].subject[0];
          resultContentEl.append(resultItem, resultDescription)

      }
    







  })}
  



  searchFormEl.addEventListener('submit', handleSearchFormSubmit);