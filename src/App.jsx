import { Routes, Route } from 'react-router-dom';  // Kein BrowserRouter mehr nötig
import reactLogo from './assets/react.svg';

import Home from './components/Home.jsx';
import AboutPage from './components/ÜberUns.jsx';
import Footer from './components/footer.jsx';
import './App.css';

import './CSS-Folders/footer.css';
import './CSS-Folders/Über-uns.css';
import './CSS-Folders/section2.css';
import './CSS-Folders/section3.css';
import './CSS-Folders/kontakt.css';
import './CSS-Folders/navbar.css';
import './CSS-Folders/home.css';
import './CSS-Folders/impressum.css';
import './CSS-Folders/datenschutz.css';
import ContactPage from './components/Kontakt.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Impressum from './components/impressum.jsx';
import Datenschutz from './components/Datenschutz.jsx';

import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar/>
     
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/überuns" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/impressum" element={<Impressum />} /> {/* 👈 HIER */}
        <Route path="/datenschutz" element={<Datenschutz />} /> {/* 👈 HIER */}
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
