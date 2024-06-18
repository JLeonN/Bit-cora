const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article onClick={closeModal} className={`modal ${isOpen && 'is-open'}`}>
      {/* <div className="modal-container"></div> */}
      {/* <button className="modal-clos" onClick={closeModal}>X</button> */}
      {children}
    </article>
  );
};

export default Modal;
