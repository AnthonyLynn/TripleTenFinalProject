import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search">
      <input
        type="text"
        className="search__text-input"
        placeholder="Enter topic"
      />
      <button className="search__btn">Search</button>
    </form>
  );
}

export default SearchForm;
