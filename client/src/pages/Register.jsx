function Register() {
  return (
    <div>
      <h1>Registro de usuario</h1>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default Register