import React, { useState, useEffect } from 'react';

const Search = ({ searchEvents }) => {

  const [text, setText] = useState('');

  const updateText = (event) => {
    setText(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    searchEvents(text);
    setText('');
  };

  return (
    <form>
      <input type="text" onChange={ (e) => updateText(e) } placeholder="Event Keywords" value={text}></input>
      <button onClick={(e) => handleSearch(e)}>Search</button>
    </form>
  );
}

export default Search;
