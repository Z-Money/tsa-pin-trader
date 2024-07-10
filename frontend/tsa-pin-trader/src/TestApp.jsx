/* React Imports */
import { useState, useEffect } from "react";

/* Component Imports */
import Home from "./routes/Home";
import Login from "./routes/Login";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

export function TestApp() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    const updateBodyStyle = () => {
      switch (location.pathname) {
        case '/':
          document.body.style.backgroundColor = '#3c009d'; // Home background color
          break;
        case '/home':
          document.body.style.backgroundColor = '#eee'; // Login background color
          break;
        default:
          document.body.style.backgroundColor = '#ffffff'; // Default background color
          break;
      }
    };

    updateBodyStyle();

    // Cleanup on component unmount
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [location]);

  if (isOnline == true) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    )
  }
  else {
    return <p>Offline, please connect to the internet and try again.</p>
  }
}

export default TestApp;
