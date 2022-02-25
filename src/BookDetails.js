import React, {Component} from 'react'
import MoveToOptions from './MoveToOptions';


class BookDetails extends Component {
    
    render() {
      const{ changeShelf } = this.props;
        return (
          <ol className="books-grid">
                {this.props.bookGroup.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-cover" style={{ width: 128, height: 188 }}></div>
                        <MoveToOptions 
                          book={book}
                          changeShelf={changeShelf}
                        />
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors === undefined ? "Unknown" : book.authors[0]}</div>
                    </div>
                  </li>
                ))}
            </ol>
        )
    }
}

export default BookDetails