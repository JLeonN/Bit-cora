import { useModal } from '../../Hooks/useModal';
import Formulario from '../Formulario';
import Modal from './Modal';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <div>
      <h3 className="titulo">Formularios</h3>
      <button onClick={openModal1}>Botón que llama al modal</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <Formulario closeModal={closeModal1} />
      </Modal>
    </div>
  );
};

export default Modals;
