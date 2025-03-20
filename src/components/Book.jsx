import React, { useContext } from "react"
import AppContext from "../contextApi/AppContext";

function Book({ book }) {
  const {readMore, setReadMore} = useContext(AppContext);
  function handleReadMore(book){
    setReadMore(book);
  }
  const { volumeInfo } = book
  const {
    title,
    authors,
    categories,
    description,
    imageLinks,
    infoLink,
    publishedDate,
    publisher,
  } = volumeInfo

  let shortDesc = ""
  if (description.length > 101) {
    shortDesc = description.substring(0, 100) + "..."
  }
  return (
    <div className="border-2 border-slate-600 hover:border-slate-500 transition-all duration-200  rounded-md w-60 py-2">
      {/* book smallThumbnail  */}
      <div className="w-full h-44 flex justify-center">
        <img src={imageLinks?.smallThumbnail} className="h-full " />
      </div>

      {/* book information  */}
      <div className="flex flex-col gap-1 p-2">
        {/* title  */}
        <p className="font-bold  text-center  text-lg space-y-1">{title}</p>

        {/* description  */}
        <p className="text-justify text-sm">
          {shortDesc}{" "}
          <span
            onClick={() => handleReadMore(book)}
            className="text-blue-600 hover:text-blue-500 cursor-pointer"
          >
            {readMore ? "read less" : "read more"}
          </span>
        </p>

        {/* authors and category  */}
        <p>Authors : {authors!== undefined ? authors?.join(", ") : 'no data'}</p>
        <p>Category : {categories!== undefined ? categories?.join(", ") : 'no data'}</p>

        {/* publishing date  */}
        <p>{publishedDate}</p>
      </div>
    </div>
  )
}

export default Book
