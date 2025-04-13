import React, { useState, useEffect } from "react";



export default function Section2(){
  const [selected, setSelected] = useState(null);


  const descriptions = {
    landing: "Eine Landing Page ist eine speziell gestaltete Seite, die darauf abzielt, Besucher zu einer bestimmten Aktion zu bewegen, z. B. ein Produkt zu kaufen oder sich für einen Newsletter anzumelden.",
    business: "Eine Business-Website stellt dein Unternehmen online dar und bietet umfassende Informationen zu deinen Dienstleistungen, deinem Team und deinen Kontaktmöglichkeiten.",
    portfolio: "Eine Portfolio-Website zeigt deine Arbeiten und Projekte in einem ansprechenden Design. Perfekt für Designer, Fotografen oder Künstler.",
};

  // Schließt die Box, wenn man außerhalb klickt
  useEffect(() => {
    const handleClickOutside = (event) => {
        if (selected && !event.target.closest(".description-box") && !event.target.closest(".info-button")) {
            setSelected(null);
        }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
}, [selected]);

    return(
  


      <div className="services-page">
            <div className="container">
                <div className="header">
                    <h1>Signature Services.</h1>
                    <div className="divider"></div>
                </div>

                <div className="services-grid">
                    {/* Service 1 */}
                    <div className="service-item">
                        <div className="service-card">
                            <div className="service-content">
                                <span>LANDING</span>
                            </div>
                            <div className="accent green-accent bottom-left"></div>
                        </div>
                        <h3>Landing Page</h3>
                        <p>€1299</p>
                        <p>Perfekt für Produkt-Launches</p>
                        <button className="info-button" onClick={(e) => { e.stopPropagation(); setSelected("landing"); }}>ℹ️</button>
                    </div>

                    {/* Service 2 */}
                    <div className="service-item">
                        <div className="service-card">
                            <div className="service-content">
                                <span>BUSINESS</span>
                            </div>
                            <div className="accent red-accent bottom-left"></div>
                        </div>
                        <h3>Business Website</h3>
                        <p>€2499</p>
                        <p>Komplette Online-Präsenz</p>
                        <button className="info-button" onClick={(e) => { e.stopPropagation(); setSelected("business"); }}>ℹ️</button>
                    </div>

                    {/* Service 3 */}
                    <div className="service-item">
                        <div className="service-card">
                            <div className="service-content">
                                <span>PORTFOLIO</span>
                            </div>
                            <div className="accent green-accent top-right"></div>
                            <div className="accent red-accent bottom-left"></div>
                        </div>
                        <h3>Portfolio</h3>
                        <p>€1899</p>
                        <p>Präsentiere deine Arbeiten</p>
                        <button className="info-button" onClick={(e) => { e.stopPropagation(); setSelected("portfolio"); }}>ℹ️</button>
                    </div>
                </div>

                {/* Beschreibung erscheint als Overlay */}
                {selected && (
                    <div className="description-box">
                        <p>{descriptions[selected]}</p>
                    </div>
                )}
            </div>
        </div>
        
        
        
        
        
        
        
        
        
        

    )
}