import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/Chart.jsx';

const App = () => (
  <div>
    <p>Hello World</p>
    <Chart />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
