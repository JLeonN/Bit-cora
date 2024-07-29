import './App.css';
import { BrowserRouter } from 'react-router-dom';
import useAgendarUsuarios from '../Hooks/useAgendarUsuarios';
import Nav from '../Componentes/NavBar/Nav';
import Estructura from '../Estructura';
import Footer from '../Componentes/Footer/Footer';
import Inicio from '../Paginas/Inicio';

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
        <Inicio usuarios={usuarios} />
        <Footer />
      </BrowserRouter>
    </>
  );
}
