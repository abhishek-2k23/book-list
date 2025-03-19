import React, { useContext, useState } from 'react'
import AppContext from '../contextApi/AppContext'
import useBook from '../hooks/useBook';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const {searchBook, resetSearch} = useBook();
    const {searchData} = useContext(AppContext);
    
  return (
    <div className='w-9/12 flex gap-2'>
        <input 
            type='text'
            placeholder='search by title, author'
            className='w-3/4 py-3 px-2 border border-slate-300 rounded-full'
            onChange={(e) => setSearchInput(e.target.value)}
            />

        <button className='px-5 py-3 rounded-full border border-slate-300 cursor-pointer' onClick={() => searchBook(searchInput)}>Search</button>
        {searchData.length>0 && <button className='px-5 py-3 rounded-full border border-slate-300 cursor-pointer' onClick={() => resetSearch()}>Reset</button>}
    </div>
  )
}

export default SearchBar