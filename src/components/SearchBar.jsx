import React, { useContext, useState } from 'react'
import AppContext from '../contextApi/AppContext'
import useBook from '../hooks/useBook';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const {searchBook, resetSearch} = useBook();
    const {searchData} = useContext(AppContext);
    
  return (
    <div className='w-full md:w-9/12 flex flex-col md:flex-row gap-2 mb-5 md:mb-0'>
        <input 
            type='text'
            placeholder='search by title, author'
            className='w-full md:w-3/4 py-2 md:py-3 px-2 border border-slate-500 rounded-full'
            onChange={(e) => setSearchInput(e.target.value)}
            />

        <button className='px-5 py-2 md:py-3 rounded-full border border-slate-500 cursor-pointer' onClick={() => searchBook(searchInput)}>Search</button>
        {searchData.length>0 && <button className='px-5 py-2 md:py-3 rounded-full border border-slate-500 cursor-pointer' onClick={() => resetSearch()}>Reset</button>}
    </div>
  )
}

export default SearchBar