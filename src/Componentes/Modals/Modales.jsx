import { useModal } from '../../Hooks/useModal';
import Formulario from '../Formulario';
import Modal from './Modal';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <div>
      <div className="contenedor">
        <button className="botones botonDetalle" onClick={openModal1}>
          Detalle del Día
        </button>
      </div>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <Formulario closeModal={closeModal1} />
      </Modal>
    </div>
  );
};

export default Modals;
