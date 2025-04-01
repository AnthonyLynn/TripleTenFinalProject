import logoutIcon from "../../images/Logout_Icon.svg";
import logoutIconLightTheme from "../../images/Logout_Icon_Light_Theme.svg";

import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./Navigation.css";

function Navigation({ currentPage, isLoggedIn, openLoginModal, onLogOut }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <nav
      className={`navigation
      ${currentPage === "saved" && "navigation_type_light-theme"}
    `}
    >
      <div className="navigation__top">
        <Link
          to="/"
          className={`navigation__logo
            ${currentPage === "saved" && "navigation__logo_type_light-theme"}
          `}
        >
          NewsExplorer
        </Link>
        <button type="button" className="navigation__menu-btn" />
      </div>
      <div className="navigation__menu">
        <Link
          to="/"
          type="button"
          className={`navigation__page-link
            ${
              currentPage === "saved" &&
              "navigation__page-link_unselected navigation__page-link_type_light-theme"
            }
          `}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            to="/saved-news"
            type="button"
            className={`navigation__page-link
              ${
                currentPage === "saved"
                  ? "navigation__page-link_type_light-theme"
                  : "navigation__page-link_unselected"
              }
            `}
          >
            Saved articles
          </Link>
        )}
        <button
          type="button"
          className={`navigation__login-btn
            ${
              currentPage === "saved" &&
              "navigation__login-btn_type_light-theme"
            }
            ${isLoggedIn && "navigation__login-btn_type_logged-in"}
          `}
          onClick={isLoggedIn ? onLogOut : openLoginModal}
        >
          {isLoggedIn ? currentUser.username : "Sign in"}
          {isLoggedIn && (
            <img
              src={currentPage === "saved" ? logoutIconLightTheme : logoutIcon}
              alt="logout"
            />
          )}
        </button>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navigation;
