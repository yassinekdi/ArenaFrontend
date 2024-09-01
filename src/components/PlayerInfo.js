import React from 'react';
import fiveOfDiamonds from '../assets/cards/5p.svg';
import eightOfDiamonds from '../assets/cards/8p.svg';
import eightOfHearts from '../assets/cards/8co.svg';
import hiddenCard from '../assets/cards/hidden.svg';
import fourOfHearts from '../assets/cards/4co.svg';

const cardNameToSvg = {
  "5 of diamonds": fiveOfDiamonds,
  "8 of diamonds": eightOfDiamonds,
  "8 of hearts": eightOfHearts,
  "4 of hearts": fourOfHearts,
  "hidden_card": hiddenCard,
};

const PlayerInfo = ({ player, isCurrentPlayer, style }) => {
  const { username, bankroll, action, active, hand } = player;

  const cardsToShow = active ? (username === "You" ? hand : ["hidden_card", "hidden_card"]) : [];

  return (
    <div className={`player-info ${active ? '' : 'inactive'}`} style={style}>
      {cardsToShow.length > 0 && (
        <div className="cards">
          {cardsToShow.map((card, index) => (
            <div key={index} className="card">
              <img src={cardNameToSvg[card]} alt={card} className="card-image" />
            </div>
          ))}
        </div>
      )}
      <div className="username">{username}</div>
      {active && (
        <>
          <div className="bankroll">${bankroll}</div>
          <div className={`action ${action?.toLowerCase()}`}>{action}</div>
          {isCurrentPlayer && <div className="timer">19 sec-----</div>}
        </>
      )}
    </div>
  );
};

export default PlayerInfo;
