import React from 'react';
import PlayerInfo from './PlayerInfo';
import CommunityCards from './CommunityCards';
import tableImage from '../assets/table.svg';

const hardcodedState = {
  game_id: 126,
  players: [
    { username: "You", bankroll: 15632, action: "Call", active: true, phase_bet: 5, total_game_bet: 10, ai_flag: false, hand: ["4 of hearts", "4 of hearts",]},
    { username: "username1", bankroll: 0, action: null, active: false, phase_bet: 0, total_game_bet: 0, ai_flag: false, hand: ["4 of hearts", "4 of hearts",] },
    { username: "username2", bankroll: 15632, action: "Check", active: true, phase_bet: 5, total_game_bet: 10, ai_flag: false, hand: ["4 of hearts", "4 of hearts",] },
    { username: "username3", bankroll: 15632, action: "Raise", active: true, phase_bet: 5, total_game_bet: 10, ai_flag: false, hand: ["4 of hearts", "4 of hearts",] },
    { username: "username4", bankroll: 15632, action: "Raise", active: true, phase_bet: 5, total_game_bet: 10, ai_flag: false, hand: ["4 of hearts", "4 of hearts",] },
    { username: "username5", bankroll: 15632, action: "Raise", active: true, phase_bet: 5, total_game_bet: 10, ai_flag: false, hand: ["4 of hearts", "4 of hearts",] },
    // { username: "username6", bankroll: 15632, action: "Raise", active: true, phase_bet: 5, total_game_bet: 10, ai_flag: false, hand: ["4 of hearts", "4 of hearts",] },
  ],
  pot: 26,
  community_cards: ["5 of diamonds", "8 of diamonds", "8 of hearts", "9 of tre"],
  current_player_id: 3,
  empty_seats: 0,
  link: "",
  ongoing: true
};
const fixedPositions = [
  { left: '50%', bottom: '-10%', transform: 'translateX(-50%)' }, // Position 1 - Bottom Center
  { left: '-7%', top: '50%', transform: 'translateY(-50%)' },      // Position 2 - Left Center
  { right: '-7%', top: '50%', transform: 'translateY(-50%)' },    // Position 3 - Right Center
  { left: '50%', top: '-15%', transform: 'translateX(-50%)' },   // Position 4 - Top Center
  { left: '20%', top: '0%' },                                  // Position 5 - Top Left
  { right: '8%', top: '0%' },                                 // Position 6 - Top Right
  { left: '50%', top: '10px', transform: 'translateX(-50%)' }    // Position 7 - Top Center (additional)
];


const TablePage = () => {
  const { players, pot, community_cards, current_player_id } = hardcodedState;

  const getPlayerPositions = (playerCount) => {
      let positionsUsed = fixedPositions.slice(0, playerCount);
      return positionsUsed;
  };

  const positions = getPlayerPositions(players.length);

  return (
      <div className="table-page">
          <div className="poker-table">
              <img src={tableImage} alt="Poker Table" className="table-image" />
              <div className="community-cards">
                  <CommunityCards cards={community_cards} />
              </div>
              <div className="pot">Pot: ${pot}</div>
              {players.map((player, index) => (
                  <PlayerInfo
                      key={index}
                      player={player}
                      isCurrentPlayer={index === current_player_id}
                      style={positions[index]}
                  />
              ))}
          </div>
      </div>
  );
};

export default TablePage;
