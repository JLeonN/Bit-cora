import Dias from '../Componentes/Meses/Días/Dias';
import Meses from '../Componentes/Meses/Meses';

const Estadisticas = () => {
  return (
    <>
      <h2 className="titulo">Meses del año</h2>
      <section className="contenedor">
        <Meses />
      </section>
      <section>
        <Dias />
      </section>
    </>
  );
};

export default Estadisticas;
