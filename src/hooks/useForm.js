import { useState } from "react";

export function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    console.log(value);
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest("form").checkValidity());
  };

  const resetForm = () => {
    setValues({});
    setErrors({});
    setIsValid(false);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    handleChange,
    resetForm,
  };
}
