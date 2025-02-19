import { useState } from 'react'
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { lazy } from 'react';
import { ClipLoader } from 'react-spinners';


const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const PricingPlans = lazy(() => import('./components/PricingPlans'));
const TryProducts = lazy(() => import('./components/TryProducts'));
const Footer = lazy(() => import('./components/Footer'));
const FrequentlyAskedQues = lazy(() => import('./components/FrequentlyAskedQues'));

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <ClipLoader size={50} color="white" />
    </div>
  );
};

function App() {
  return (
    <div className="relative ">
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
      <Suspense fallback={<LoadingScreen />}>
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

