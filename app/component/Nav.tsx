"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from 'next/image';
import logo from "../../public/cover.png"
import TransitionLink from  "../component/TransitionLink"
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full z-50 bg-white shadow-sm">

<div className="container mx-auto px-4 py-4 flex justify-between items-center">
  {/* Left section with navigation links (hidden on mobile) */}
  <div className="hidden md:flex items-center space-x-8"> {/* Increased spacing for a more airy feel */}
  <div className='hover:bg-blue-300  py-1 px-2 rounded'>
  <TransitionLink href="/" label="Home" />
  </div>
  <div className='hover:bg-blue-300  py-1 px-2 rounded'>
        <TransitionLink href="/projects" label="Projects" />
        </div>
        <div className='hover:bg-blue-300  py-1 px-2 rounded'>
        <TransitionLink href="/about" label="About" />
        </div>
        <div className='hover:bg-blue-300  py-1 px-2 rounded'>
        <Link className='decoration-transparent text-xl text-neutral-900 hover:text-neutral-700 ' href="mailto:arifahmmadsumon@gmail.com?subject=Regarding Your 
Website">
       Contact
        </Link>
        </div>
</div>


  {/* Center section with brand name */}
  <div className={`flex ${isOpen ? 'justify-between' : 'justify-center'}  items-center w-full md:w-auto`}>
    <a href="/" className="text-2xl font-bold w-52 rounded-xl overflow-hidden text-decoration-none text-[#242524] hover:text-[#bb4545] font-serif">  {/* Black text, serif font for elegance */}
      <Image src={logo} alt=''/>  {/* Replace with your logo or brand name */}
    </a>
  </div>

  {/* Right section with social media icons (hidden on mobile) */}
  <div className="hidden md:flex items-center space-x-4 text-gray-800 hover:text-blue-600">  {/* Gray text, hover with blue */}
    <Link href="https://www.linkedin.com/in/arif-ahmmad-sumon-4177bb27b/"><FaLinkedin className="h-6 w-6 transition duration-300 hover:scale-110 hover:text-teal-400" /></Link>  {/* Subtle hover animation and color change */}
    <Link href="https://wa.me/+880 1751-260010" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className="h-6 w-6 transition duration-300 hover:scale-110 hover:text-purple-500" /></Link>
    <Link href="#"><FaTwitter className="h-6 w-6 transition duration-300 hover:scale-110 hover:text-orange-500" /></Link>
    <Link href="https://www.facebook.com/arifahmed.sumon"><FaFacebook className="h-6 w-6 transition duration-300 hover:scale-110 hover:text-green-500" /></Link>
    <Link href="https://github.com/ahmmadSumon"><FaGithub className="h-6 w-6 transition duration-300 hover:scale-110 hover:text-teal-400" /></Link>
  </div>

  {/* Mobile menu toggle button */}
  <div className="md:hidden">
    <button
      className="text-gray-800 focus:outline-none"
      onClick={toggleMenu}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
        />
      </svg>
    </button>
  </div>
</div>

            {/* Mobile menu (when open) */}
            {isOpen && (
                <div className="md:hidden">
                    {/* Brand name in the mobile menu */}
                    <div className={`flex ${isOpen ? 'hidden' : 'justify-center'} items-center w-full md:w-auto`}>
    <a href="/" className="text-2xl font-bold">
        {`<Arif_Ahmmad />`}
    </a>
</div>
                    {/* Navigation links in the mobile menu */}
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/" className="block text-black px-3 decoration-transparent py-2 rounded-md hover:bg-gray-200">
                            Home
                        </Link>
                        <Link href="/projects" className="block text-black 
px-3 decoration-transparent py-2 rounded-md 
hover:bg-gray-200">
     Projects
 </Link>
                        <Link href="/about" className="block text-black px-3 decoration-transparent py-2 rounded-md hover:bg-gray-200">
                            About
                        </Link>
                       
                       
                       
                        <Link href="mailto:arifahmmadsumon@gmail.com?subject=Regarding Your Website" className="block text-black px-3 decoration-transparent py-2 rounded-md hover:bg-gray-200">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Nav;
