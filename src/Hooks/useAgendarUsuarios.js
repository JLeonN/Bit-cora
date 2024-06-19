// Agendar Usuarios
import { useState } from 'react';

const useAgendarUsuarios = () => {
  const [valorInput, setValorInput] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const manejarCambioInput = (evento) => {
    setValorInput(evento.target.value);
  };

  const agregarUsuario = () => {
    if (valorInput.trim() !== '') {
      setUsuarios([...usuarios, valorInput]);
      setValorInput('');
    }
  };

  const borrarUsuario = (index) => {
    setUsuarios(usuarios.filter((u, i) => i !== index));
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
