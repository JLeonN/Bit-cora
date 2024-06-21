const Formulario = ({
  closeModal,
  usuarios,
  numeroBoleta,
  cantidadItems,
  cantidadItemsNegados,
  notas,
  manejarCambioInput,
  guardarInfo,
}) => {
  const noCerrarEnElDiv = (e) => e.stopPropagation();

  const manejarSubmit = (e) => {
    e.preventDefault();
    guardarInfo();
    closeModal();
  };

  return (
    <>
      <form
        onClick={noCerrarEnElDiv}
        onSubmit={manejarSubmit}
        className="detalleForm"
      >
        <h2 className="titulo tituloModal">Detalle del Día</h2>
        <div className="grupoFormulario">
          <label htmlFor="usuario">Usuarios</label>
          <select id="usuario" name="usuario">
            {usuarios.map((usuario, index) => (
              <option key={index}>{usuario}</option>
            ))}
          </select>
        </div>
        <div className="grupoFormulario">
          <label htmlFor="numeroBoleta">Número boleta</label>
          <input
            type="text"
            id="numeroBoleta"
            name="numeroBoleta"
            value={numeroBoleta}
            onChange={manejarCambioInput}
          />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="cantidadItems">Cantidad de ítems</label>
          <input
            type="number"
            id="cantidadItems"
            name="cantidadItems"
            value={cantidadItems}
            onChange={manejarCambioInput}
          />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="cantidadItemsNegados">
            Cantidad de ítems negados
          </label>
          <input
            type="number"
            id="cantidadItemsNegados"
            name="cantidadItemsNegados"
            value={cantidadItemsNegados}
            onChange={manejarCambioInput}
          />
        </div>
        <div className="grupoFormulario">
          <label htmlFor="notas">Notas</label>
          <textarea
            id="notas"
            name="notas"
            value={notas}
            onChange={manejarCambioInput}
          ></textarea>
        </div>
        <div className="botones">
          <button type="submit" id="guardarInfo">
            Guardar
          </button>
          <button onClick={closeModal} type="button">
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
