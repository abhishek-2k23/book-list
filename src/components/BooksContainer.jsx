import React, { useContext, useEffect } from "react"
import Book from "./Book"
import useBook from "../hooks/useBook"
import AppContext from "../contextApi/AppContext"
import Loading from "./Loading"

function BooksContainer() {
  const { books, searchData, loading, error, inputRef } = useContext(AppContext)
  const { fetchBooks } = useBook()
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="w-full md:w-10/12 ">
      {searchData.length > 0 && (
        <div>
          <p className="px-2">Search result for : {inputRef.current?.value}</p>
        </div>
      )}
      <div className="flex flex-wrap items-stretch w-full justify-evenly gap-10 space-y-5 parent">
        {searchData.length > 0 ? (
          searchData?.map((book) => (
            <Book key={book.etag + book.id} book={book} />
          ))
        ) : loading ? (
          <Loading />
        ) : error !== "" ? (
          <div>{error} </div>
        ) : (
          books.length > 0 &&
          books?.map((book) => <Book key={book.etag} book={book} />)
        )}
      </div>
    </div>
  )
}

export default BooksContainer
