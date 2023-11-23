import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import FeatureHeroSection from "../components/FeatureHeroSection";
import CardHomePageSection from "../components/CardHomePageSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <FeatureHeroSection />
      <CardHomePageSection />
      <Footer />
    </>
  );
};

export default MainPage;
