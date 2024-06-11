import { Route, Routes } from "react-router-dom";
import Estadisticas from "./Paginas/Estadisticas";
import Apuntes from "./Paginas/Apuntes";

const Estructura = () => {
  return (
    <>
      <div>
        <Routes>
          {/* NavBar */}
          <Route path="/Estadisticas" element={<Estadisticas />} />
          <Route path="/Apuntes" element={<Apuntes />} />

          {/* Inicio */}
          <Route path="/" element={<Estadisticas /> } />

          {/* Errores */}
          {/* <Route path="/*" element={<Error404 />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
