/* React Imports */
import { useState, useEffect } from "react";

/* CSS Imports */
import "./Home.css";

/* Component Imports */
import Navbar from "../components/Navbar";
import PinBoard from "../components/PinBoard";

export function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Navbar setSearchTerm={setSearchTerm} />
            <PinBoard searchTerm={searchTerm} />
        </>
    );
}

export default Home