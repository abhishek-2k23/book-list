import { createContext, useRef, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const inputRef = useRef('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [searchStatus, setSearchStatus] = useState(false);
    const [readMore, setReadMore] = useState(null);
    const value = {books, setBooks, inputRef, loading, setLoading, error, setError, searchData, setSearchData,searchStatus, setSearchStatus,readMore, setReadMore};

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}

export default AppContext;
