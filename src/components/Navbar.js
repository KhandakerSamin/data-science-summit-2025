'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     const closeMenu = () => {
          setIsMenuOpen(false);
     };

     const navLinks = [
          { label: 'About', href: '#about' },
          { label: 'Events & Schedule', href: '#events' },
          { label: 'Previous Summits', href: '#previous' },
          { label: 'Results', href: '#results' },
     ];

     const handleSmoothScroll = (e, href) => {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
               closeMenu();
          }
     };

     return (
          <nav className='px-25 py-5 bg-black/35'
          >
               <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="">
                         <Link href="/">
                              <Image src='/logo.svg' alt='Logo' width={150} height={100} />
                         </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                         <ul className="flex list-none gap-8 m-0 p-0">
                              {navLinks.map((link) => (
                                   <li key={link.label}>
                                        <a
                                             href={link.href}
                                             onClick={(e) => handleSmoothScroll(e, link.href)}
                                             className="text-gray-100 text-base font-medium hover:text-cyan-400 transition-all duration-300 relative group cursor-pointer"
                                        >
                                             {link.label}
                                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                                        </a>
                                   </li>
                              ))}
                         </ul>
                    </div>
                    <div>
                         <button className="bg-linear-to-r from-cyan-500 to-blue-900 text-white px-6 py-3 font-semibold rounded-md hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                              Register Now
                         </button>
                    </div>

                    {/* Hamburger Menu */}
                    <div
                         className="md:hidden flex flex-col gap-1.5 cursor-pointer"
                         onClick={toggleMenu}
                    >
                         <span
                              className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                                   }`}
                         ></span>
                         <span
                              className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                                   }`}
                         ></span>
                         <span
                              className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                                   }`}
                         ></span>
                    </div>
               </div>

               {/* Mobile Modal Menu */}
               {isMenuOpen && (
                    <>
                         <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
                         <div className="fixed top-20 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md flex flex-col p-6 gap-6 shadow-lg z-45 border-b border-purple-500 border-opacity-30"
                              style={{
                                   background: "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(59, 130, 246, 0.05) 100%)",
                                   backdropFilter: "blur(10px)"
                              }}
                         >
                              <ul className="flex flex-col list-none gap-6 m-0 p-0">
                                   {navLinks.map((link) => (
                                        <li key={link.label}>
                                             <a
                                                  href={link.href}
                                                  onClick={(e) => handleSmoothScroll(e, link.href)}
                                                  className="text-gray-100 text-lg font-medium hover:text-cyan-400 transition-all duration-300 pb-3 border-b border-white border-opacity-10 block cursor-pointer"
                                             >
                                                  {link.label}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                              <button
                                   className="bg-linear-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 font-semibold rounded-md hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:-translate-y-0.5 w-full"
                                   onClick={closeMenu}
                              >
                                   Register Now
                              </button>
                         </div>
                    </>
               )}
          </nav>
     );
}
