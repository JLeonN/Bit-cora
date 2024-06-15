const Formulario = ({ children }) => {
  return (
    <>
      <h2 className="titulo">Detalle del Día</h2>
      <form className="detalleForm">
        <div className="grupoFormulario">
          <label htmlFor="usuario">Usuarios</label>
          <select id="usuario" name="usuario">
            <option value="usuario1">Usuario 1</option>
            <option value="usuario2">Usuario 2</option>
            <option value="usuario3">Usuario 3</option>
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
          <button className="botonGuardar" type="submit">
            Guardar
          </button>
          <button className="botonConcelar" type="button">
            Cancelar
          </button>
        </div>
        {children}
      </form>
    </>
  );
};

export default Formulario;
