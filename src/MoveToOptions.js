import './App.css';
import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'

class MoveToOptions extends Component {

  test = (e,book) => {
    console.log(e.target.value);
  }
render() {
    const {book,changeShelf} = this.props;
    return(
        <div className="book-shelf-changer">
            <select onChange={(e) => changeShelf(book,e)} >
              <option value="move">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
        </div>
    )
  }
}

export default MoveToOptions