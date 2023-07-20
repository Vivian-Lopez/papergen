"use client";

import { useState } from "react"

const search = () => {

    const [ searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null)

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        //debounce method
        setSearchTimeout(
            setTimeout(() => {
                setSearchText(searchText);
            }, 500)
        );
    }
    
    return (
        <form style={{width: 600}}>
            <input
                className="search_input"
                type="text"
                placeholder="Enter a prompt here"
            />
        </form>
    );
};

export default search;