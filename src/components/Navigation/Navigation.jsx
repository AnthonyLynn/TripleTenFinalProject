import "./Navigation.css";
import { Link, Outlet } from "react-router-dom";

function Navigation({ isLoggedIn, openLoginModal }) {
  return (
    <nav className="navigation">
      <div className="navigation__top">
        <Link to="/" className="navigation__logo">
          NewsExplorer
        </Link>
        <button type="button" className="navigation__menu-btn" />
      </div>
      <div className="navigation__menu">
        <Link to="/" type="button" className="navigation__page-link">
          Home
        </Link>
        {isLoggedIn && (
          <Link
            to="/saved-news"
            type="button"
            className="navigation__page-link"
          >
            Saved articles
          </Link>
        )}
        <button
          type="button"
          className="navigation__login-btn"
          onClick={openLoginModal}
        >
          Sign in
        </button>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navigation;
