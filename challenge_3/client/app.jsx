import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PinSelector from './components/PinSelector.jsx';
import Scoreboard from './components/Scoreboard.jsx';

const emptyFrame = {
  rollOne: null,
  rollTwo: null,
  total: null,
  effectiveRollOne: null,
  effectiveRollTwo: null,
};

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {

  const [ scores, setScores ] = useState(oneToTen.map(a => JSON.parse(JSON.stringify(emptyFrame))));
  const [ currentFrameIdx, setCurrentFrameIdx ] = useState(0);
  const [ nThrows, setNThrows ] = useState(0);
  const [ specialThrows, setSpecialThrows ] = useState({});

  const handleChangeFrame = () => {
    setCurrentFrameIdx(currentFrameIdx + 1);
  };

  const addScore = (value) => {
    checkForStrikeSpare(value);
    let multiplier = checkForRecentSpecial();
    const scoresWithVal = addScoreToNextPos(value * multiplier);
    const scoresWithTot = updateTotal();
    setScores(scoresWithTot);
    setNThrows(nThrows + 1);
    if (scoresWithTot[currentFrameIdx].rollTwo || value === 10) { handleChangeFrame() };
  };

  const addScoreToNextPos = (value) => {
    let scoresCopy = scores.slice();
    let currentFrame = scoresCopy[currentFrameIdx];
    if (currentFrame.rollOne) {
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

  const checkForStrikeSpare = (value) => {
    if (value === 10) {
      processSpecial('strike');
    } else if (value + scores[currentFrameIdx].rollOne === 10) {
      processSpecial('spare');
    }
  };

  const processSpecial = (type) => {
    let specialCopy = JSON.parse(JSON.stringify(specialThrows));
    specialCopy[nThrows] = type;
    setSpecialThrows(specialCopy);
  };

  const checkForRecentSpecial = () => {
    if (specialThrows[nThrows - 1]) {
      return 2;
    } else if (specialThrows[nThrows -2] === 'strike') {
      return 2;
    } else {
      return 1;
    }
  }

  return (
    <>
      <PinSelector addScore={addScore} maxAvail={10 - scores[currentFrameIdx].rollOne}/>
      <Scoreboard scores={scores}/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
