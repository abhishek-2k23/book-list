import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import BooksContainer from './components/BooksContainer';
import AppContext from './contextApi/AppContext';
import BookDetails from './components/BookDetails';

function App() {
  const {readMore} = useContext(AppContext);
  return (
    <div className='text-gray-200 bg-radial from-slate-700  via-gray-900  to-slate-800 w-full min-h-screen flex flex-col items-center pb-5'>
      <Navbar />
      {readMore && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30">
          {" "}
          <BookDetails />{" "}
        </div>
      )}
      <BooksContainer />
    </div>
  )
}

export default App