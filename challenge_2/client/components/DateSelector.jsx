import React, { useState } from 'react';

const DateSelector = ({ handleSubmit }) => {
  const [dates, setDates] = useState({start: '', end: ''});

  // const handleChange = (dateType) => {
  //   debugger;
  //   let tempDates = dates;
  //   tempDates[dateType] = document.getElementById(dateType + '-date');
  //   setDates(tempDates);
  // }

  return (
    <>
      <input type="date" id="start-date"/>
      <input type="date" id="end-date"/>
      <button onClick={(e) => handleSubmit(e, dates)}>Submit</button>
    </>
  );
};

export default DateSelector;
