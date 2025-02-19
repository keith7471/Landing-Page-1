import React from "react";
import { BRAND_LOGOS, HERO_CONTENT } from "./../constants/index";
import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* Badge Text */}
        <motion.div
          className="mt-20 text-white"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {HERO_CONTENT.badgeText}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-semibold text-white text-center text-4xl mt-15"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          {HERO_CONTENT.mainHeading.split("\n").map((value, index) => (
            <span key={index} className="block">
              {value}
            </span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-5 text-center px-25 text-sm text-white"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          {HERO_CONTENT.subHeading}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-between items-center gap-3"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <button className="mt-5 bg-orange-500 text-white font-semibold px-3 py-2 cursor-pointer rounded-full">
            Get Started
          </button>

          <button className="mt-5 border-2 border-orange-500 text-orange-500 font-semibold px-2 py-2 cursor-pointer bg-transparent hover:bg-orange-500 hover:text-white rounded-full">
            Try Demo
          </button>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          className="py-10 mt-35"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: false }}
        >
          <p className="text-white text-center text-sm">
            {HERO_CONTENT.trustedByText}
          </p>

          {/* Brand Logos - Continuous Scroll */}
          <div className=" overflow-hidden mt-8">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 25, // Adjust for speed
                ease: "linear",
              }}
            >
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, index) => (
                <img key={index} src={logo.src} className="h-6" alt="brand logo" />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="mt-20 px-30"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: false }}
        >
          <img src={'https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?semt=ais_hybrid'} alt="Hero" className="w-screen h-150 rounded-3xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
