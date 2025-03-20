import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [searchStatus, setSearchStatus] = useState(false);
    const [readMore, setReadMore] = useState(null);
    const value = {books, setBooks,searchData, setSearchData,searchStatus, setSearchStatus,readMore, setReadMore};

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}

export default AppContext;
