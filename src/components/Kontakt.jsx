"use client"

import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import PostEmail from "../api"


export default function ContactPage() {
  const navigate = useNavigate()
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await PostEmail(formData);
      // Überprüfen, ob die Antwort die Nachricht enthält
      if (response.message === "E-Mail erfolgreich gesendet!") {
        setStatus("E-Mail erfolgreich gesendet!");
      } else {
        setStatus("Fehler beim Senden der E-Mail.");
      }
    } catch (error) {
      setStatus("Fehler beim Senden der Anfrage.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="page-container">
     <nav
        className={`bg-[#1a1a1a] text-white py-3 px-6 flex justify-between items-center text-sm ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        {/* Logo */}
        <div className="text-base font-bold">Web-Master</div>

        {/* Hamburger Menu für Mobile */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links für Desktop */}
        <ul className="desktop-nav-links"  style={{marginLeft:'80px'}}>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => navigate("/")}>
            Startseite
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => navigate("/about")}>
            Über uns
          </li>
         
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => navigate("/contact")}>
            Kontakt
          </li>
        </ul>

        {/* Such-Icon */}
        <div className="cursor-pointer search-icon">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/circled-w.png"
            alt="search"
            style={{ width: "24px", height: "24px", float: "right" }}
          />
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div className={`mobile-sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="text-base font-bold">Web-Master</div>
          <div className="close-button" onClick={toggleMobileMenu}>
            ×
          </div>
        </div>
        <ul className="sidebar-links">
          <li
            onClick={() => {
              navigate("/")
              setMobileMenuOpen(false)
            }}
          >
            Startseite
          </li>
          <li
            onClick={() => {
              navigate("/about")
              setMobileMenuOpen(false)
            }}
          >
            Über uns
          </li>
         
          <li
            onClick={() => {
              navigate("/contact")
              setMobileMenuOpen(false)
            }}
          >
            Kontakt
          </li>
        </ul>
      </div>

      {/* Overlay für Mobile Sidebar */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}




      {/* Main Content */}
      <main className="main-content">
        <div className="contact-header">
          <h1>Kontaktieren Sie uns</h1>
          <p>
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Füllen Sie das Formular aus und wir melden uns bei
            Ihnen.
          </p>
        </div>

        {/* Status Message */}
        {status && <div className="status-message">{status}</div>}

        {/* Contact Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sender_name">Name</label>
                <input
                  type="text"
                  id="sender_name"
                  name="sender_name"
                  value={formData.sender_name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sender_email">E-Mail</label>
                <input
                  type="email"
                  id="sender_email"
                  name="sender_email"
                  value={formData.sender_email}
                  onChange={handleChange}
                  placeholder="ihre-email@beispiel.de"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Betreff</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Worum geht es?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Nachricht</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ihre Nachricht an uns..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
            </div>
            <h3>Telefon</h3>
            <p>+49 123 456 789</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>E-Mail</h3>
            <p>info@web-master.de</p>
          </div>

          <div className="info-card">
  <div className="info-icon">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </div>
  <h3>Social-Media</h3>
  <p>webmaster4821</p>
</div>
        </div>

        {/* Placeholder for sections that can be scrolled to */}
        <div ref={section2Ref} id="leistungen" style={{ height: "1px" }}></div>
        <div ref={section3Ref} id="projekte" style={{ height: "1px" }}></div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Web-Master. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  )
}

