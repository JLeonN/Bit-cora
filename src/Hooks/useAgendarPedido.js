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
  const [pedidos, setPedidos] = useState([]);
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

  // ---Prepara la estructuración de datos para guardar---
  const guardarInfo = () => {
    const today = new Date();
    const nuevoPedido = {
      dia: today,
      numeroBoleta,
      cantidadItems,
      cantidadItemsNegados,
      notas,
      usuarioId: usuarioSeleccionado,
    };
    setPedidos([...pedidos, nuevoPedido]);

    // ---Resetear los valores del formulario para que no queden escritos---
    setNumeroBoleta('');
    setCantidadItems('');
    setCantidadItemsNegados('');
    setNotas('');

    // ---Guarda la info---
    pedidosRepositorio.guardar(nuevoPedido);
  };

  // ---Mostrar info---
  const mostrarInfo = async () => {
    const info = await pedidosRepositorio.obtenerTodo();
    setPedidos(info);
  };

  // ---Muestra lo guardado al iniciar---
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
    pedidos,
    usuarios,
  };
};

export default useAgendarPedido;
