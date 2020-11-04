const axios = require('axios');
const queryString = require('query-string');

const URL = 'http://localhost:3000/events';

module.exports = {
  getEvents: (params) => {
    const query = queryString.stringify(params);
    return axios.get(`${URL}?${query}&_limit=10`);
  }
}
