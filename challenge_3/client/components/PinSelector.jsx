import React from 'react';

const PinSelector = ({ addScore, maxAvail }) => {
  let validPinNumbers = [];
  while (validPinNumbers.length < maxAvail) {
    validPinNumbers.push(validPinNumbers.length + 1);
  };

  return (
    <>
      {validPinNumbers.map(val =>
        <button value={val} onClick={() => addScore(val)} key={val}>{val}</button>)}
    </>
  )
}

export default PinSelector;
