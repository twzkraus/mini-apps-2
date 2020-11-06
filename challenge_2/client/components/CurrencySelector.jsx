import React from 'react';

const CurrencySelector = ({ currency, symbols }) => {

  const getRadioAndLabel = (obj) => {
    let checked = currency === Object.keys(obj)[0];
    let val = Object.values(obj)[0];

    return (
      <>
        <input type="radio" id={val} name="currency" value={val} checked={checked}/>
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
