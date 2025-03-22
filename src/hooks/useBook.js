import { useContext, useEffect } from "react"
import AppContext from "../contextApi/AppContext"
import toast from "react-hot-toast"
const useBook = () => {
  const { books, setBooks, inputRef, setSearchData, setSearchStatus, setLoading, setError, page } = useContext(AppContext)

  //free api url 
  const url = `https://api.freeapi.app/api/v1/public/books?page=${page}&limit=20&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech`
  const options = { method: "GET", headers: { accept: "application/json" } }

  //fetching books
  const fetchBooks = async () => {
    console.log('fetchBooks start');
    setLoading(true);
    try {
      const res = await fetch(url, options)
      const result = await res.json()
      if (books.length === 0) {
        setBooks(result?.data?.data)
      } else {
        //adding new list with prev books
        setBooks((prev) => [...prev, ...result?.data?.data])
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
    console.log(inputRef);
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
      setSearchStatus(false);
      toast.error('no search result');
    }else{
      setSearchData(searchResult)
      setSearchStatus(true);
    }
  }

  //reset search result
  function resetSearch(){
    inputRef.current = '';
    setSearchData([]);
  }


  useEffect(() => {
    setSearchData([]);
    return () => inputRef.current = ''
  },[])

  return { fetchBooks, searchBook, resetSearch}
}
export default useBook
