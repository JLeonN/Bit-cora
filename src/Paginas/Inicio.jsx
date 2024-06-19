import Meses from '../Componentes/MesesYDias/Meses';

const Inicio = ({ usuarios }) => {
  return (
    <>
      <section>
        <Meses usuarios={usuarios} />
      </section>
    </>
  );
};

export default Inicio;
