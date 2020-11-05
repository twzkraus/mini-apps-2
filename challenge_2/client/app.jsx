import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import fetch from 'node-fetch';
import Chart from './components/Chart.jsx';

const baseObj = {
  date: 'Nov 5, 2020 18:44:00 UTC',
  price: {
    EUR: 12618.5363,
    GBP: 11369.2372,
    USD: 14894.4183
  }
};

const App = () => {

  const symbols = {
    GBP: "&pound;",
    EUR: "&euro;",
    USD: "&#36;",
  };

  const [records, setRecords] = useState([]);
  const [currency, setCurrency] = useState('GBP');

  const addData = (data) => {
    setRecords(records.concat(data));
  };

  useEffect(() => {
    axios.get('/price')
      .then(results => addData(results.data));
  }, []);

  return (
    <div>
      <Chart records={records} currency={currency}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
