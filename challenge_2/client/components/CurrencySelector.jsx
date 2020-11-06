import React from 'react';

const CurrencySelector = ({ currency, symbols, handleChange }) => {

  const getRadioAndLabel = (obj) => {
    let checked = currency === Object.keys(obj)[0];
    let val = Object.values(obj)[0];

    return (
      <React.Fragment key={val}>
        <input type="radio" id={val} name="currency" value={Object.keys(obj)[0]} checked={checked} onChange={handleChange}/>
        <label htmlFor={val}>{String.fromCharCode(val)}</label>
      </React.Fragment>
    )
  }

  return (
    <form>
      Select a Currency:
      {symbols.map(sym => getRadioAndLabel(sym))}
    </form>
  );
}

export default CurrencySelector;
