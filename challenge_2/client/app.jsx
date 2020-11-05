import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/Chart.jsx';

const App = () => {

  const [dates, setDates] = useState(['10/4', '11/5']);
  const [prices, setPrices] = useState([100, 200])

  return (
    <div>
      <p>Hello World</p>
      <Chart btcData={{dates, prices}}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
