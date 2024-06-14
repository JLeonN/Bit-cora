import { Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Formulario from "./Componentes/MesesYDias/Formulario";

const Estructura = () => {
  return (
    <>
      <div>
        <Routes>
          {/* NavBar */}
          <Route path="/" element={<Inicio />} />
          <Route path="/Formulario" element={<Formulario />} />

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
