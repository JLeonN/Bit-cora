const Formulario = () => {
  return (
    <>
      <h2 className="titulo">Detalle del Día</h2>
      <form className="detalleForm">
        <div className="grupoFormulario">
          <label htmlFor="numeroBoleta">Número boleta</label>
          <input type="text" id="numeroBoleta" name="numeroBoleta" />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="cantidadItems">Cantidad de ítems</label>
          <input type="number" id="cantidadItems" name="cantidadItems" />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="itemsNegados">Ítems negados</label>
          <input type="number" id="itemsNegados" name="itemsNegados" />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="notas">Notas</label>
          <textarea id="notas" name="notas"></textarea>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default Formulario;
