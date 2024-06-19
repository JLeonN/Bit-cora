const SelectorDeUsuarios = () => {
  return (
    <>
      <div className="grupoFormulario contenedor">
        <label htmlFor="usuario">Usuarios</label>
        <select id="usuario" name="usuario">
          <option value="usuario1">Usuario 1</option>
          <option value="usuario2">Usuario 2</option>
          <option value="usuario3">Usuario 3</option>
        </select>
      </div>
    </>
  );
};

export default SelectorDeUsuarios;
