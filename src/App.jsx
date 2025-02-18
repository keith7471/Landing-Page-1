import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { motion } from 'framer-motion';
import PricingPlans from './components/PricingPlans';
import TryProducts from './components/TryProducts';
import Footer from './components/Footer';
import FrequentlyAskedQues from './components/FrequentlyAskedQues';


function App() {
  return (
    <div className="relative pt-16">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="https://cdn.dribbble.com/users/32512/screenshots/14887210/media/2fbfa27c436be05c378aee863d251110.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <Navbar />
      <HeroSection />

      <TryProducts />
      
      {/* <Features /> */}
      <PricingPlans />
      <FrequentlyAskedQues />
      <Footer />

    </div>
  );
}

export default App;

