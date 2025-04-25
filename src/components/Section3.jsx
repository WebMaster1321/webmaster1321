"use client"

import { useEffect, useRef } from "react"

export default function PortfolioScrollAlt() {
  const projects = [
    {
      id: 1,
      title: "Café",
      description: "Café",
      image: "/webmaster1321/cafe.png",
      accent: "green",
    },
    {
      id: 2,
      title: "Digitale-Kunst",
      description: "Digitale-Kunst",
      image: "/webmaster1321/landing.png",
      accent: "red",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Kreative Arbeiten",
      image: "/webmaster1321/miami1.png",
      accent: "green",
    },
  ]

  // Refs für die Beobachtung der Elemente
  const sectionRef = useRef(null)
  const phoneRefs = useRef([])

  useEffect(() => {
    // Intersection Observer für die Sektion
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current.classList.add("in-view")
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    // Intersection Observer für die einzelnen Telefone
    const phoneObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            phoneObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    phoneRefs.current.forEach((phone) => {
      if (phone) phoneObserver.observe(phone)
    })

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current)
      }

      phoneRefs.current.forEach((phone) => {
        if (phone) phoneObserver.unobserve(phone)
      })
    }
  }, [])

  return (
    <div className="portfolio-showcase" ref={sectionRef}>
      <div className="portfolio-header">
      
        <h1>Portfolio</h1>
        <div className="header-line"></div>
      </div>

      <div className="devices-row">
        {projects.map((project, index) => (
          <div key={project.id} className="device-column" ref={(el) => (phoneRefs.current[index] = el)}>
            <div className="device-card">
              <div className="device-outline">
                <div className="device-screen">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                </div>
                <div className={`device-accent ${project.accent}`}></div>
              </div>
            </div>

            <div className="device-info">
              <div className="device-number">{String(project.id).padStart(2, "0")}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

