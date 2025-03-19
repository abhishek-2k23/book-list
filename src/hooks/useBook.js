import { useContext, useEffect } from "react"
import AppContext from "../contextApi/AppContext"
import toast from "react-hot-toast"
const useBook = (page = 1) => {
  const { books, setBooks, setSearchData, setSearchStatus } = useContext(AppContext)
  const url = `https://api.freeapi.app/api/v1/public/books?page=${page}&limit=20&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech`
  const options = { method: "GET", headers: { accept: "application/json" } }

  const fetchBooks = async () => {
    try {
      const res = await fetch(url, options)
      const result = await res.json()
      if (books.length === 0) {
        setBooks(result?.data?.data)
      } else {
        setBooks((prev) => [...prev, ...result?.data?.data])
      }
    } catch (e) {
      console.log(e)
    }
  }

  const searchBook = (searchInput) => {
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
  function resetSearch(){
    setSearchData([]);
  }
  useEffect(() => {
    setSearchData([]);
  },[])

  return { fetchBooks, searchBook, resetSearch}
}
export default useBook
