import React, { Component } from 'react';
import './ResultsList.css';
import Result from './Result';
// { ...result }
// description={result} title={} author={}
class ResultsList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // searchTerm: '',
  //     results: [],
  //   };
  // }


  render() {
    const results = this.props.results
          .map((result, i) => <Result { ...result.volumeInfo } key={i}/>);
    return (
      <div className="resultsList">
        {results}
      </div>
    );
  }
}

ResultsList.defaultProps = {
  results: []
};

export default ResultsList;