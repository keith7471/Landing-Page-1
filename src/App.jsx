import { useState } from 'react'
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { lazy } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const PricingPlans = lazy(() => import('./components/PricingPlans'));
const TryProducts = lazy(() => import('./components/TryProducts'));
const Footer = lazy(() => import('./components/Footer'));
const FrequentlyAskedQues = lazy(() => import('./components/FrequentlyAskedQues'));

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
      <Suspense fallback={<div className='text-center text-white'>Loading....</div>}>
        <Navbar />
        <HeroSection />

        <TryProducts />

        {/* <Features /> */}
        <PricingPlans />
        <FrequentlyAskedQues />
        <Footer />

      </Suspense>

    </div>
  );
}

export default App;

