import React, { Component } from 'react';
import './FilterBar.css';

 				// <div className="book-type-selector">
	      //   <form>
	      //     <label htmlFor="book-type">Book Type:</label>
	      //     <select
	      //       id="book-type"
	      //       name="book-type"
	      //       onChange={e => this.changeSelection(e.target.value)}>
	      //       <option value="None">Select one...</option>
	      //       {options}
	      //     </select>
	      //   </form>
      	// </div>

class FilterBar extends Component {
	changeSelection(value) {
    if(value === "All") {
      this.props.changeHandler(null);
    } else {
      // find the country selected
      const filteredResults = this.props.results.filter(result => result.saleInfo.saleability === value);
      this.props.changeHandler(filteredResults);
    }
  }
// .push(<option value={'All'} key={'All'}>{'All'}</option>)
  render() {
  	console.log(this.props.results);
  	let printOptions = this
      .props
      .results
      .map(
        (result, i) => <option value={result.saleInfo.saleability} key={i}>{result.saleInfo.saleability}</option>
      );
      console.log(printOptions);
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
	            {printOptions}
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


