import Modals from './Modales';

const TodoModal = ({ usuarios }) => {
  return (
    <>
      <div className="contenedor">
        <Modals usuarios={usuarios} />
      </div>
    </>
  );
};

export default TodoModal;
