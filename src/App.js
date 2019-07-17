import React, { Component } from 'react';
// import BookSearchApp from './BookSearchApp';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import ResultsList from './ResultsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
    };
  }

  setSelected(searchTerm) {
    this.setState({
      searchTerm
    });
    this.searchForTerm(searchTerm);
  }

  searchForTerm(searchTerm) {
    const key = 'AIzaSyBMMiGkxGYmxkE9MVm0PqDCAeAka2oRImA';
      
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  render() {
    const results = this.state.searchTerm ? <ResultsList results={this.state.results} /> : [];

    return (
      <div className="bookSearchApp">
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} changeHandler={term => this.setSelected(term)}/>
        <FilterBar results={this.state.results} />
        {results}
        

      </div>
    );
  }
}

export default App;
