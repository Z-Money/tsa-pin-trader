/* React Imports */
import { useState, useEffect } from "react";

/* CSS Imports */
import "./Navbar.css";

/* Component Imports */
import Search from "./ui/Search";
import NavIcons from "./ui/NavIcons";

export function Navbar({ setSearchTerm }) {
    return (
        <div className="navbar">
            <h3>
                <span>TSA</span>
                <br />
                Pin Trader
            </h3>
            <Search setSearchTerm={setSearchTerm} />
            <NavIcons />
        </div>
    );
}

export default Navbar