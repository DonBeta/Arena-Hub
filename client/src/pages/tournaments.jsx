import React, { useState, useEffect } from 'react';

const tournaments = [
  {
    id: 1,
    name: 'Rocket League 2v2 Cup',
    game: 'Rocket League',
    date: '2025-08-10',
    participants: 16,
  },
  {
    id: 2,
    name: 'Valorant Arena Clash',
    game: 'Valorant',
    date: '2025-08-15',
    participants: 32,
  },
  {
    id: 3,
    name: 'CS2 Pro Night',
    game: 'Counter-Strike 2',
    date: '2025-08-18',
    participants: 8,
  },
];

function Tournaments() {
  // 1. Estado inicial
  const [joinedTournaments, setJoinedTournaments] = useState([]);

  // 2. Cargar desde localStorage cuando se monta el componente
  useEffect(() => {
    const saved = localStorage.getItem('joinedTournaments');
    if (saved) {
      setJoinedTournaments(JSON.parse(saved));
    }
  }, []);

  // 3. Función para unirse a torneo y guardar en localStorage
  const handleJoin = (tournament) => {
    if (!joinedTournaments.includes(tournament.id)) {
      const updatedList = [...joinedTournaments, tournament.id];
      setJoinedTournaments(updatedList);
      localStorage.setItem('joinedTournaments', JSON.stringify(updatedList));
      alert(`Te has unido al torneo: ${tournament.name}`);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Torneos Disponibles</h2>
      <div className="row">
        {tournaments.map((tournament) => (
          <div className="col-md-4 mb-4" key={tournament.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{tournament.name}</h5>
                <p className="card-text"><strong>Juego:</strong> {tournament.game}</p>
                <p className="card-text"><strong>Fecha:</strong> {tournament.date}</p>
                <p className="card-text"><strong>Participantes:</strong> {tournament.participants}</p>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => handleJoin(tournament)}
                  disabled={joinedTournaments.includes(tournament.id)}
                >
                  {joinedTournaments.includes(tournament.id) ? 'Unido' : 'Unirse'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournaments;