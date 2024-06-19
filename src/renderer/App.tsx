import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Componentes/NavBar/Nav';
import Estructura from '../Estructura';
import useAgendarUsuarios from '../Hooks/useAgendarUsuarios';

export default function App() {
  const {
    valorInput,
    manejarCambioInput,
    agregarUsuario,
    usuarios,
    borrarUsuario,
  } = useAgendarUsuarios();
  return (
    <>
      <BrowserRouter>
        <Nav usuarios={usuarios} />
        <Estructura
          valorInput={valorInput}
          manejarCambioInput={manejarCambioInput}
          agregarUsuario={agregarUsuario}
          usuarios={usuarios}
          borrarUsuario={borrarUsuario}
        />
      </BrowserRouter>
    </>
  );
}
