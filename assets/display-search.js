var libraryURL = "https://www.loc.gov/search/?q=baseball&fo=json";

fetch(libraryURL).then(function (response) {
    console.log(response);
    return response.json();
  }) .then(function(data) {
      console.log(data.results);
  }) 