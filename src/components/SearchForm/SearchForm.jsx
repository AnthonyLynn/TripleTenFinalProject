import { useForm } from "../../hooks/useForm.js";

import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm();

  const onSubmit = (evt) => {
    evt.preventDefault();
    onSearch(values);
    resetForm();
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="text"
        className="search__text-input"
        placeholder="Enter topic"
        name="searchTerm"
        onChange={handleChange}
        value={values.searchTerm || ""}
        required
      />
      <button className={`search__btn ${isValid && "search__btn_active"}`}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
