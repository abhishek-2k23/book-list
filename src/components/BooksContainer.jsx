import React, { useContext, useEffect } from "react"
import Book from "./Book"
import useBook from "../hooks/useBook"
import AppContext from "../contextApi/AppContext"

function BooksContainer() {
  const {books} = useContext(AppContext);
  const { fetchBooks } = useBook()
  useEffect(() => fetchBooks, [])

  console.log(books);
  return (
    <div className="w-10/12   ">
      <div className="flex flex-wrap w-full justify-center gap-5 space-y-5">
      {books.length > 0 &&
        books?.map((book) => <Book key={book.etag} book={book} />)} 

      </div>
    </div>
  )
}

export default BooksContainer
