import "./Header.css";

import SearchForm from "../SearchForm/SearchForm";

function Header({ onSearch }) {
  return (
    <header className="header">
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__instructions">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
