"use client"

import { useState, useEffect, useRef } from "react"


export default function Section2() {
  const [activeService, setActiveService] = useState(null)
  const [activeInfoTab, setActiveInfoTab] = useState(null)
  const sectionRef = useRef(null)

  const services = [
    {
      id: "landing",
      title: "Landing Page",
      price: "€800",
      tagline: "Perfekt für Produkt-Launches",
      description:
        "Eine Landing Page ist eine speziell gestaltete Seite, die darauf abzielt, Besucher zu einer bestimmten Aktion zu bewegen, z. B. ein Produkt zu kaufen oder sich für einen Newsletter anzumelden.",
    },
    {
      id: "business",
      title: "Business Website",
      price: "€1000",
      tagline: "Komplette Online-Präsenz",
      description:
        "Eine Business-Website stellt dein Unternehmen online dar und bietet umfassende Informationen zu deinen Dienstleistungen, deinem Team und deinen Kontaktmöglichkeiten.",
    },
    {
      id: "portfolio",
      title: "Portfolio",
      price: "€900",
      tagline: "Präsentiere deine Arbeiten",
      description:
        "Eine Portfolio-Website zeigt deine Arbeiten und Projekte in einem ansprechenden Design. Perfekt für Designer, Fotografen oder Künstler.",
    },
  ]

  // Scroll-Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Schließt die Info-Box, wenn außerhalb geklickt wird
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeService && !event.target.closest(".service-card") && !event.target.closest(".service-info-box")) {
        setActiveService(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [activeService])

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id)
  }

  const toggleInfoTab = (id) => {
    setActiveInfoTab(activeInfoTab === id ? null : id)
  }

  return (
    <div className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <h1>Signature Services.</h1>
          <div className="divider"></div>
        </div>

        <div className="services-layout">
          {/* Linke Spalte - Service-Übersicht */}
          <div className="services-overview">
            <h2>Entwicklung von</h2>
            <ul className="services-list">
              <li>✓ Landing Pages</li>
              <li>✓ Business Websites</li>
              <li>✓ Portfolio Seiten</li>
            </ul>
          </div>

          {/* Mittlere Spalte - Service-Karten */}
          <div className="services-cards">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${activeService === service.id ? "active" : ""}`}
                onClick={() => toggleService(service.id)}
              >
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p className="price">{service.price}</p>
                  <p className="tagline">{service.tagline}</p>
                  <div className="plus-icon">+</div>
                </div>

                {activeService === service.id && (
                  <div className="service-info-box">
                    <p>{service.description}</p>
                    <button
                      className="close-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveService(null)
                      }}
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Rechte Spalte - Info-Karte mit Tabs */}
          <div className="info-card">
            <div className="info-card-header">
              <h3>Service Details</h3>
            </div>

            <div className="info-tabs">
              <div
                className={`info-tab ${activeInfoTab === "landing" ? "active" : ""}`}
                onClick={() => toggleInfoTab("landing")}
              >
                <span className="tab-plus">+</span>
                <span className="tab-label">Landing</span>
              </div>

              <div
                className={`info-tab ${activeInfoTab === "portfolio" ? "active" : ""}`}
                onClick={() => toggleInfoTab("portfolio")}
              >
                <span className="tab-plus">+</span>
                <span className="tab-label">Portfolio</span>
              </div>

              <div
                className={`info-tab ${activeInfoTab === "business" ? "active" : ""}`}
                onClick={() => toggleInfoTab("business")}
              >
                <span className="tab-plus">+</span>
                <span className="tab-label">Business</span>
              </div>
            </div>

            <div className="info-content">
              {activeInfoTab === "landing" && (
                <div className="info-panel">
                  <h4>Landing Page</h4>
                  <p>{services[0].description}</p>
                  <ul className="feature-list">
                    <li>Optimiert für Conversions</li>
                    <li>Call-to-Action Elemente</li>
                    <li>Responsive Design</li>
                    <li>SEO-optimiert</li>
                  </ul>
                </div>
              )}

              {activeInfoTab === "portfolio" && (
                <div className="info-panel">
                  <h4>Portfolio</h4>
                  <p>{services[2].description}</p>
                  <ul className="feature-list">
                    <li>Projekt-Galerie</li>
                    <li>Filterfunktionen</li>
                    <li>Detailansichten</li>
                    <li>Kontaktmöglichkeiten</li>
                  </ul>
                </div>
              )}

              {activeInfoTab === "business" && (
                <div className="info-panel">
                  <h4>Business Website</h4>
                  <p>{services[1].description}</p>
                  <ul className="feature-list">
                    <li>Unternehmensdarstellung</li>
                    <li>Team-Vorstellung</li>
                    <li>Dienstleistungsübersicht</li>
                    <li>Kontaktformular</li>
                  </ul>
                </div>
              )}

              {!activeInfoTab && (
                <div className="info-placeholder">
                  <p>Klicke auf ein + für mehr Informationen</p>
                  <div className="graphic-element-small">
                    <div className="square-small"></div>
                    <div className="square-grid-small"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
