import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__top">
        <p className="nav__logo">NewsExplorer</p>
        <button type="button" className="nav__menu-btn" />
      </div>
      <div className="nav__menu">
        <button type="button" className="nav__page-btn">
          Home
        </button>
        <button type="button" className="nav__page-btn">
          Saved articles
        </button>
        <button type="button" className="nav__log-in-btn">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
