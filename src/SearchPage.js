import './App.css';
import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import BookDetails from './BookDetails';

class SearchPage extends Component {
    render() {
        const {queryBooks, searchBooks, changeShelf} = this.props;
        return (            
          <div className="search-books">
            <div className="search-books-bar">
              <Link
                  to='/'
                  className='close-search'
                  >Close
              </Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  onChange={(event) => queryBooks(event.target.value)}
                  />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {searchBooks !== undefined && searchBooks.length > 0 && (
              <BookDetails
                  bookGroup={searchBooks}
                  changeShelf={changeShelf}
                />
                )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage