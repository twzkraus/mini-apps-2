import React, { useState, useCallback } from 'react';
import fetch from 'node-fetch';

const Event = ({ data }) => {

  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(data.description);

  const handleStartEdit = () => {
    setEditing(true);
  };

  const handleTextEdit = (e) => {
    setDescription(e.target.value);
  };

  const handleClickSave = (e) => {
    setEditing(false);
    let tempData = data;
    data.description = description;
    fetch('/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
  };

  return (
    <tr>
      <td>
        {data.date}
      </td>
      <td>
        {editing ?
        <>
          <textarea onChange={handleTextEdit} rows="4" cols="40" value={description}></textarea>
          <button onClick={handleClickSave}>Update</button>
        </>
        : <p onClick={handleStartEdit}>{description}</p> }

      </td>
      <td>
        {data.category1 && data.category2 ? data.category1 + ', ' + data.category2 : ' '}
      </td>
    </tr>
  );
}

export default Event;
