import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import fetch from 'node-fetch';
import Chart from './components/Chart.jsx';

const basePrice = {"USD":{"code":"USD","symbol":"&#36;","rate":"14,894.4183","description":"United States Dollar","rate_float":14894.4183},"GBP":{"code":"GBP","symbol":"&pound;","rate":"11,369.2372","description":"British Pound Sterling","rate_float":11369.2372},"EUR":{"code":"EUR","symbol":"&euro;","rate":"12,618.5363","description":"Euro","rate_float":12618.5363}};

const App = () => {

  const [dates, setDates] = useState(['Nov 5, 2020 18:44:00 UTC']);
  const [prices, setPrices] = useState([basePrice]);

  const addData = (data) => {
    setDates(dates.concat(data.time.updated));
    setPrices(prices.concat(data.bpi));
  };

  useEffect(() => {
    axios.get('/price')
      .then(results => addData(results.data));
  }, []);

  return (
    <div>
      <Chart btcData={{dates, prices}}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
