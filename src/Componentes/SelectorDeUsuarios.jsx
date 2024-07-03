const SelectorDeUsuarios = ({ usuarios }) => {
  return (
    <div className="selectorIzq">
      <div className="grupoFormulario contenedor">
        <select id="usuario" name="usuario">
          <option disabled selected hidden>
            Usuarios
          </option>
          {usuarios.map((usuario) => (
            <option key={usuario.id}>{usuario.nombre}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectorDeUsuarios;
