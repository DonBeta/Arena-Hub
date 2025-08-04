import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    // Después de 3 segundos, redirige a Home
    const timer = setTimeout(() => {
      localStorage.setItem('welcomeShown', 'true'); // marcamos que ya se mostró
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container mt-5 text-center">
      <h1>¡Bienvenido a Arena-Hub!</h1>
      <p>Gracias por unirte a nuestra comunidad. Te estamos preparando todo para que comiences.</p>
      <p>Serás redirigido automáticamente en unos segundos...</p>
    </div>
  );
}

export default Welcome;