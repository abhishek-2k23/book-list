import React, { useContext, useEffect } from "react"
import Book from "./Book"
import useBook from "../hooks/useBook"
import AppContext from "../contextApi/AppContext"

function BooksContainer() {
  const {books, searchData} = useContext(AppContext);
  const { fetchBooks } = useBook()
  useEffect(() => fetchBooks, [])

  return (
    <div className="w-10/12 ">
      {
          searchData.length > 0 && <div>
            <p className="px-2">Search result for : </p>
            </div>
        }
      <div className="flex flex-wrap w-full justify-evenly gap-10 space-y-5 parent">
        
        {
          searchData.length > 0 ? (
            searchData?.map((book) => <Book key={book.etag+book.id} book={book} />)

          ) : (books.length > 0 &&
            books?.map((book) => <Book key={book.etag} book={book} />)

          )
        }

      </div>
    </div>
  )
}

export default BooksContainer
