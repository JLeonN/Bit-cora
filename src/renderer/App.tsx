import './App.css';
import { HashRouter } from 'react-router-dom';
import useAgendarUsuarios from '../Hooks/useAgendarUsuarios';
import Nav from '../Componentes/NavBar/Nav';
import Estructura from '../Estructura';
import Footer from '../Componentes/Footer/Footer';

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
      <HashRouter>
        <Nav usuarios={usuarios} />
        <Estructura
          valorInput={valorInput}
          manejarCambioInput={manejarCambioInput}
          agregarUsuario={agregarUsuario}
          usuarios={usuarios}
          borrarUsuario={borrarUsuario}
        />
        <Footer />
      </HashRouter>
    </>
  );
}
