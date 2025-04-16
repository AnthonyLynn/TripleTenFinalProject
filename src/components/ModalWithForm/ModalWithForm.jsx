import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

function ModalWithForm({ name, activeModal, onClose, onSubmit, children }) {
  return (
    <Modal onClose={onClose} activeModal={activeModal} name={name}>
      <form className="modal-form" onSubmit={onSubmit}>
        {children}
      </form>
    </Modal>
  );
}

export default ModalWithForm;
