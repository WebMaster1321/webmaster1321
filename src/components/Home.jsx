



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section3 from './section3';
import Section2 from './section2';

const Home = () => {
  

  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeadingVisible(true), 800);
    setTimeout(() => setSubheadingVisible(true), 1200);
    setTimeout(() => setButtonVisible(true), 1500);
    setTimeout(() => setDashboardVisible(true), 1800);
  }, []);

  return (
    <>
      <div className="alphaledger-page">
        {/* ✅ Schlanke Navbar */}
       

        {/* Hero Section */}
        <div className="hero-section">
         

          <div className="hero-content">
            <h1 className={`main-heading ${headingVisible ? 'heading-visible' : ''}`}>
            Gestalte das Web neu – mit WebMaster.
            </h1>
          
          </div>

          <div className={`dashboard-container ${dashboardVisible ? 'dashboard-visible' : ''}`}>
            <img 
              src="/webmaster1321/canvaremove.png" 
              alt="webmasterstudio " 
              className="landing-image" 
            />
          </div>
        </div>
      </div>

            {/* Section 2 */}
            <div>
       <Section2 />
     </div>

     {/* Section 3 */}
     <div >
       <Section3 />
     </div>
    </>
  );
};

export default Home;


