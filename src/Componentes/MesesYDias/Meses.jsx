import { useState } from 'react';
import DiasTabla from './DiasTabla';
import TodoModal from '../Modals/TodoModal';
import useFor from '../../Hooks/useFor';

const Meses = ({ usuarios }) => {
  const [mesSeleccionado, setMesSeleccionado] = useState('');

  const manejarClicMes = (mes) => {
    setMesSeleccionado(mes);
  };

  const {
    numeroBoleta,
    cantidadItems,
    cantidadItemsNegados,
    notas,
    manejarCambioInput,
    guardarInfo,
    dias,
  } = useFor();

  return (
    <>
      {/* <h2 className="titulo">{mesSeleccionado}</h2> */}
      <div className="contenedor">
        <section className="meses12">
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Enero')}>
              Enero
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Febrero')}>
              Febrero
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Marzo')}>
              Marzo
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Abril')}>
              Abril
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Mayo')}>
              Mayo
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Junio')}>
              Junio
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Julio')}>
              Julio
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Agosto')}>
              Agosto
            </div>
          </div>
          <div className="mes">
            <div
              className="boxMes"
              onClick={() => manejarClicMes('Septiembre')}
            >
              Septiembre
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Octubre')}>
              Octubre
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Noviembre')}>
              Noviembre
            </div>
          </div>
          <div className="mes">
            <div className="boxMes" onClick={() => manejarClicMes('Diciembre')}>
              Diciembre
            </div>
          </div>
        </section>
      </div>
      <section>
        <TodoModal
          usuarios={usuarios}
          numeroBoleta={numeroBoleta}
          cantidadItems={cantidadItems}
          cantidadItemsNegados={cantidadItemsNegados}
          notas={notas}
          manejarCambioInput={manejarCambioInput}
          guardarInfo={guardarInfo}
        />
        <DiasTabla mes={mesSeleccionado} dias={dias} />
      </section>
    </>
  );
};

export default Meses;
