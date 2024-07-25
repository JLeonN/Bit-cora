import { useState } from 'react';
import DiasTabla from './DiasTabla';
import TodoModal from '../Modals/TodoModal';
import useAgendarPedido from '../../Hooks/useAgendarPedido';

const Meses = ({ usuarios }) => {
  const [mesSeleccionado, setMesSeleccionado] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');

  const manejarClicMes = (mes) => {
    setMesSeleccionado(mes);
  };

  const manejarCambioUsuario = (e) => {
    setUsuarioSeleccionado(e.target.value);
  };

  const {
    numeroBoleta,
    cantidadItems,
    cantidadItemsNegados,
    notas,
    manejarCambioInput,
    guardarInfo,
    dias,
  } = useAgendarPedido();

  const diasFiltrados = dias.filter(
    (dia) => dia.usuarioId === Number(usuarioSeleccionado),
  );

  return (
    <>
      <div className="horizontal">
        {/* Selector de usuarios o perfiles */}
        <div className="grupoFormulario perfil">
          <select
            id="usuario"
            name="usuario"
            value={usuarioSeleccionado}
            onChange={manejarCambioUsuario}
          >
            {usuarios.map((usuario) => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Selector de mes */}
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
              <div
                className="boxMes"
                onClick={() => manejarClicMes('Noviembre')}
              >
                Noviembre
              </div>
            </div>
            <div className="mes">
              <div
                className="boxMes"
                onClick={() => manejarClicMes('Diciembre')}
              >
                Diciembre
              </div>
            </div>
          </section>
        </div>
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
        <DiasTabla mes={mesSeleccionado} dias={diasFiltrados} />
      </section>
    </>
  );
};

export default Meses;
