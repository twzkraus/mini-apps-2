import React from 'react';
import ReactDOM from 'react-dom';
import PinSelector from './components/PinSelector.jsx';
import Scoreboard from './components/Scoreboard.jsx';

const App = () => {
  const addScore = (value) => {
    console.log(value);
  }

  return (
    <>
      <PinSelector addScore={addScore}/>
      <Scoreboard scores={[1, 2, 3, 4, 5]}/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
