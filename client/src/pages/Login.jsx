import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de autenticación
    const dummyUser = {
      email: 'user@arenahub.com',
      password: '123456',
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/'); // Redirige directamente a Home
    } else {
      alert('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  );
}

export default Login;