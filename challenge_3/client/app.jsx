import React from 'react';
import ReactDOM from 'react-dom';
import PinSelector from './components/PinSelector.jsx';

const App = () => {
  const addScore = (value) => {
    console.log(value);
  }

  return (
    <PinSelector addScore={addScore}/>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
