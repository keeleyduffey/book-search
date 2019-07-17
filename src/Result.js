import React, { Component } from 'react';
// import './bookmarkApp.css';
// import Header from './Header';
// import SearchBar from './SearchBar';
// import FilterBar from './FilterBar';
// import ResultsList from './ResultsList';

class Result extends Component {
  render() {
    return (
      <div className="result">
      	<h2>{this.props.title}</h2>
        <img src={this.props.imageLinks.smallThumbnail} alt={this.props.title} />
        <p>
        	<span>Author: {this.props.authors} </span>
        </p>
        <p>
        	<span>Price: {this.props.price || 'N/A'}</span>
        </p>
        <p>
        	{this.props.description}
        </p>
      </div>
    );
  }
}

export default Result;
