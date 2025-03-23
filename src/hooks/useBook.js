import { useContext, useEffect } from "react"
import AppContext from "../contextApi/AppContext"
import toast from "react-hot-toast"
const API_URL = import.meta.env.VITE_API_URL;

const useBook = () => {
  const { books, setBooks, inputRef, setSearchData, setSearchStatus, setLoading, setError } = useContext(AppContext)

  //free api options
  const options = { method: "GET", headers: { 'accept': "application/json", 'Access-Control-Allow-Origin': "*" } }

  //fetching books
  const fetchBooks = async () => {
    console.log('fetchBooks function call');
    setLoading(true);
    try {
      const res = await fetch(API_URL, options)
      const result = await res.json()
      if (books.length === 0) {
        setBooks(result?.data?.data)
        console.log(result.data?.data)
      } else {
        //adding new list with prev books
        setBooks((prev) => [...prev, ...result.data.data])
      }
    } catch (e) {
      console.log(e)
      setError(e.message);
    }
    finally{
      setLoading(false)
    }
  }

  //searching books
  const searchBook = () => {
    console.log('input ref ', inputRef);
    let searchInput = inputRef.current.value;

    //return when search inupt is empty
    if(searchInput === ''){
      toast.error('enter search text');
      return;
    }
    searchInput = searchInput.toLowerCase().trim();
    setSearchData([])
    const searchResult = []
    books.forEach((book) => {
      let { authors, title } = book.volumeInfo

      if (authors) {
        //convert all authors name to lowercase and split names with spaces
        authors = authors?.map((a) => [a.toLowerCase(),a.toLowerCase().split(" ")])

        //flatten the array
        authors = authors.flat(2);
      }

      //check book title and author with searchInput and push to searchResult if match
      if (
        title?.toLowerCase()?.split(" ")?.includes(searchInput) ||
        authors?.includes(searchInput)
      ) {
        searchResult.push(book)
      }
    })

    if(searchResult.length === 0){
      // setSearchStatus(false);
      toast.error('no search result');
    }else{
      setSearchData(searchResult)
      setSearchStatus(true);
    }
  }

  //reset search result
  function resetSearch(){
    if(inputRef.current){
      inputRef.current = '';  
    }
    setSearchData([]);
  }


  useEffect(() => {
    setSearchData([]);
    return () => inputRef.current = ''
  },[])

  return { fetchBooks, searchBook, resetSearch}
}
export default useBook
