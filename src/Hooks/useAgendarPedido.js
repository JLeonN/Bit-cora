// Agendar Pedido
import { useEffect, useState } from 'react';
import Repositorio from '../Componentes/Base de datos/repositorio';

const pedidosRepositorio = new Repositorio('Pedidos');

const useAgendarPedido = () => {
  const [numeroBoleta, setNumeroBoleta] = useState('');
  const [cantidadItems, setCantidadItems] = useState('');
  const [cantidadItemsNegados, setCantidadItemsNegados] = useState('');
  const [notas, setNotas] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');
  const [dias, setDias] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

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
      case 'usuarioSeleccionado':
        setUsuarioSeleccionado(Number(value));
        break;
      default:
        break;
    }
  };

  // ---Muestra el día en el programa---
  const today = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  // ---Prepara la estructuración de datos para guardar---
  const guardarInfo = () => {
    const nuevoDia = {
      dia: today,
      numeroBoleta,
      cantidadItems,
      cantidadItemsNegados,
      notas,
      usuarioId: usuarioSeleccionado,
    };
    setDias([...dias, nuevoDia]);
    console.log("1",nuevoDia);

    // ---Resetear los valores del formulario para que no queden escritos---
    setNumeroBoleta('');
    setCantidadItems('');
    setCantidadItemsNegados('');
    setNotas('');

    // ---Guarda la info---
    pedidosRepositorio.guardar(nuevoDia);
  };

  // ---Mostrar info---
  const mostrarInfo = async () => {
    const info = await pedidosRepositorio.obtenerTodo();
    setDias(info);
  };

  // --Muestra lo guardado al iniciar---
  useEffect(() => {
    mostrarInfo();
  }, []);

  return {
    numeroBoleta,
    cantidadItems,
    cantidadItemsNegados,
    notas,
    usuarioSeleccionado,
    manejarCambioInput,
    guardarInfo,
    dias,
    usuarios,
  };
};

export default useAgendarPedido;
