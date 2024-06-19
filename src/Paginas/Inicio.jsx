import Meses from '../Componentes/MesesYDias/Meses';
import SelectorDeUsuarios from '../Componentes/SelectorDeUsuarios';

const Inicio = () => {
  return (
    <>
      <section>
        <Meses />
      </section>
      <section>
        <SelectorDeUsuarios />
      </section>
    </>
  );
};

export default Inicio;
