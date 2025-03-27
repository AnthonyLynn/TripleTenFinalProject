import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <a className="header__logo">NewsExplorer</a>
        <button type="button" className="header__menu-btn" />
      </div>
      <div className="header__menu">
        <button type="button" className="header__page-btn">
          Home
        </button>
        <button type="button" className="header__page-btn">
          Saved articles
        </button>
        <button type="button" className="header__log-in-btn">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Header;
