import React from 'react';
import Frame from './Frame.jsx';

const Scoreboard = ({ scores }) => (
  <div>
    {scores.map((score, i) => <Frame score={score} key={i}/>)}
  </div>
);

export default Scoreboard;
