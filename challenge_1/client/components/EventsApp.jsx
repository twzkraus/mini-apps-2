import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import List from './List.jsx';
import { getEvents } from '../../server/json-requests.js';

const EventsApp = () => {

  const [events, setEvents] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const searchForEvent = (text) => {
    getEvents(text)
      .then(result => {
        setEvents(result.data);
        let numRecords = parseInt(result.headers['x-total-count']);
        setTotalResults(numRecords);
        setPageCount(Math.ceil(numRecords / perPage));
      });
  }

  const handlePageChange = (data) => {
  }

  return (
    <>
      <Search searchEvents={searchForEvent}/>
      <List events={events}/>
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={perPage}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
    </>
  )
}

export default EventsApp;
