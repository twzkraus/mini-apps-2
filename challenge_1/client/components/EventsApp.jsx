import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import List from './List.jsx';
import { getEvents } from '../../server/json-requests.js';

const EventsApp = () => {

  const [events, setEvents] = useState([]);

  const searchForEvent = (text) => {
    getEvents(text)
      .then(result => setEvents(result.data));
  }

  return (
    <>
      <Search searchEvents={searchForEvent}/>
      <List events={events}/>
    </>
  )
}

export default EventsApp;
