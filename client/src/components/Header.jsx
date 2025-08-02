import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#111', color: 'white' }}>
      <h1>Arena-Hub</h1>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
        <Link to="/login" style={{ color: 'white' }}>Login</Link>
        <Link to="/register" style={{ marginLeft: '1rem', color: 'white' }}>Registro</Link>
        <Link to="/profile" style={{ marginLeft: '1rem', color: 'white' }}>Perfil</Link>
        <Link to="/settings" style={{ marginLeft: '1rem', color: 'white' }}>Ajustes</Link>
        <Link to="/tournaments" style={{ marginLeft: '1rem', color: 'white' }}>Tournaments</Link>
        <Link to="/dashboard" style={{ marginLeft: '1rem', color: 'white' }}>Dashboard</Link>
      </nav>
    </header>
  )
}

export default Header