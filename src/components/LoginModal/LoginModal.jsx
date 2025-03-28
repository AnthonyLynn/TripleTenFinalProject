import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { useForm } from "../../hooks/useForm.js";

function LoginModal({ name, activeModal, onClose, openRegisterModal }) {
  const { values, handleChange, setValues } = useForm({});

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <ModalWithForm
      name={name}
      activeModal={activeModal}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <h2 className="modal__header">Sign in</h2>
      <fieldset className="modal-form__fieldset">
        <label htmlFor="user-email" className="modal-form__label">
          Email
          <input
            type="email"
            className="modal-form__text-input"
            id="user-email"
            name="user-email"
            placeholder="Enter email"
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          <span className="modal-form__error"></span>
        </label>
        <label htmlFor="user-password" className="modal-form__label">
          Password
          <input
            type="text"
            className="modal-form__text-input"
            id="user-password"
            name="user-password"
            placeholder="Enter password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          <span className="modal-form__error"></span>
        </label>
      </fieldset>
      <button type="submit" className="modal-form__btn">
        Sign in
      </button>
      <p className="modal__subtext">
        or{" "}
        <button className="modal__link" onClick={openRegisterModal}>
          Sign up
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
