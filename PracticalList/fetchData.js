async function fetchData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const userData = await response.json();
        return userData;
      } else {
        return null; 
      }
    } catch (error) {
      return null; 
    }
  }
  module.exports = fetchData;
