import React, { useState, useCallback } from 'react';

const Event = ({ data }) => {

  const [editing, setEditing] = useState(false);
  const [currentText, setCurrentText] = useState(data.description);

  const handleStartEdit = () => {
    setEditing(true);
  };

  const handleTextEdit = (e) => {
    setCurrentText(e.target.value);
  };

  const handleClickSave = (e) => {
    setEditing(false);
  };

  return (
    <tr>
      <td>
        {data.date}
      </td>
      <td>
        {editing ?
        <>
          <textarea onChange={handleTextEdit} rows="4" cols="40" value={currentText}></textarea>
          <button onClick={handleClickSave}>Update</button>
        </>
        : <p onClick={handleStartEdit}>{currentText}</p> }

      </td>
      <td>
        {data.category1 && data.category2 ? data.category1 + ', ' + data.category2 : ' '}
      </td>
    </tr>
  );
}

export default Event;
