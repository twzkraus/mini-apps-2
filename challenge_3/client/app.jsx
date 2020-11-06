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

  const [ scores, setScores ] = useState(oneToTen.map(a => JSON.parse(JSON.stringify(emptyFrame))));
  const [ currentFrameIdx, setCurrentFrameIdx ] = useState(0);

  const handleChangeFrame = () => {
    setCurrentFrameIdx(currentFrameIdx + 1);
  };

  const addScore = (value) => {
    const scoresWithVal = addScoreToNextPos(value);
    const scoresWithTot = updateTotal();
    setScores(scoresWithTot);
    if (scoresWithTot[currentFrameIdx].rollTwo || value === 10) { handleChangeFrame() };
  };

  const addScoreToNextPos = (value) => {
    let scoresCopy = scores.slice();
    let currentFrame = scoresCopy[currentFrameIdx];
    if (currentFrame.rollOne || value === 10) {
      currentFrame.rollTwo = value;
    } else {
      currentFrame.rollOne = value;
    }
    return scoresCopy;
  };

  const updateTotal = () => {
    let scoresCopy = scores.slice();
    let currentFrame = scoresCopy[currentFrameIdx];
    let prevFrame = scoresCopy[currentFrameIdx - 1] || { total: 0 };
    currentFrame.total = prevFrame.total + currentFrame.rollOne + currentFrame.rollTwo;
    return scoresCopy;
  };

  return (
    <>
      <PinSelector addScore={addScore} maxAvail={10 - scores[currentFrameIdx].rollOne}/>
      <Scoreboard scores={scores}/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
