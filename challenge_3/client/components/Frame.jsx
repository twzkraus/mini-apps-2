import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: inline-block;
  border: 1px solid black;
  height: ${props => props.outer ? '100px' : '10px'};
  width: ${props => props.outer ? '100px' : '10px'};
`;

const Frame = ({ score }) => (
  <Box outer>
    <div className="turn-score">
      <Box className="roll-1-score"></Box>
      <Box className="roll-2-score"></Box>
    </div>
    <Box className="running-total-score"></Box>
  </Box>
);

export default Frame;
