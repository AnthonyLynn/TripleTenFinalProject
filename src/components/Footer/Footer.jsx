import "./Footer.css";
import { Link, Outlet } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {year} Supersite, Powered by News API
      </p>
      <div className="footer__link-container">
        <div className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            className="footer__link"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__link-icons">
          <a
            href="https://github.com/AnthonyLynn"
            target="_blank"
            className="footer__link-icon"
          />
        </div>
      </div>
      <Outlet />
    </footer>
  );
}

export default Footer;
