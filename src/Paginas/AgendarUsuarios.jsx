import useAgendarUsuarios from '../Hooks/useAgendarUsuarios';

const AgendarUsuarios = () => {
  const { valorInput, manejarCambioInput, agregarUsuario, usuarios, borrarUsuario } = useAgendarUsuarios();

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
          {usuarios.map((usuario, index) => (
            <li key={index} className="usuario">
              {usuario}
              <button onClick={() => borrarUsuario(index)} className="borrarUsuario">Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AgendarUsuarios;
