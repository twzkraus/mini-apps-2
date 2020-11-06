const fetch = require('node-fetch');
const currentURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

module.exports = {
  fetchCurrent: () => {
    return fetch(currentURL);
  },
  fetchHistorical: (start, end) => {
    let histURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`;
    return fetch(histURL);
  }
};