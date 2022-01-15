//This is a library that allows me to make a promise for th API
const axios = require('axios');

const api = {
  async getUser(userInput) {
    try { let response = await axios
        
      // Sample URL: https://api.github.com/users/connietran-dev
        .get(`https://api.github.com/users/${userInput.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

//This will allow this module to be used in another js file
module.exports = api;