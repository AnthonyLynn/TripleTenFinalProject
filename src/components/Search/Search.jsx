import "./Search.css";

function Search() {
  return (
    <header className="search">
      <div className="search__tint"></div>
      <h1 className="search__header">What's going on in the world?</h1>
      <p className="search__instructions">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search__bar">
        <input
          type="text"
          className="search__text-input"
          placeholder="Enter topic"
        />
        <button className="search__btn">Search</button>
      </div>
    </header>
  );
}

export default Search;
