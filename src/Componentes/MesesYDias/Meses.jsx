import { useState } from 'react';
import DiasTabla from './DiasTabla';
import TodoModal from '../Modals/TodoModal';
import useAgendarPedido from '../../Hooks/useAgendarPedido';

const Meses = ({ usuarios }) => {
  const [mesSeleccionado, setMesSeleccionado] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');

  
  const manejarClicMes = (mes) => {
    setMesSeleccionado(mes);
    console.log("MES", mes);
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
            <option value="" disabled>
              Seleccione un perfiles
            </option>
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
              <div className="boxMes" onClick={() => manejarClicMes('01')}>
                Enero
              </div>
            </div>
            <div className="mes">
              <div className="boxMes" onClick={() => manejarClicMes('02')}>
                Febrero
              </div>
            </div>
            <div className="mes">
              <div className="boxMes" onClick={() => manejarClicMes('03')}>
                Marzo
              </div>
            </div>
            <div className="mes">
              <div className="boxMes" onClick={() => manejarClicMes('04')}>
                Abril
              </div>
            </div>
            <div className="mes">
              <div className="boxMes" onClick={() => manejarClicMes('05')}>
                Mayo
              </div>
            </div>
            <div className="mes">
              <div className="boxMes" onClick={() => manejarClicMes('06')}>
                Junio
              </div>
            </div>
            <div className="mes">
              <div className="boxMes" onClick={() => manejarClicMes('07')}>
                Julio
              </div>
            </div>
            <div className="mes">
              <div className="boxMes" onClick={() => manejarClicMes('08')}>
                Agosto
              </div>
            </div>
            <div className="mes">
              <div
                className="boxMes"
                onClick={() => manejarClicMes('09')}
              >
                Septiembre
              </div>
            </div>
            <div className="mes">
              <div className="boxMes" onClick={() => manejarClicMes('10')}>
                Octubre
              </div>
            </div>
            <div className="mes">
              <div
                className="boxMes"
                onClick={() => manejarClicMes('11')}
              >
                Noviembre
              </div>
            </div>
            <div className="mes">
              <div
                className="boxMes"
                onClick={() => manejarClicMes('12')}
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

        {usuarioSeleccionado == '' && (
          <p className="seleccionePerfil" colSpan={5}>
            Debe seleccione un perfiles
          </p>
        )}
        <DiasTabla mes={mesSeleccionado} dias={diasFiltrados} />
      </section>
    </>
  );
};

export default Meses;
