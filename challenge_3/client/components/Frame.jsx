import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: inline-block;
  border: 1px solid black;
  height: ${props => props.outer ? '100px' : '20px'};
  width: ${props => props.outer ? '100px' : '20px'};
`;

const Frame = ({ score }) => (
  <Box outer>
    <div className="turn-score">
      <Box className="roll-1-score">{score.rollOne}</Box>
      <Box className="roll-2-score">{score.rollTwo}</Box>
    </div>
    <Box className="running-total-score">{score.total}</Box>
  </Box>
);

export default Frame;
