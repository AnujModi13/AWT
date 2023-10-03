// Write a program that uses Promises to handle asynchronous operations. For
// example, create a function that returns a Promise to fetch data from an API and
// resolve it with the fetched data.
// Implement error handling using Promises by rejecting a Promise with an error
// message in case of failure.

// Function that simulates fetching data from an API
function fetchDataFromSimulatedAPI() {
    return new Promise((resolve, reject) => {
      // Simulate a delay like the time it takes to fetch data in real api
      setTimeout(() => {
        const Data = {
          id: '074',
          name: '21CE072',
          description: 'Practical 13',
        };
        resolve(Data);
      }, 2000); // Simulated delay of 2 seconds
    });
  }
  
  fetchDataFromSimulatedAPI().then(data => {
      console.log('Data fetched successfully:', data);
    })
    .catch(error => {
      console.error('Error in fetching the Data:', error);
    });
