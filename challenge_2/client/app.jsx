import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import fetch from 'node-fetch';
import Chart from './components/Chart.jsx';
import CurrencySelector from './components/CurrencySelector.jsx';
import DateSelector from './components/DateSelector.jsx';

const baseObj = {
  date: 'Nov 5, 2020 18:44:00 UTC',
  price: {
    EUR: 12618.5363,
    GBP: 11369.2372,
    USD: 14894.4183
  }
};

const GUconv = baseObj.price.GBP / baseObj.price.USD;
const EUconv = baseObj.price.EUR / baseObj.price.USD;

const App = () => {

  const symbols = [
    { GBP: 65505 },
    { EUR: 8364 },
    { USD: 36 },
  ];

  const [records, setRecords] = useState([]);
  const [currency, setCurrency] = useState('GBP');

  const addData = (data) => {
    setRecords(records.concat(data));
  };

  const overwriteData = (data) => {
    setRecords(data);
  };

  useEffect(() => {
    handleConfirmDates();
  }, []);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const getGbpEur = (USD) => {
    return {
      USD,
      GBP: USD * GUconv,
      EUR: USD * EUconv
    }
  };

  const parseDateRangeData = (data) => {
    // data come in in object form with just date & price. Price is in USD.
    let result = [];
    for (let key in data) {
      let dayObj = {
        date: key,
        price: getGbpEur(data[key])
      }
      result.push(dayObj);
    }
    return result;
  }

  const handleConfirmDates = (event) => {
    if (event) { event.preventDefault() }
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    axios.get(`/price?start=${start}&end=${end}`)
      .then(results => {
        overwriteData(parseDateRangeData(results.data.bpi))
      });
  };

  return (
    <div>
      <Chart records={records} currency={currency}/>
      <CurrencySelector currency={currency} symbols={symbols} handleChange={handleCurrencyChange}/>
      <DateSelector handleSubmit={handleConfirmDates}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
