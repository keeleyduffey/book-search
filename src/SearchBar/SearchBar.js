import React, { Component } from 'react';
// import './bookmarkApp.css';
// import Header from './Header';
import './SearchBar.css';
// import FilterBar from './FilterBar';
// import ResultsList from './ResultsList';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  termChanged(term) {
    this.setState({
      term
    });
    this.props.changeHandler(this.state.term);
  }
  // newSearch() {
  //   this.props.changeHandler(this.state.term);
  // }

  render() {
    return (
      <div className="searchBar">
      	<label htmlFor="search-term">Search:</label>
        <input
          type="text"
          name="search-term"
          id="search-term"
          placeholder="search for anything..."
          defaultValue={this.props.searchTerm}
          onChange={e => this.termChanged(e.target.value)} />
        <button
          onClick={e => this.termChanged(e.target.value)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
