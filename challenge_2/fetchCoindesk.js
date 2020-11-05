const fetch = require('node-fetch');
const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

module.exports = {
  fetchCoindesk: () => {
    return fetch(URL)
      .then(result => result);
  }
};