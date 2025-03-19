import React from "react"

function Book({ book }) {
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
  console.log(book)
  return (
    <div className="border border-slate-400 rounded-md w-60 py-2 hover:cursor-">
      <div className="w-full flex justify-center min-h-24">
        <img src={imageLinks?.smallThumbnail} className="h-full " />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p className="font-bold    text-xl">{title}</p>
        <p className="text-justify text-sm">{description.substring(0,100)}</p>
        <p>Authors : {authors?.join(", ")}</p>
        <p>Category: {categories?.join(", ")}</p>
        <p>{publishedDate}</p>
      </div>
    </div>
  )
}

export default Book
