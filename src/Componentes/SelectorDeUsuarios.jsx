const SelectorDeUsuarios = ({ usuarios }) => {
  return (
    <div className="selectorIzq">
      <div className="grupoFormulario contenedor">
        <select id="usuario" name="usuario">
          <option disabled selected hidden>
            Usuarios
          </option>
          {usuarios.map((usuarios, index) => (
            <option key={index}>{usuarios}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectorDeUsuarios;
