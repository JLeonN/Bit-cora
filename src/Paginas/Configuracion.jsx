const Configuracion = () => {
  return (
    <>
      <h2 className="titulo">Agendar Usuarios</h2>
      <div className="contenedorUsuarios">
        <div className="inputUsuarios">
          <input
            type="text"
            placeholder="Nombre del usuario"
            id="nombreUsuario"
          />
          <button id="agregarUsuarioButton">Agregar Usuario</button>
        </div>
        <ul className="listaUsuarios">
          <li className="usuario">
            Prueba 1
            <button className="borrarUsuario">Borrar</button>
          </li>
          <li className="usuario">
          Prueba 2
            <button className="borrarUsuario">Borrar</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Configuracion;
