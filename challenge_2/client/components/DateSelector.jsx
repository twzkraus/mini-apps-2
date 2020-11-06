import React, { useState } from 'react';

const DateSelector = ({ handleSubmit }) => {
  const [dates, setDates] = useState({start: '', end: ''});

  return (
    <>
    <p>Select a date range:</p>
      <input type="date" id="start-date"/>
      <input type="date" id="end-date"/>
      <button onClick={(e) => handleSubmit(e, dates)}>Submit</button>
    </>
  );
};

export default DateSelector;
