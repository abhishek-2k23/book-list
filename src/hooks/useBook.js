import { useContext } from "react";
import AppContext from '../contextApi/AppContext';
const useBook = (page=1) => {
    const {books, setBooks} = useContext(AppContext);
  const url =
    `https://api.freeapi.app/api/v1/public/books?page=${page}&limit=20&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech`
  const options = { method: "GET", headers: { accept: "application/json" } }

  const fetchBooks = async () => {
    try {
      const res = await fetch(url, options);
      const result = await res.json();
      console.log(result);
      if(books.length === 0){
        setBooks(result?.data?.data);
      }else{
        setBooks(prev => (
            [...prev, ...result?.data?.data]
        ))
      }
    } catch (e) {
      console.log(e)
    }
  }

  return { fetchBooks }
}
export default useBook
