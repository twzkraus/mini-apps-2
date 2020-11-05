import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import List from './List.jsx';
import { getEvents } from '../../server/json-requests.js';

class EventsApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      pageCount: 1,
      currentPage: 0,
      totalResults: 0,
      perPage: 10,
      searchedTerm: '',
      offset: 0
    }
    this.searchForEvent = this.searchForEvent.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  searchForEvent(text, offset, resPerPage) {
    getEvents(text, offset, resPerPage)
      .then(result => {
        let numRecords = parseInt(result.headers['x-total-count']);
        this.setState({
          events: result.data,
          totalResults: numRecords,
          pageCount: Math.ceil( numRecords / this.state.perPage ),
          searchedTerm: text,
          currentPage: this.state.offset / this.state.perPage
        })
      });
  };

  handlePageChange(data) {
    this.searchForEvent(this.state.searchedTerm, data.selected * this.state.perPage, this.state.perPage);
  };

  render() {
    return (
      <>
        <Search searchEvents={this.searchForEvent}/>
        <List events={this.state.events}/>
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={this.state.perPage}
            onPageChange={this.handlePageChange}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
      </>
    );
  }
};

export default EventsApp;
