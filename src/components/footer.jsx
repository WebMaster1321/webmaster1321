"use client"
import { useNavigate } from "react-router-dom"


export default function Footer() {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  // Funktion zum Scrollen zu einer bestimmten Komponente auf der Startseite
  const scrollToSection = (sectionId) => {
    navigate("/")
    // Kurze Verzögerung, um sicherzustellen, dass die Navigation abgeschlossen ist
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <footer className="web-master-footer">
      <div className="footer-pattern"></div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <h2>Web Master</h2>
              <div className="logo-accent"></div>
            </div>
            <p className="footer-tagline">Maßgeschneiderte Websites für Ihr Unternehmen</p>
            <div className="footer-social">
            
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
             
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-column">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a onClick={() => navigate("/")} className="nav-link">
                    Startseite
                  </a>
                </li>
                <li>
                  <a onClick={() => navigate("/about")} className="nav-link">
                    Über Mich
                  </a>
                </li>
               
                <li>
                  <a onClick={() => navigate("/contact")} className="nav-link">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h3>Leistungen</h3>
              <ul>
                <li>
                  <a  className="nav-link">
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a  className="nav-link">
                    Business Websites
                  </a>
                </li>
                <li>
                  <a  className="nav-link">
                    Portfolio Websites
                  </a>
                </li>
                <li>
                  <a  className="nav-link">
                    SEO-Optimierung
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Kontakt</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href="mailto:altunkilicazraarife@gmail.com">altunkilicazraarife@gmail.com</a>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a href="tel:+4915562756544">+49 155 6275 6544</a>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span>Leverkusen, Deutschland</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Web Master. Alle Rechte vorbehalten.</p>
          <div className="footer-legal">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </div>
        </div>
      </div>

      <div className="footer-accent accent-1"></div>
      <div className="footer-accent accent-2"></div>
    </footer>
  )
}

