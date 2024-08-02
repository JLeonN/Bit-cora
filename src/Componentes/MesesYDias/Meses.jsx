import { useState } from 'react';
import DiasTabla from './DiasTabla';
import TodoModal from '../Modals/TodoModal';
import useAgendarPedido from '../../Hooks/useAgendarPedido';

// ---Muestra el año actual---
const añoActual = new Date().getFullYear();

const Meses = ({ usuarios }) => {
  const [mesSeleccionado, setMesSeleccionado] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');
  // ---Siempre muestre el año actual---
  const [añoSeleccionado, setAñoSeleccionado] = useState(añoActual);

  // ---Diccionario, mapa, objeto---
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

  // ---Selector de meses---
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

  // Filtra los pedidos para mostrar solo aquellos que pertenecen al usuario seleccionado y que corresponden al mes seleccionado.
  const pedidosFiltrados = pedidos.filter((pedido) => {
    const numeroDelMesDelPedido = pedido.dia.getMonth(); // Obtiene el número del mes del pedido (0-11)
    const numeroDelMesSeleccionado = MESES[mesSeleccionado]; // Obtiene el número del mes seleccionado (0-11) del diccionario MESES
    const añoDelPedido = pedido.dia.getFullYear(); // Obtiene el año del pedido
    return (
      pedido.usuarioId === Number(usuarioSeleccionado) && // Verifica si el usuario del pedido coincide con el usuario seleccionado
      numeroDelMesDelPedido === numeroDelMesSeleccionado && // Verifica si el mes del pedido coincide con el mes seleccionado
      añoSeleccionado === añoDelPedido // Verifica si el año del pedido coincide con el año seleccionado
    );
  });

  // añoSeleccionado

  const manejarCambio = (evento) => {
    setAñoSeleccionado(evento.target.value);
  };

  // ---Muestra los años en el selector---
  const generarOpcionesDeAño = () => {
    let años = [];
    for (let i = añoActual - 3; i <= añoActual + 4; i++) {
      años.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
    return años;
  };

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
        <div className="selectorAño contenedor">
          <select id="años" value={añoSeleccionado} onChange={manejarCambio}>
            {generarOpcionesDeAño()}
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

        {usuarioSeleccionado == '' && (
          <p className="textoParaElUsuario">Debe seleccionar un perfiles</p>
        )}

        {mesSeleccionado == '' && usuarioSeleccionado != '' && (
          <p className="textoParaElUsuario">Debe seleccionar un mes.</p>
        )}
        {mesSeleccionado != '' &&
          pedidosFiltrados.length == 0 &&
          usuarioSeleccionado != '' && (
            <p className="textoParaElUsuario">
              El perfil seleccionado no tiene pedidos en {mesSeleccionado} del {añoSeleccionado}
            </p>
          )}

        <DiasTabla mes={mesSeleccionado} dias={pedidosFiltrados} />
      </section>
    </>
  );
};

export default Meses;
