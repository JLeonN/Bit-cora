import Modals from './Modales';

const TodoModal = ({
  usuarios,
  numeroBoleta,
  cantidadItems,
  cantidadItemsNegados,
  notas,
  manejarCambioInput,
  guardarInfo,
}) => {
  return (
    <>
      <div className="contenedor">
        <Modals
          usuarios={usuarios}
          numeroBoleta={numeroBoleta}
          cantidadItems={cantidadItems}
          cantidadItemsNegados={cantidadItemsNegados}
          notas={notas}
          manejarCambioInput={manejarCambioInput}
          guardarInfo={guardarInfo}
        />
      </div>
    </>
  );
};

export default TodoModal;
