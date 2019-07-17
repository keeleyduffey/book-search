import React, { Component } from 'react';
// import './bookmarkApp.css';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import ResultsList from './ResultsList';

class BookSearchApp extends Component {

 
  // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey


//   componentDidMount() {
//     const options = {
//       method: 'GET',
//       key: 'AIzaSyBMMiGkxGYmxkE9MVm0PqDCAeAka2oRImA',
//       // headers: {
//         // "Authorization": "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW",
//         // "Content-Type": "application/json"
//       // }
//     };
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&key=${options.key}`;
// console.log(url);
//     fetch(url, options)
//       .then(res => {
//         if(!res.ok) {
//           throw new Error('Something went wrong, please try again later.');
//         }
//         return res;
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         this.setState({
//           results: data.items,
//           error: null
//         });
//       })
//       .catch(err => {
//         this.setState({
//           error: err.message
//         });
//       });

//   }

  

  // addBookmark(bookmark) {
  //   this.setState({
  //     bookmarks: [...this.state.bookmarks, bookmark],
  //     showAddForm: false
  //   });
  // }

  render() {
  	const results = this.state.searchTerm ? <ResultsList searchTerm={this.state.searchTerm} /> : '';
  	console.log(this.state);
  	console.log(results);
    return (
      <div className="bookSearchApp">
      	<Header />
      	<SearchBar searchTerm={this.state.searchTerm} changeHandler={term => this.setSelected(term)}/>
      	<FilterBar />
      	{results}
        

      </div>
    );
  }
}

export default BookSearchApp;
