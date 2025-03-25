import Modal from "../Modal/Modal";

import { useForm } from "../../hooks/useForm.js";

function SignUpModal({ onClose, children }) {
  const { values, handleChange, setValues } = useForm({});

  return (
    <Modal onClose={onClose}>
      <form className="modal__form">
        <h2 className="modal__header">Sign up</h2>
        <fieldset className="modal__fieldset">
          <label htmlFor="signin-email" className="modal__label">
            Email
            <input
              type="email"
              className="modal__text-input"
              id="signin-email"
              name="signin-email"
              placeholder="Enter email"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            <span className="modal__error"></span>
          </label>
          <label htmlFor="signin-password" className="modal__label">
            Password
            <input
              type="text"
              className="modal__text-input"
              id="signin-password"
              name="signin-password"
              placeholder="Enter password"
              onChange={handleChange}
              value={values.password || ""}
              required
            />
            <span className="modal__error"></span>
          </label>
          <label htmlFor="signin-username" className="modal__label">
            Username
            <input
              type="text"
              className="modal__text-input"
              id="signin-username"
              name="signin-username"
              placeholder="Enter username"
              onChange={handleChange}
              value={values.password || ""}
              required
            />
            <span className="modal__error"></span>
          </label>
        </fieldset>
        <button type="submit" className="modal__btn">
          Sign up
        </button>
        <p className="modal__subtext">
          or
          <a href="" className="modal__link">
            Sign in
          </a>
        </p>
      </form>
    </Modal>
  );
}

export default SignUpModal;
