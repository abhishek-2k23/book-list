import React, { useContext } from 'react'
import AppContext from '../contextApi/AppContext';

function BookDetails() {
    const {readMore, setReadMore} = useContext(AppContext);
    console.log(readMore)
    return (
        <div className={`p-4 text-zinc-200 flex items-center justify-center relative border border-gray-500 bg-gradient-to-br from-slate-800 via-slate-700 to bg-slate-800 rounded-md bookDetails bg-center`}>
            <div className='absolute top-2 right-2 bg-red-500 w-6 h-6 text-center cursor-pointer rounded-full' onClick={() => setReadMore(null)}>X</div>
          <div className="w-full max-w-lg overflow-x-auto">
            <p className='text-center font-bold mb-2'>{readMore?.volumeInfo?.title}</p>
            <p className='text-justify'>{readMore?.volumeInfo?.description}</p>
          </div>
        </div>
      );
}

export default BookDetails