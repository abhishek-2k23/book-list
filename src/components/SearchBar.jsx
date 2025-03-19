import React from 'react'

function SearchBar() {
  return (
    <div className='w-9/12 flex gap-2'  >
        <input 
            type='text'
            placeholder='search by title, author'
            className='w-3/4 py-3 px-2 border border-slate-300 rounded-full'
            />

        <button className='px-5 py-3 rounded-full border border-slate-300 cursor-pointer'>Search</button>
    </div>
  )
}

export default SearchBar