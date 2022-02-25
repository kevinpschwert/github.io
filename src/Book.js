import './App.css';
import React, {Component} from 'react';
import BookDetails from './BookDetails';
import _ from 'lodash';
import { Link } from 'react-router-dom'


class Book extends Component {

  state = {
    bookshelfTitle: ["Currently Reading", "Want to Read", "Read"],
    shelfTitle: ['currentlyReading', 'wantToRead', 'read']
  }

  getCurrentlyReading = (books) => {
     return (books.filter(x => x.shelf == "currentlyReading"));
  }

  wantToReadBooks = (books) => {
    return (books.filter(x => x.shelf == "wantToRead"));
  }

  readBooks = (books) => {
    return (books.filter(x => x.shelf == "read"));
  }

    render() {
    const {books, changeShelf} = this.props;
    let cr = this.getCurrentlyReading(books);
    let groupedBooks = _.groupBy(books, book => book.shelf);
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div></div>
          <div>
          {Object.keys(groupedBooks).map((book, i) => (
            <div key={this.state.bookshelfTitle[i]} className="bookshelf">
              <h2 className="bookshelf-title">{this.state.bookshelfTitle[i]}</h2>
              <div className="bookshelf-books">              
                <BookDetails
                  bookGroup={groupedBooks[book]}
                  changeShelf={changeShelf}
                />
              </div>
            </div>
          ))}
          <Link 
            to='/search'
            className='open-search'
            >Add a book
          </Link>
          </div>
          </div>
          </div>
            
        )
    }
}

export default Book