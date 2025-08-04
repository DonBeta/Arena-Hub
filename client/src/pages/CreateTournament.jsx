import React, { useState } from 'react';

function CreateTournament() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [modality, setModality] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const tournamentData = {
      name,
      date,
      description,
      modality,
    };

    console.log('Torneo creado:', tournamentData);

    // Luego aquí enviaremos los datos al backend
    alert('Torneo creado (simulado)');
  };

  return (
    <div className="container mt-5">
      <h2>Crear Torneo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del torneo</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Modalidad</label>
          <input
            type="text"
            className="form-control"
            value={modality}
            onChange={(e) => setModality(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">Crear Torneo</button>
      </form>
    </div>
  );
}

export default CreateTournament;