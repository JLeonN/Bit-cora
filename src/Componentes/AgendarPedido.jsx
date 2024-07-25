const AgendarPedido = ({
  closeModal,
  usuarios,
  numeroBoleta,
  cantidadItems,
  cantidadItemsNegados,
  notas,
  usuarioSeleccionado,
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
        {/* Selector de usuarios o perfiles */}
        <div className="grupoFormulario">
          <label htmlFor="usuario">Usuarios</label>
          <select
            id="usuario"
            name="usuarioSeleccionado"
            value={usuarioSeleccionado}
            onChange={manejarCambioInput}
          >
            {usuarios.map((usuario) => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.nombre}
              </option>
            ))}
          </select>
        </div>
        {/* Número boleta */}
        <div className="grupoFormulario">
          <label htmlFor="numeroBoleta">Número boleta</label>
          <input
            type="number"
            id="numeroBoleta"
            name="numeroBoleta"
            value={numeroBoleta}
            onChange={manejarCambioInput}
          />
        </div>
        {/* Cantidad de ítems */}
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
        {/* Cantidad de ítems negados */}
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
        {/* Notas */}
        <div className="grupoFormulario">
          <label htmlFor="notas">Notas</label>
          <textarea
            id="notas"
            name="notas"
            value={notas}
            onChange={manejarCambioInput}
          ></textarea>
        </div>
        {/* Botones */}
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

export default AgendarPedido;
