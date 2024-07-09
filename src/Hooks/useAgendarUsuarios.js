// Agendar Usuarios
import { useEffect, useState } from 'react';
import Repositorio from '../Componentes/Base de datos/repositorio';

const usuariosRepositorio = new Repositorio('Usuarios');

const useAgendarUsuarios = () => {
  const [valorInput, setValorInput] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    mostrarLista();
  }, []);

  const manejarCambioInput = (evento) => {
    setValorInput(evento.target.value);
  };

  const agregarUsuario = () => {
    if (valorInput.trim() !== '') {
      setUsuarios([...usuarios, valorInput]);
      setValorInput('');
      const usuario = {
        nombre: valorInput,
      };
      usuariosRepositorio.guardar(usuario);
      mostrarLista();
    }
  };

  const borrarUsuario = (idParaBorrar) => {
    setUsuarios(usuarios.filter((u) => u.id !== idParaBorrar));
    usuariosRepositorio.borrarPorClave(idParaBorrar);
  };

  const mostrarLista = async () => {
    const lista = await usuariosRepositorio.obtenerTodo();
    setUsuarios(lista);
  };

  return {
    valorInput,
    manejarCambioInput,
    agregarUsuario,
    usuarios,
    borrarUsuario,
  };
};

export default useAgendarUsuarios;
