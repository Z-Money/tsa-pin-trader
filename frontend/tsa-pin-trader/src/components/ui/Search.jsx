/* React Imports */
import { useState, useEffect } from "react";

/* CSS Imports */
import "./Search.css";

export function Search({ setSearchTerm }) {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search pins..."
                className="search"
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default Search