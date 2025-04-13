import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home.jsx'
import AboutPage from './components/ÜberUns.jsx'
import Footer from './components/footer.jsx'
import './App.css'
import './CSS-Folders/home.css'
import './CSS-Folders/footer.css'
import './CSS-Folders/Über-uns.css'
import './CSS-Folders/section2.css'
import './CSS-Folders/section3.css'
import './CSS-Folders/kontakt.css'
import ContactPage from './components/Kontakt.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App