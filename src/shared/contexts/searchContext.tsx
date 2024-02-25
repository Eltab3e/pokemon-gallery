import { createContext, useContext, useState } from "react";

const SearchContext = createContext<{
    searchQuery: string;
    handleSearch: (query: string) => void;
}>({
    searchQuery: "",
    handleSearch: () => {},
});

export const SearchProvider = ({ children }: any) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <SearchContext.Provider value={{ searchQuery, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

// Custom hook to use the context
export const useSearch = () => {
    const { searchQuery, handleSearch: setSearchQuery } = useContext(SearchContext);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return { searchQuery, handleSearch };
};
