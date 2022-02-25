import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MoveToOptions from './MoveToOptions'
import Book from './Book'
import SearchPage from './SearchPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class BooksApp extends React.Component {

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
          this.setState(() => ({
            books
          }))
      })
}

  state = {    
    books: [],
    query: "",
    bookDetails: []
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
    .then((book) => {
        this.setState(() => ({
          query: query.trim(),
          bookDetails: book
        }))
    })
  }

  moveBook = (book,shelf) => {
    BooksAPI.update(book, shelf.target.value)
    .then((b) => {
        this.setState((currentState) => ({
        //I thought doing a setState would rerender the page with the changed books but it is not
          query: currentState.query
        }))
    })
  }

  render() {
    return (
      <div className="app">       
          <Routes>
            <Route path='/search' element={
          <SearchPage
            queryBooks={this.searchBooks}
            searchBooks={this.state.bookDetails}
            changeShelf={this.moveBook}      
          />}></Route>
              <Route path="/" element={
                <Book 
                    books={this.state.books} 
                    changeShelf={this.moveBook}                   
                />}></Route>
                </Routes>
      </div>
    )
  }
}

export default BooksApp
