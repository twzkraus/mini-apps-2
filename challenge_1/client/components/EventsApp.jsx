import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import { getEvents } from '../../server/json-requests.js';

const EventsApp = () => {

  const [events, setEvents] = useState([]);

  const searchForEvent = (text) => {
    getEvents(text)
      .then(result => setEvents(result.data));
  }

  return (
    <Search searchEvents={searchForEvent}/>
  )
}

export default EventsApp;
