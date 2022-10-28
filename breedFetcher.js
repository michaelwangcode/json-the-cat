// Import request library
const request = require('request');



// This function fetches a breed description
const fetchBreedDescription = function(breedName, callback) {

  // Request cat info from thecatapi.com
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    // If there is an error, display an error message and return
    if (error) {
      //console.log("Error: Request failed");
      callback("Request failed.", null);
      return;
    }

    // Convert the data from string to JSON
    const data = JSON.parse(body);

    // If the breed is not found, display a message and return
    if (data.length === 0) {
      //console.log("Breed not found");
      callback("Breed not found.", null);
      return;
    }
    
    // Return null in the callback when there are no errors
    callback(null, data[0].description);
  });
};


// Export the fetchBreedDescription function
module.exports = { fetchBreedDescription };

