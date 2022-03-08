var libraryURL = "https://www.loc.gov/search/?q=baseball&fo=json";

function handleSearchFormSubmit(event){
    event.preventDefault();

    fetch(libraryURL).then(function (response) {
    console.log(response);
    return response.json();
  }) .then(function(data) {
      console.log(data.results);
  })}
  var search = document.querySelector("$search-input").value;}



  searchFormEl.