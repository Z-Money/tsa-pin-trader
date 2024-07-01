import { useState, useEffect } from "react";
import PinBoard from "./components/PinBoard";
import PinCard from "./components/ui/card";
import Search from "./components/ui/Search";

export function TestApp() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  });
  return isOnline ? (
    <>
      <Search />
      <PinBoard />
    </>
  ) : (
    <p>Offline, please connect to the internet and try again.</p>
  );
}

export default TestApp;
