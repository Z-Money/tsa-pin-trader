import { useState, useEffect } from "react";
import "./card.css";

//when log in, get pins from server
//pins properties: name, year, state, img, lister

function PinCard({ currentCard }) {
  const [cardData, setCardData] = useState(currentCard);

  useEffect(() => {
    setCardData(currentCard);
  }, [currentCard]);

  if (cardData == "Empty") {
    return (
      <div className="pin-card-empty">
        <p>&nbsp;</p>
      </div>
    )
  }
  return (
    <div className="pin-card">
      <figure>
        {/* <img src="images/pins.webp" /> */}
        <img src={cardData.img} alt={cardData.name} />
      </figure>
      <figcaption>
        <h3>{cardData.name}</h3>
        <p>
          {cardData.state}, {cardData.year}
        </p>
        <p>{cardData.lister}</p>
      </figcaption>
    </div>
  );
}

export default PinCard;