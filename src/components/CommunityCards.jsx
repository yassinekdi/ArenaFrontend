import React from 'react';
import { getCardImage } from './constants'; // Adjust the import path as necessary

const CommunityCards = ({ cards }) => {
    return (
        <div className="community-cards">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <img src={getCardImage(card)} alt={card} className="card-image" />
                </div>
            ))}
        </div>
    );
};

export default CommunityCards;
