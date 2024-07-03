const AgendarUsuarios = ({
  valorInput,
  manejarCambioInput,
  agregarUsuario,
  usuarios,
  borrarUsuario,
}) => {
  return (
    <>
      <h2 className="titulo">Agendar Usuarios</h2>
      <div className="contenedorUsuarios">
        <div className="inputUsuarios">
          <input
            type="text"
            placeholder="Nombre del usuario"
            id="nombreUsuario"
            value={valorInput}
            onChange={manejarCambioInput}
          />
          <button onClick={agregarUsuario} id="agregarUsuarioButton">
            Agregar Usuario
          </button>
        </div>
        <ul className="listaUsuarios">
          {usuarios.map((usuario) => (
            <li key={usuario.id} className="usuario">
              {usuario.nombre}
              <button
                onClick={() => borrarUsuario(usuario.id)}
                className="borrarUsuario"
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AgendarUsuarios;
