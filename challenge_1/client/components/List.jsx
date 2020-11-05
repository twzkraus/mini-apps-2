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
    <tbody>
      {events.map((event, i) => <Event key={i} data={event} />)}
    </tbody>
  </table>
);

export default List;