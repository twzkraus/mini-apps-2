const axios = require('axios');
const queryString = require('query-string');

const URL = 'http://localhost:3000/events';

module.exports = {
  getEvents: (keyword, offset, resPerPage) => {
    let pageNum = (offset / resPerPage) + 1;
    return axios.get(`${URL}?q=${keyword}&_page=${pageNum}`);
  }
}
