import React from 'react';

const PinSelector = ({ addScore }) => {
  const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <>
      {oneToTen.map(val =>
        <button value={val} onClick={() => addScore(val)} key={val}>{val}</button>)}
    </>
  )
}

export default PinSelector;
