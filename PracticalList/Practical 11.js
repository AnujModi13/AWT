// Write a program that demonstrates asynchronous behavior using a callback
// function. For example, create a function that simulates fetching data from an
// API and invokes a callback with the fetched data.

// Simulate an asynchronous API request
function fetchDataFromAPI(callback) {
    setTimeout(function () {
      const data = {
        userId: '072',
        id: '21CE072',
        title: 'Practical 11',
        body: 'This is some sample data fetched from an API.',
      };
      callback(data);
    }, 2000); // Simulate a 2-second delay
  }
  
  // Callback function to handle the fetched data
  function handleData(data) {
    console.log('Data received:', data);
  }
  
  // Calling the fetchDataFromAPI function with the callback
  console.log('Fetching data...');
  fetchDataFromAPI(handleData);
  console.log('Request sent asynchronously.');
