import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {year} Supersite, Powered by News API
      </p>
      <div className="footer__link-container">
        <div className="footer__links">
          <a href="" className="footer__link">
            Home
          </a>
          <a href="" className="footer__link">
            TripleTen
          </a>
        </div>
        <div className="footer__link-icons">
          <a href="" className="footer__link-icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
