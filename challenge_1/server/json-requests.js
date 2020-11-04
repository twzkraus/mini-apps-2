const axios = require('axios');
const queryString = require('query-string');

const URL = 'http://localhost:3000/events';

module.exports = {
  getEvents: (keyword) => {
    return axios.get(`${URL}?q=${keyword}&_limit=10`);
  }
}
