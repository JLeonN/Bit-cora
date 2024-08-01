import React, { useState } from 'react';

const AñoSelector = () => {
  // Muestra el año actual
  const añoActual = new Date().getFullYear();
  // Siempre muestre el año actual
  const [añoSeleccionado, setAñoSeleccionado] = useState(añoActual);

  const manejarCambio = (evento) => {
    setAñoSeleccionado(evento.target.value);
  };

  // Muestra los años en el selector
  const generarOpcionesDeAño = () => {
    let años = [];
    for (let i = añoActual - 9; i <= añoActual + 9; i++) {
      años.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
    return años;
  };

  return (
    // Selector de años
    <div className="selectorAño contenedor">
      {/* <label htmlFor="años">Selecciona un año:</label> */}
      <select id="años" value={añoSeleccionado} onChange={manejarCambio}>
        {generarOpcionesDeAño()}
      </select>
    </div>
  );
};

export default AñoSelector;
