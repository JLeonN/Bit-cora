import { BrowserRouter } from 'react-router-dom';
import Nav from '../Componentes/NavBar/Nav';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
            <Nav />
            {/* <Estructura /> */}
      </BrowserRouter>
    </>
  );
}
