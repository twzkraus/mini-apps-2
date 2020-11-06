import React from 'react';

const CurrencySelector = ({ currency, symbols, handleChange }) => {

  const getRadioAndLabel = (obj) => {
    let checked = currency === Object.keys(obj)[0];
    let val = Object.values(obj)[0];

    return (
      <>
        <input type="radio" id={val} name="currency" value={Object.keys(obj)[0]} checked={checked} onClick={handleChange}/>
        <label for={val}>{String.fromCharCode(val)}</label>
      </>
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
