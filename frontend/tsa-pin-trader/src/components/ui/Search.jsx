/* React Imports */
import { useState, useEffect } from "react";

/* CSS Imports */
import "./Search.css";

export function Search() {
    return (
        <div className="search-box">
            <input type="text" placeholder="Search pins..." className="search" />
        </div>
    )
}

export default Search