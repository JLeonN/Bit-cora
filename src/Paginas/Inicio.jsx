import Formulario from "../Componentes/MesesYDias/Formulario";
import Meses from "../Componentes/MesesYDias/Meses";
import Modals from "../Componentes/Modals/Modals";


const Inicio = () => {
  return (
    <>
      <section >
        <Meses />
      </section>
      <div>
        <Modals />
      </div>
      <dir>
        <Formulario></Formulario>
      </dir>
    </>
  );
};

export default Inicio;
