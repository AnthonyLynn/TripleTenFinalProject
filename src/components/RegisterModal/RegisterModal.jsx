import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

import { useForm } from "../../hooks/useForm.js";

function RegisterModal({ name, activeModal, onClose, children }) {
  const { values, handleChange, setValues } = useForm({});

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <ModalWithForm
      name={name}
      onClose={onClose}
      activeModal={activeModal}
      onSubmit={onSubmit}
    >
      <h2 className="modal__header">Sign up</h2>
      <fieldset className="modal-form__fieldset">
        <label htmlFor="signin-email" className="modal-form__label">
          Email
          <input
            type="email"
            className="modal-form__text-input"
            id="signin-email"
            name="signin-email"
            placeholder="Enter email"
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          <span className="modal-form__error"></span>
        </label>
        <label htmlFor="signin-password" className="modal-form__label">
          Password
          <input
            type="text"
            className="modal-form__text-input"
            id="signin-password"
            name="signin-password"
            placeholder="Enter password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          <span className="modal-form__error"></span>
        </label>
        <label htmlFor="signin-username" className="modal-form__label">
          Username
          <input
            type="text"
            className="modal-form__text-input"
            id="signin-username"
            name="signin-username"
            placeholder="Enter username"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          <span className="modal-form__error"></span>
        </label>
      </fieldset>
      <button type="submit" className="modal-form__btn">
        Sign up
      </button>
      <p className="modal__subtext">
        or{" "}
        <a href="" className="modal__link">
          Sign in
        </a>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
