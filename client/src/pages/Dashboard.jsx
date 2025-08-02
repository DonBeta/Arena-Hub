import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [joinedTournaments, setJoinedTournaments] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('joinedTournaments');
    if (stored) {
      setJoinedTournaments(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📋 Panel de Usuario</h2>
      <div className="mb-3">
        <a href="#joined" className="btn btn-outline-primary btn-sm me-2">Torneos Unidos</a>
        <a href="#stats" className="btn btn-outline-success btn-sm me-2">Estadísticas</a>
        <a href="#created" className="btn btn-outline-warning btn-sm me-2">Torneos Creados</a>
      </div>

      <div className="row">
        {/* Torneos unidos */}
        <div className="col-md-6 mb-4">
          <div id="joined" className="card shadow">
            <div className="card-header bg-primary text-white">
              Torneos Unidos
            </div>
            <div className="card-body">
              {joinedTournaments.length === 0 ? (
                <p className="text-muted">No te has unido a ningún torneo todavía.</p>
              ) : (
                <ul className="list-group">
                  {joinedTournaments.map((t) => (
                    <li key={t.id} className="list-group-item">
                      <strong>{t.name}</strong> – {t.game} ({t.date})
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Estadísticas (ficticias de momento) */}
        <div className="col-md-6 mb-4">
          <div id="stats" className="card shadow">
            <div className="card-header bg-success text-white">
              Estadísticas Generales
            </div>
            <div className="card-body">
              <p><strong>Partidas jugadas:</strong> 0</p>
              <p><strong>Victorias:</strong> 0</p>
              <p><strong>Derrotas:</strong> 0</p>
              <p><strong>Porcentaje de victoria:</strong> 0%</p>
              <small className="text-muted">* Estos datos se actualizarán en el futuro con el backend.</small>
            </div>
          </div>
        </div>

                {/* Torneos creados (ficticios) */}
        <div className="col-md-12 mb-4">
          <div id="created" className="card shadow">
            <div className="card-header bg-warning">
              🛠️ Torneos Creados
            </div>
            <div className="card-body">
              <p className="text-muted">
                Esta es una simulación. Más adelante se conectará al backend.
              </p>
              <ul className="list-group">
                <li className="list-group-item">Torneo React Warriors – League of Legends – 2025-08-20</li>
                <li className="list-group-item">Torneo Full Stack Battle – CS:GO – 2025-09-01</li>
                <li className="list-group-item">Frontend Clash – Valorant – 2025-09-10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
              {/* Resumen de usuario */}
        <div className="col-md-12 mb-4">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              🎮 Resumen del Jugador
            </div>
            <div className="card-body">
              <p><strong>Nombre de usuario:</strong> CarlosPlayer</p>
              <p><strong>Email:</strong> carlos@arenahub.com</p>
              <p><strong>Torneos unidos:</strong> {joinedTournaments.length}</p>
              <p><strong>Torneos creados:</strong> 3 (simulados)</p>
              <p><strong>Miembro desde:</strong> Julio 2025</p>
              <small className="text-muted">* Esta información será dinámica cuando conectemos con el backend.</small>
            </div>
          </div>
        </div>
    </div>

   

    
  );
}

export default Dashboard;