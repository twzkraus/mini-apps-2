const fetch = require('node-fetch');
const currentURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const cleanupFetch = (result) => result.body.readableBuffer.head.data.toString();

module.exports = {
  fetchCurrent: () => {
    return fetch(currentURL)
      .then(result => cleanupFetch(result));
  },
  fetchHistorical: (start, end) => {
    let histURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`;
    return fetch(histURL)
      .then(result => cleanupFetch(result));
  }
};