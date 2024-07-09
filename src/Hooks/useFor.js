// Formulario
import { useState } from 'react';

const useFor = () => {
  const [numeroBoleta, setNumeroBoleta] = useState('');
  const [cantidadItems, setCantidadItems] = useState('');
  const [cantidadItemsNegados, setCantidadItemsNegados] = useState('');
  const [notas, setNotas] = useState('');
  const [dias, setDias] = useState([]);

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'numeroBoleta':
        setNumeroBoleta(Number(value));
        break;
      case 'cantidadItems':
        setCantidadItems(Number(value));
        break;
      case 'cantidadItemsNegados':
        setCantidadItemsNegados(Number(value));
        break;
      case 'notas':
        setNotas(value);
        break;
      default:
        break;
    }
  };

  // ---Dia actual---
  const today = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const guardarInfo = () => {
    const nuevoDia = {
      dia: today,
      numeroBoleta,
      cantidadItems,
      cantidadItemsNegados,
      notas,
    };
    setDias([...dias, nuevoDia]);

    // ---Resetear los valores del formulario---
    setNumeroBoleta('');
    setCantidadItems('');
    setCantidadItemsNegados('');
    setNotas('');
  };

  return {
    numeroBoleta,
    cantidadItems,
    cantidadItemsNegados,
    notas,
    manejarCambioInput,
    guardarInfo,
    dias,
  };
};

export default useFor;
