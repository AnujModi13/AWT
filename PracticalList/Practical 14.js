// Convert a Promise-based asynchronous function into an async/await style
// function. For example, rewrite a function that fetches data from an API using
// async/await.
// Write a program that utilizes multiple async/await functions to fetch data from
// different APIs sequentially and display the combined results.

// Simulate fetching data from API1
async function fetchDataFromAPI1() {
    try {
      // Simulated data
      const data = { message: 'ID: 21CE072' };
      return data;
    } catch (error) {
      throw new Error('Error fetching data from API1: ' + error.message);
    }
  }
  
  // Simulate fetching data from API2
  async function fetchDataFromAPI2() {
    try {
      // Simulated data
      const data = { message: 'Practical 14' };
      return data;
    } catch (error) {
      throw new Error('Error fetching data from API2: ' + error.message);
    }
  }
  
  //fetch data from different APIs sequentially
  async function fetchAndDisplayCombinedData() {
    try {
      const data1 = await fetchDataFromAPI1();
      const data2 = await fetchDataFromAPI2();
      // Combine and displaying the result
      const combinedData = { data1, data2 };
      console.log('Combined Data:', combinedData);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  fetchAndDisplayCombinedData();
