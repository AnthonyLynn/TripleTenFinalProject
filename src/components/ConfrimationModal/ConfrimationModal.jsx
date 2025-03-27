import Modal from "../Modal/Modal";

function SignUpModal({ name, activeModal, onClose }) {
  return (
    <Modal name={name} activeModal={activeModal} onClose={onClose}>
      <div className="modal__confrimation">
        <h2 className="modal__header">Registration successfully completed!</h2>
        <a href="" className="modal__link">
          Sign in
        </a>
      </div>
    </Modal>
  );
}

export default SignUpModal;
