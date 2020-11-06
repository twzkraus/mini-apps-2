import React, { useState } from 'react';

const DateSelector = ({ handleSubmit }) => {
  let today = new Date();
  let aMonthAgo = new Date(new Date().setDate(new Date().getDate() - 30));
  today = today.toISOString().split('T')[0];
  aMonthAgo = aMonthAgo.toISOString().split('T')[0];
  const [dates, setDates] = useState({start: today, end: aMonthAgo});

  return (
    <>
    <p>Select a date range:</p>
      <input type="date" id="start-date" defaultValue={aMonthAgo}/>
      <input type="date" id="end-date" defaultValue={today}/>
      <button onClick={(e) => handleSubmit(e, dates)}>Submit</button>
    </>
  );
};

export default DateSelector;
