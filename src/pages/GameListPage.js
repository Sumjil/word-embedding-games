import React from 'react';
import { Link } from 'react-router-dom';

const GameListPage = () => {
  const games = [
    { id: 1, name: 'Game 1' },
    { id: 2, name: 'Game 2' },
    { id: 3, name: 'Game 3' },
    // Add more games as needed
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Here is the list of games</h1>
      {games.map((game) => (
        <Link key={game.id} to={`game/${game.id}`} style={{ marginBottom: '10px' }}>
          {game.name}
        </Link>
      ))}
    </div>
  );
};

export default GameListPage;
