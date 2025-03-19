import React, { useState } from "react"

function Book({ book }) {
  const [readMore, setReadMore] = useState(false)
  function toggleReadMore(){
    setReadMore((prev) => (!prev));
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
    <div className="border border-slate-400 rounded-md w-56 py-2">
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
          {readMore ? description : shortDesc}{" "}
          <span
            onClick={toggleReadMore}
            className="text-blue-600 hover:text-blue-500 cursor-pointer"
          >
            {readMore ? "read less" : "read more"}
          </span>
        </p>

        {/* authors and category  */}
        <p>Authors : {authors?.join(", ")}</p>
        <p>Category : {categories?.join(", ")}</p>

        {/* publishing date  */}
        <p>{publishedDate}</p>
      </div>
    </div>
  )
}

export default Book
