const Formulario = ({ closeModal, usuarios }) => {
  const noCerrarEnElDiv = (e) => e.stopPropagation();

  return (
    <>
      <form onClick={noCerrarEnElDiv} className="detalleForm">
        <h2 className="titulo tituloModal">Detalle del Día</h2>
        <div className="grupoFormulario">
          <label htmlFor="usuario">Usuarios</label>
          <select id="usuario" name="usuario">
            {usuarios.map((usuarios, index) => (
              <option key={index}>{usuarios}</option>
            ))}
          </select>
        </div>
        <div className="grupoFormulario">
          <label htmlFor="numeroBoleta">Número boleta</label>
          <input type="text" id="numeroBoleta" name="numeroBoleta" />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="cantidadItems">Cantidad de ítems</label>
          <input type="number" id="cantidadItems" name="cantidadItems" />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="itemsNegados">Cantidad de ítems negados</label>
          <input type="number" id="itemsNegados" name="itemsNegados" />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="notas">Notas</label>
          <textarea id="notas" name="notas"></textarea>
        </div>
        <div className="botones">
          <button type="submit">Guardar</button>
          <button onClick={closeModal} type="button">
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
