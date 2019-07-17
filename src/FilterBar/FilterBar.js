import React, { Component } from 'react';
import './FilterBar.css';

class FilterBar extends Component {
  render() {
  	console.log(this.props.results);
  	const options = this
      .props
      .results
      .map(
        (result, i) => <option value={result.name} key={i}>{result.name}</option>
      );
    return (
      <div className="filterBar">
        <div className="book-type-selector">
	        <form>
	          <label htmlFor="print-type">Print Type:</label>
	          <select
	            id="print-type"
	            name="print-type"
	            onChange={e => this.changeSelection(e.target.value)}>
	            <option value="None">Select one...</option>
	            {options}
	          </select>
	        </form>
      	</div>
       
        <div className="book-type-selector">
	        <form>
	          <label htmlFor="book-type">Book Type:</label>
	          <select
	            id="book-type"
	            name="book-type"
	            onChange={e => this.changeSelection(e.target.value)}>
	            <option value="None">Select one...</option>
	            {options}
	          </select>
	        </form>
      	</div>
      </div>
    );
  }
}

FilterBar.defaultProps = {
  types: []
};

export default FilterBar;
