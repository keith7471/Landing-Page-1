import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { RiMenu3Line, RiCloseFill } from "@remixicon/react";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 m-2 h-16"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1}}
    >
      <div className='text-neutral-500 bg-black/60 mx-auto px-4 py-2 flex justify-between items-center rounded-xl border border-neutral-800'>

        {/* Left side of navbar */}
        <img className='w-25 h-5' src={logo} ></img>

        {/* Center of navbar */}
        <div className='hidden md:flex justify-between gap-9'>
          <motion.a
            // href={`#${item.toLowerCase().replace(/\s/g, '')}`}
            className="hover:text-neutral-200 cursor-pointer"
            // initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Enlarges on hover
          >
            Products
          </motion.a>
          <motion.a
            // href={``}
            className="hover:text-neutral-200 cursor-pointer"
            // initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Enlarges on hover
          >
            Prices
          </motion.a>

          <motion.a
            // href={``}
            className="hover:text-neutral-200 cursor-pointer"
            // initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Enlarges on hover
          >
            Why Streamerzz
          </motion.a>
        </div>

        {/* right side of navbar  */}
        {/* Hidden in small screens */}
        <div className='hidden md:flex justify-between gap-1 items-center'>
          <button className="px-1 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-600 text-sm cursor-pointer transition">
            Login
          </button>
          <button className="px-1 py-1 bg-green-500 text-white rounded hover:bg-green-600 ml-2 transition cursor-pointer text-sm">
            Sign up
          </button>

        </div>

        {/* Hamburger menu for small screens */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-neutral-600/60 rounded-md mt-2'>
          <div className='flex flex-col justify-center items-center gap-2 p-3'>
            <a href='#Products' className='hover:text-neutral-200' >
              Products
            </a>
            <a href='#Pricing' className='hover:text-neutral-200' >
              Pricing
            </a>
            <a href='#Resources' className='hover:text-neutral-200' >
              Resources
            </a>
            <a href='#Partners' className='hover:text-neutral-200' >
              Partners
            </a>

            <button className="px-1 py-1 w-full bg-blue-500 text-white rounded-sm hover:bg-blue-600 text-sm cursor-pointer">
              Login
            </button>
            <button className="px-1 py-1 w-full bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer text-sm">
              Sign up
            </button>
          </div>
        </div>
      )

      }
    </motion.nav>
  )
}

export default Navbar