import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";

function LoginModal({ name, activeModal, onClose, openRegisterModal }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm();

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    resetForm();
  }, [activeModal]);

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
            name="userEmail"
            placeholder="Enter email"
            onChange={handleChange}
            value={values.userEmail || ""}
            required
          />
          <span className="modal-form__error" id="user-email-error">
            {errors.userEmail}
          </span>
        </label>
        <label htmlFor="user-password" className="modal-form__label">
          Password
          <input
            type="text"
            className="modal-form__text-input"
            id="user-password"
            name="userPassword"
            placeholder="Enter password"
            onChange={handleChange}
            value={values.userPassword || ""}
            required
          />
          <span className="modal-form__error" id="user-password-error">
            {errors.userPassword}
          </span>
        </label>
      </fieldset>
      <button
        type="submit"
        className={`modal-form__btn ${isValid && "modal-form__btn_active"}`}
      >
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
