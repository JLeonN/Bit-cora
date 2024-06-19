import { Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import AgendarUsuarios from "./Paginas/AgendarUsuarios";

const Estructura = () => {
  return (
    <>
      <div>
        <Routes>
          {/* NavBar */}
          {/* <Route path="/" element={<Inicio />} /> */}
          <Route path="/AgendarUsuarios" element={<AgendarUsuarios />} />

          {/* Inicio */}
          <Route path="/" element={<Inicio /> } />

          {/* Errores */}
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
