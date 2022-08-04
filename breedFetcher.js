// Import request library
const request = require('request');

// Get command line arguments
const myArgs = process.argv.slice(2);

// Get the breed
const breed = myArgs[0];


// Request cat info from thecatapi.com
request(`https://api.theca/tapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  // If there is an error, display an error message and return
  if (error) {
    console.log("Error: Request failed");
    return;
  }

  // Convert the data from string to JSON
  const data = JSON.parse(body);

  // If the breed is not found, display a message and return
  if (data.length === 0) {
    console.log("Breed not found");
    return;
  }
  
  // Print the data
  console.log(data[0].description);
});