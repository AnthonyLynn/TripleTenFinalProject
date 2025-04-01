import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";

function RegisterModal({
  name,
  activeModal,
  onClose,
  openLoginModal,
  children,
}) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({});

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    resetForm();
  }, [activeModal]);

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      onSubmit={onSubmit}
    >
      <h2 className="modal__header">Sign up</h2>
      <fieldset className="modal-form__fieldset">
        <label htmlFor="signup-email" className="modal-form__label">
          Email
          <input
            type="email"
            className="modal-form__text-input"
            id="signup-email"
            name="signupEmail"
            placeholder="Enter email"
            onChange={handleChange}
            value={values.signupEmail || ""}
            required
          />
          <span className="modal-form__error" id="signupEmail-error">
            {errors.signupEmail}
          </span>
        </label>
        <label htmlFor="signup-password" className="modal-form__label">
          Password
          <input
            type="text"
            className="modal-form__text-input"
            id="signup-password"
            name="signupPassword"
            placeholder="Enter password"
            onChange={handleChange}
            value={values.signupPassword || ""}
            required
          />
          <span className="modal-form__error" id="signupPassword-error">
            {errors.signupPassword}
          </span>
        </label>
        <label htmlFor="signup-username" className="modal-form__label">
          Username
          <input
            type="text"
            className="modal-form__text-input"
            id="signup-username"
            name="signupUsername"
            placeholder="Enter username"
            onChange={handleChange}
            value={values.signupUsername || ""}
            required
          />
          <span className="modal-form__error" id="signupUsername-error">
            {errors.signupUsername}
          </span>
        </label>
      </fieldset>
      <button
        type="submit"
        className={`modal-form__btn ${isValid && "modal-form__btn_active"}`}
      >
        Sign up
      </button>
      <p className="modal__subtext">
        or{" "}
        <button className="modal__link" onClick={openLoginModal}>
          Sign in
        </button>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
