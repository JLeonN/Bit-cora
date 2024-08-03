import { Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import AgendarUsuarios from './Paginas/AgendarUsuarios';

const Estructura = ({
  valorInput,
  manejarCambioInput,
  agregarUsuario,
  usuarios,
  borrarUsuario,
}) => {
  return (
    <>
      <div>
        <Routes>
          {/* NavBar */}
          <Route
            path="/AgendarUsuarios"
            element={
              <AgendarUsuarios
                valorInput={valorInput}
                manejarCambioInput={manejarCambioInput}
                agregarUsuario={agregarUsuario}
                usuarios={usuarios}
                borrarUsuario={borrarUsuario}
              />
            }
          />
          {/* Inicio */}
          <Route path="/*" element={<Inicio usuarios={usuarios} />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
