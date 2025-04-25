
"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="burger-navbar1">
    {/* Permanent sichtbares Burger-Menü in der linken Ecke */}
    <button 
      className={`burger1 ${isMenuOpen ? 'active' : ''}`} 
      onClick={toggleMenu}
      aria-label="Menü öffnen"
    >
      <span className="bar1"></span>
      <span className="bar1"></span>
      <span className="bar1"></span>
    </button>

    {/* Logo in der Mitte (optional) */}
    <div className="logo1">
      <Link to="/">WebMaster</Link>
    </div>

    {/* Navigation Dropdown */}
    {isMenuOpen && (
      <div className="menu-dropdown1">
        <Link to="/" className="menu-item1" onClick={toggleMenu}>Start</Link>
        <Link to="/überuns" className="menu-item1" onClick={toggleMenu}>Über Uns</Link>
        <Link to="/kontakt" className="menu-item1" onClick={toggleMenu}>Kontakt</Link>
      </div>
    )}
  </nav>
  )
}

export default Navbar
