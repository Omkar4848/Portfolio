import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCardSection from "./sections/FeatureCardSection.jsx";
import Experience from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCardSection />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
