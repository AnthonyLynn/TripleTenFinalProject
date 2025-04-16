import "./Modal.css";

function Modal({ name, activeModal, onClose, children }) {
  const onOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${activeModal === name && "modal_opened"}`}
      onMouseDown={onOverlay}
    >
      <div className={"modal__content"}>
        <button
          type="button"
          className={"modal__close-btn"}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
