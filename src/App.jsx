import React from 'react'
import Navbar from './components/Navbar'
import BooksContainer from './components/BooksContainer';

function App() {
  return (
    <div className='text-gray-200 bg-radial from-slate-700  via-gray-900  to-slate-800 w-full min-h-screen flex flex-col items-center pb-5'>
      <Navbar />
      <BooksContainer />
    </div>
  )
}

export default App