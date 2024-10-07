import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './book'
import Book from './Books'

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          const { img, title, author, id } = book
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
