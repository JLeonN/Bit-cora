import { Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Configuracion from "./Paginas/Configuracion";

const Estructura = () => {
  return (
    <>
      <div>
        <Routes>
          {/* NavBar */}
          {/* <Route path="/" element={<Inicio />} /> */}
          <Route path="/Configuracion" element={<Configuracion />} />

          {/* Inicio */}
          <Route path="/" element={<Inicio /> } />

          {/* Errores */}
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
