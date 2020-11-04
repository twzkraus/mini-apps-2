import React, { useState, useEffect } from 'react';

const Search = ({ searchEvents }) => {

  const [text, setText] = useState('');

  const updateText = (event) => {
    setText(event.target.value);
  }

  return (
    <form>
      <input type="text" onChange={ (e) => updateText(e) }placeholder="Event Name"></input>
      <button onClick={(e) => searchEvents(e, text)}>Search</button>
    </form>
  );
}

export default Search;
