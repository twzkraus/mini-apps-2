import React, { useState, useEffect } from 'react';
import Event from './Event.jsx';

const List = ({ events }) => (
  <table>
    {events.length ?
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Categorized</th>
      </tr>
    </thead> : ''}
    {events.map(event => <Event data={event} />)}
  </table>
);

export default List;