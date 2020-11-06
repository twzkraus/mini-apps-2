import React from 'react';
import Frame from './Frame.jsx';

const Scoreboard = ({ scores }) => (
  <div>
    {scores.map(score => <Frame score={score}/>)}
  </div>
);

export default Scoreboard;
