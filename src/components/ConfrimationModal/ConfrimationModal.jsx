import Modal from "../Modal/Modal";

function SignUpModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
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
