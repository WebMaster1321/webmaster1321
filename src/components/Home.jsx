"use client"

import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Section3 from "./Section3.jsx"
import Section2 from "./section2"

export default function Home() {
  const section3Ref = useRef(null)
  const section2Ref = useRef(null)
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false) // Schließt das mobile Menü nach dem Klick
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
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
        <ul className="desktop-nav-links">
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => navigate("/")}>
            Startseite
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => navigate("/about")}>
            Über uns
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => scrollToSection(section3Ref)}>
            Projekte
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => scrollToSection(section2Ref)}>
            Leistungen
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
          <li onClick={() => scrollToSection(section3Ref)}>Projekte</li>
          <li onClick={() => scrollToSection(section2Ref)}>Leistungen</li>
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

      {/* Rest deines Home-Inhalts */}
      <div className="full-container">
        <div className="first-half">
          <div className="text-container">
            <h1 className="title">Web-Entwicklung</h1>
            <p className="subtitle">
              Wir sind deine Experten für moderne Web-Entwicklung – individuell, responsiv und zukunftssicher. Ob
              Unternehmensseite, Portfolio oder Web-App: Wir verwandeln Ideen in digitale Realität.
            </p>
          </div>
        </div>

        <div className="second-half">
          <div className="images-container">
            <img src="cafe-orthogonal.png" alt="Cafe Ansicht" className="orthogonal-image" />
            <img src="cafe2.png" alt="Cafe Innenansicht" className="diagonal-image" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div ref={section2Ref}>
        <Section2 />
      </div>

      {/* Section 3 */}
      <div ref={section3Ref}>
        <Section3 />
      </div>
    </>
  )
}
