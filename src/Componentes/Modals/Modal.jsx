const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article onClick={closeModal} className={`modal ${isOpen && 'is-open'}`}>
      {children}
    </article>
  );
};

export default Modal;
