import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./Navigation.css";

function Navigation({ currentPage, isLoggedIn, openLoginModal, onLogOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuBtnClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav
      className={`navigation ${isMenuOpen ? "navigation_type_overlay" : ""}`}
    >
      <div
        className={`navigation__bar
      ${
        isMenuOpen
          ? "navigation__bar_type_dark-theme"
          : currentPage === "saved"
          ? "navigation__bar_type_light-theme"
          : ""
      }`}
      >
        <div className="navigation__top">
          <Link
            to="/"
            className={`navigation__logo
            ${isMenuOpen ? "navigation__logo_type_dark-theme" : ""}
            ${
              currentPage === "saved" ? "navigation__logo_type_light-theme" : ""
            }
          `}
          >
            NewsExplorer
          </Link>
          <button
            type="button"
            className={`navigation__menu-btn
            ${isMenuOpen ? "navigation__menu-btn_type_back" : ""}
            ${
              currentPage === "saved"
                ? "navigation__menu-btn_type_light-theme"
                : ""
            }`}
            onClick={onMenuBtnClick}
          />
        </div>
        <div
          className={`navigation__menu ${
            !isMenuOpen ? "navigation__menu_type_hidden" : ""
          }`}
        >
          <Link
            to="/"
            type="button"
            className={`navigation__page-link
            ${
              currentPage === "saved"
                ? "navigation__page-link_unselected navigation__page-link_type_light-theme"
                : ""
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
              currentPage === "saved"
                ? "navigation__login-btn_type_light-theme"
                : ""
            }
            ${isLoggedIn ? "navigation__login-btn_type_logged-in" : ""}
          `}
            onClick={isLoggedIn ? onLogOut : openLoginModal}
          >
            {isLoggedIn ? currentUser.username : "Sign in"}
            {isLoggedIn && (
              <div
                className={`navigation__logout-btn ${
                  currentPage === "saved"
                    ? "navigation__logout-btn_type_light-theme"
                    : ""
                }`}
              />
            )}
          </button>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navigation;
