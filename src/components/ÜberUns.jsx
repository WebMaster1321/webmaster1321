"use client"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AboutPage() {
 
  return (
    <div className="about-container">
      
       
   

     




<div className="main-container" style={{paddingTop:'70px'}}>

      <div className="about-header">
        <div className="about-title-container">
        
          <h1 className="about-title">Über Uns</h1>
          <div className="title-line"></div>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-intro">
          <div className="intro-content">
            <h2>Web Master</h2>
            <p className="intro-text">
              Als leidenschaftlicher Webdesigner und Entwickler bieten wir maßgeschneiderte Websites für Ihr
              Unternehmen. Mit einem Fokus auf minimalistisches Design und benutzerfreundliche Funktionalität erschaffen
              wir Websites, die nicht nur gut aussehen, sondern auch Ergebnisse liefern.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                 {/*<span className="stat-number">100%</span>*/}
                 {/*<span className="stat-label">Kundenzufriedenheit</span>*/}
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Leidenschaft</span>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <div className="image-container">
              <div className="image-placeholder"><img src="/webmaster1321/webmaster.jpg" alt="webmaster" /></div>
              <div className="image-accent green"></div>
            </div>
          </div>
        </div>

       

        <div className="about-pricing">
          <div className="pricing-content">
            <h2>Individuelle Preisgestaltung</h2>
            <p>
              Bei Web Master verstehen wir, dass jedes Projekt einzigartig ist. Unsere Preise sind Richtwerte und können
              je nach Ihren spezifischen Anforderungen variieren.
            </p>

            <div className="pricing-factors">
              <div className="factor">
                <div className="factor-icon">
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
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="factor-text">
                  <h4>Komplexität</h4>
                  <p>Anzahl der Seiten, spezielle Funktionen und technische Anforderungen</p>
                </div>
              </div>

              <div className="factor">
                <div className="factor-icon">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="factor-text">
                  <h4>Zeitrahmen</h4>
                  <p>Dringlichkeit und gewünschter Fertigstellungstermin</p>
                </div>
              </div>

              <div className="factor">
                <div className="factor-icon">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="factor-text">
                  <h4>Support</h4>
                  <p>Umfang der gewünschten Wartung und Betreuung nach Launch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-image">
            <div className="image-container">
              <div className="image-placeholder"><img src="/webmaster1321/preis.jpg" alt="preis" /></div>
              <div className="image-accent red"></div>
            </div>
          </div>
        </div>

        <div className="about-process">
          <h2>Unser Arbeitsprozess</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Gespräch</h3>
              <p>Wir beginnen mit einem ausführlichen Chat oder Telefonat, um Ihre Ziele und Anforderungen zu verstehen.</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Konzeption</h3>
              <p>Wir entwicklen ein maßgeschneidertes Konzept und erstelle Wireframes für Ihr Projekt.</p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Design</h3>
              <p>Wir erstellen ein visuell ansprechendes Layout, das Ihre Marke perfekt repräsentiert.</p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Entwicklung</h3>
              <p>
                Wir setzen das Design in funktionalen, responsiven Code um und integriere alle gewünschten Funktionen.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">05</div>
              <h3>Launch</h3>
              <p>
                Nach gründlichen Tests veröffentlichen wir Ihre Website und stellen sicher, dass alles reibungslos läuft.
              </p>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <div className="cta-content">
            <h2>Bereit für Ihre maßgeschneiderte Website?</h2>
            <p>
              Kontaktieren Sie uns ganz einfach per Chat oder E-Mail mit Ihren spezifischen Wünschen. Wir antworten
              schnell und erstellen Ihnen ein individuelles Angebot, das perfekt zu Ihrem Projekt passt.
            </p>
            <div className="cta-buttons">
              <a  className="cta-button email"   onClick={() => navigate("/kontact")}>
                Kontaktieren
              </a>
            </div>
          </div>
          <div className="cta-accent"></div>
        </div>
      </div>
      </div>
    </div>
  )
}

