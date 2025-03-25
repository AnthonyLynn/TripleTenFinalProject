import Modal from "../Modal/Modal";

import { useForm } from "../../hooks/useForm.js";

function LoginModal({ onClose, children }) {
  const { values, handleChange, setValues } = useForm({});

  return (
    <Modal onClose={onClose}>
      <form className="modal__form">
        <h2 className="modal__header">Sign in</h2>
        <fieldset className="modal__fieldset">
          <label htmlFor="user-email" className="modal__label">
            Email
            <input
              type="email"
              className="modal__text-input"
              id="user-email"
              name="user-email"
              placeholder="Enter email"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            <span className="modal__error"></span>
          </label>
          <label htmlFor="user-password" className="modal__label">
            Password
            <input
              type="text"
              className="modal__text-input"
              id="user-password"
              name="user-password"
              placeholder="Enter password"
              onChange={handleChange}
              value={values.password || ""}
              required
            />
            <span className="modal__error"></span>
          </label>
        </fieldset>
        <button type="submit" className="modal__btn">
          Save changes
        </button>
        <p className="modal__subtext">
          or
          <a href="" className="modal__link">
            Sign up
          </a>
        </p>
      </form>
    </Modal>
  );
}

export default LoginModal;
