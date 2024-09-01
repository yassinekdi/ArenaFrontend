import React from 'react';

const cardNameToSvg = {
  "5 of diamonds": "5p.svg",
  "8 of diamonds": "8p.svg",
  "8 of hearts": "8co.svg",
  "4 of hearts": "4co.svg",
  "9 of tre": "9t.svg"
};

const CommunityCards = ({ cards }) => {
  return (
    <div className="community-cards">
      {cards.map((card, index) => {
        const cardImage = cardNameToSvg[card];
        const imagePath = cardImage ? require(`../assets/cards/${cardImage}`) : null;
        return (
          <div key={index} className="card">
            {imagePath && <img src={imagePath} alt={card} className="card-image" />}
          </div>
        );
      })}
    </div>
  );
};

export default CommunityCards;
