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
    this.updatePageStats = this.updatePageStats.bind(this);
  }

  searchForEvent(text, offset) {
    getEvents(text, offset, this.state.perPage)
      .then(result => this.updatePageStats(result, text, offset));
  };

  updatePageStats (dbResult, text, offset) {
    let numRecords = parseInt(dbResult.headers['x-total-count']);
    this.setState({
      events: dbResult.data,
      pageCount: Math.ceil( numRecords / this.state.perPage ),
      currentPage: this.state.offset / this.state.perPage,
      totalResults: numRecords,
      searchedTerm: text,
      offset: offset
    });
  };

  handlePageChange(data) {
    this.searchForEvent(this.state.searchedTerm, data.selected * this.state.perPage);
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
