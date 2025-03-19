import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    const value = {books, setBooks};

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}

export default AppContext;
