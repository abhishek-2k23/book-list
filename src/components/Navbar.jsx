import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <div className='bg-transparent w-10/12 h-20 flex justify-between px-4 items-center shadow-md'>
        <p className='text-xl font-bold '>Books list</p>

        <SearchBar />
    </div>
  )
}

export default Navbar