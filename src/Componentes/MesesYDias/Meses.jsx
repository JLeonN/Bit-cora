import { useState } from 'react';
import DiasTabla from './DiasTabla';
import TodoModal from '../Modals/TodoModal';
import useAgendarPedido from '../../Hooks/useAgendarPedido';
import AñoSelector from './AñoSelector';

const Meses = ({ usuarios }) => {
  const [mesSeleccionado, setMesSeleccionado] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');

  // Diccionario, mapa, objeto
  const MESES = {
    Enero: 0,
    Febrero: 1,
    Marzo: 2,
    Abril: 3,
    Mayo: 4,
    Junio: 5,
    Julio: 6,
    Agosto: 7,
    Septiembre: 8,
    Octubre: 9,
    Noviembre: 10,
    Diciembre: 11,
  };

  // Selector de meses
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
    pedidos,
  } = useAgendarPedido();



// Trabajando con pablo

  const pedidosFiltrados = pedidos.filter(
    (pedido) => {
      const numeroDelMesDelPedido = pedido.dia.getMonth();
      const numeroDelMesSeleccionado = MESES[mesSeleccionado]
      return (
        pedido.usuarioId === Number(usuarioSeleccionado)
        &&
        numeroDelMesDelPedido === numeroDelMesSeleccionado
      );
    }
  );
  console.log('Pedidos', pedidosFiltrados);






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

        {/* Selector de años */}
        <div>
          <AñoSelector />
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

        {usuarioSeleccionado == '' && (
          <p className="seleccionePerfil" colSpan={5}>
            Debe seleccionar un perfiles
          </p>
        )}
        <DiasTabla mes={mesSeleccionado} dias={pedidosFiltrados} />
      </section>
    </>
  );
};

export default Meses;
