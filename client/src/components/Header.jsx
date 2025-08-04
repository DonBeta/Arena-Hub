import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../context/useAuth'; 

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header style={{ padding: '1rem', backgroundColor: '#111', color: 'white' }}>
      <h1>Arena-Hub</h1>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
        {!user && (
          <>
            <Link to="/login" style={{ marginRight: '1rem', color: 'white' }}>Login</Link>
            <Link to="/register" style={{ marginRight: '1rem', color: 'white' }}>Registro</Link>
          </>
        )}
        {user && (
          <>
            <Link to="/profile" style={{ marginRight: '1rem', color: 'white' }}>Perfil</Link>
            <Link to="/settings" style={{ marginRight: '1rem', color: 'white' }}>Ajustes</Link>
            <Link to="/tournaments" style={{ marginRight: '1rem', color: 'white' }}>Torneos</Link>
            <Link to="/dashboard" style={{ marginRight: '1rem', color: 'white' }}>Dashboard</Link>
            
            {/* Aquí añadimos el enlace para crear torneo */}
            <Link to="/tournaments/create" style={{ marginRight: '1rem', color: 'white' }}>Crear Torneo</Link>
            
            <span style={{ marginRight: '1rem' }}>Bienvenido, {user.email}</span>
            <button onClick={handleLogout} className="btn btn-sm btn-outline-light">Cerrar sesión</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;