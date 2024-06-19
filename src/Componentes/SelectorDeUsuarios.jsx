const SelectorDeUsuarios = () => {
  return (
    <div className="selectorIzq">
      <div className="grupoFormulario contenedor">
        <select id="usuario" name="usuario">
          <option disabled selected hidden>Usuarios</option>
          <option value="usuario2">Usuario 1</option>
          <option value="usuario3">Usuario 2</option>
          <option value="usuario4">Usuario 3</option>
        </select>
      </div>
    </div>
  );
};

export default SelectorDeUsuarios;

