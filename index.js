// Import the breedFetcher file
const { fetchBreedDescription } = require('./breedFetcher');

// Get breedName with command line
const breedName = process.argv[2];


// Call the fetchBreedDescription function
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
