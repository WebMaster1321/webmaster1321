import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-box">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-brand">@WebMaster</h2>
          <div className="footer-contact">
            <p className="contact-label">Kontakt:</p>
            <a  className="contact-email">
              webmasterstudio71@gmail.com
            </a>
          </div>
          <div className="footer-links">
            <Link to="/impressum" className="footer-link">
              Impressum
            </Link>
            <Link to="/datenschutz" className="footer-link">
              Datenschutz
            </Link>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-nav">
            <Link to="/überuns" className="nav-link">
              ÜBER UNS
            </Link>
            <Link to="/kontakt" className="nav-link">
              KONTAKT
            </Link>
          </nav>
          <div className="social-icons">
           
            <a
              href="https://www.instagram.com/webmaster4821"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              {/* Instagram SVG direkt eingebunden */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-7.94 1.14 4 4 0 0 1 7.94-1.14z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
