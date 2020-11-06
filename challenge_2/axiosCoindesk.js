const axios = require('axios');
const currentURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

module.exports = {
  fetchCurrent: () => {
    return axios.get(currentURL)
      .then(result => result.data);
  },
  fetchHistorical: (start, end) => {
    let histURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`;
    return axios.get(histURL)
      .then(result => {
        return result.data;
      });
  }
};