import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <div className='bg-transparent w-full md:w-10/12 h-auto md:h-20 flex flex-col md:flex-row  justify-between px-4 my-4 md:my-0 items-center shadow-md'>
        <p className='text-xl font-bold mb-3 sm:mb-0'>Books list</p>

        <SearchBar />
    </div>
  )
}

export default Navbar