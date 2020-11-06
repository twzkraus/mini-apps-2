const fetch = require('node-fetch');
const currentURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

module.exports = {
  fetchCoindesk: () => {
    return fetch(currentURL);
  },
};