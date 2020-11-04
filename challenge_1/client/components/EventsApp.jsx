import React from 'react';
import Search from './Search.jsx';
import { getEvents } from '../../server/json-requests.js';

const EventsApp = () => {

  const searchForEvent = (event, text) => {
    event.preventDefault();
    getEvents({description: text})
      .then(result => console.log(result));
  }

  return (
    <Search searchEvents={searchForEvent}/>
  )
}

export default EventsApp;
