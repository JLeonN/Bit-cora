import { Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Apuntes from "./Paginas/Apuntes";

const Estructura = () => {
  return (
    <>
      <div>
        <Routes>
          {/* NavBar */}
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Apuntes" element={<Apuntes />} />

          {/* Inicio */}
          <Route path="/" element={<Inicio /> } />

          {/* Errores */}
          {/* <Route path="/*" element={<Error404 />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
