import React from 'react';
import { getCardImage } from './constants'; // Adjust the import path as necessary

const PlayerInfo = ({ player, isCurrentPlayer, style }) => {
    const { username, bankroll, action, active, hand } = player;
    const cardsToShow = active ? (username === "You" ? hand : ["hidden card", "hidden card"]) : [];

    return (
        <div className={`player-info ${active ? '' : 'inactive'}`} style={style}>
            {cardsToShow.length > 0 && (
                <div className="cards">
                    {cardsToShow.map((card, index) => (
                        <div key={index} className="card">
                            <img src={getCardImage(card)} alt={card} className="card-image" />
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
