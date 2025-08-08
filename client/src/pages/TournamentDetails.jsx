import React from 'react';
import { useParams, Link } from 'react-router-dom';

const tournaments = [
  {
    id: 1,
    name: 'Rocket League 2v2 Cup',
    game: 'Rocket League',
    date: '2025-08-10',
    participants: 16,
    description: 'Competición 2v2 de Rocket League para jugadores apasionados.',
  },
  {
    id: 2,
    name: 'Valorant Arena Clash',
    game: 'Valorant',
    date: '2025-08-15',
    participants: 32,
    description: 'Clash oficial de Valorant en la arena de la comunidad.',
  },
  {
    id: 3,
    name: 'CS2 Pro Night',
    game: 'Counter-Strike 2',
    date: '2025-08-18',
    participants: 8,
    description: 'Noche profesional de CS2 con premios para los mejores.',
  },
];

function TournamentDetails() {
  const { id } = useParams();

  // Buscar el torneo por id recibido en URL
  const tournament = tournaments.find(t => t.id === parseInt(id, 10));

  if (!tournament) {
    return <h2 style={{ color: 'red', padding: '2rem' }}>Torneo no encontrado</h2>;
  }

  return (
    <div className="container mt-4" style={{ padding: '2rem' }}>
      <h1>{tournament.name}</h1>
      <p><strong>Juego:</strong> {tournament.game}</p>
      <p><strong>Fecha:</strong> {tournament.date}</p>
      <p><strong>Participantes:</strong> {tournament.participants}</p>
      <p><strong>Descripción:</strong> {tournament.description}</p>

      <Link to="/tournaments" className="btn btn-link mt-3">← Volver a Torneos</Link>
    </div>
  );
}

export default TournamentDetails;