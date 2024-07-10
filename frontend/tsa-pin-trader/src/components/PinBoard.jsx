/* React Imports */
import { useState, useEffect } from "react";

/* CSS Imports */
import "./PinBoard.css";

/* Component Imports */
import PinCard from "./ui/card.jsx";

export function PinBoard({ searchTerm }) {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    async function getPinInfo() {
      // const response = await fetch('https://software-23-24.onrender.com/getPinInfo', { //for deployment
      const response = await fetch("http://localhost:3000/getPinInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "0",
        },
      });

      const result = await response.json();
      console.log("Fetched Pins");
      setCardList(result.message);
    }

    getPinInfo();
  }, []);

  const filteredCardList = cardList.filter(pin =>
    pin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length % 4 !== 0) {
      array.push("Empty");
    }
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const chunkedPinCards = chunkArray(filteredCardList, 4);

  return (
    <div className="pin-board">
      {chunkedPinCards.length > 0 ? (
        chunkedPinCards.map((chunk, index) => (
          <div key={index} className="pin-card-column">
            {chunk.map((pin, pinIndex) => (
              <PinCard key={pinIndex} currentCard={pin} />
            ))}
          </div>
        ))
      ) : (
        <div className="pin-board">
          <span className="no-pins">No pins found!</span>
        </div>
      )}
    </div>
  );
}

export default PinBoard;
