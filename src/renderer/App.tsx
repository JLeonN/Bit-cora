import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Componentes/NavBar/Nav';
import Estructura from '../Estructura';

export default function App() {
  return (
    <>
      <BrowserRouter>
            <Nav />
            <Estructura />
      </BrowserRouter>
    </>
  );
}
