import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PinSelector from './components/PinSelector.jsx';
import Scoreboard from './components/Scoreboard.jsx';

const emptyFrame = {
  rollOne: null,
  rollTwo: null,
  total: null
};

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {

  const [ scores, setScores ] = useState(oneToTen.map(a => emptyFrame));

  const addScore = (value) => {
    console.log(value);
  }

  return (
    <>
      <PinSelector addScore={addScore}/>
      <Scoreboard scores={scores}/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
