'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isResultsOpen, setIsResultsOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);

     // Scroll listener
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 20) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
     const closeMenu = () => setIsMenuOpen(false);
     const openResults = () => setIsResultsOpen(true);
     const closeResults = () => setIsResultsOpen(false);

     const navLinks = [
          { label: 'Events', href: '#events' },
          { label: 'Schedule', href: '#schedule' },
          { label: 'Previous Summits', href: '#previous-summits' },
          { label: 'Results', href: '#results', action: openResults },
          // { label: 'About', href: '#about' },
     ];

     const handleSmoothScroll = (e, link) => {
          e.preventDefault();
          if (link.action) {
               link.action();
          } else {
               const element = document.querySelector(link.href);
               if (element) element.scrollIntoView({ behavior: 'smooth' });
               closeMenu();
          }
     };

     return (
          <nav
               className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-colors duration-300 ${
                    scrolled ? 'bg-black/95' : 'bg-black/35'
               }`}
          >
               <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="shrink-0">
                         <Link href="/">
                              <div className="w-32 md:w-40 h-auto">
                                   <Image 
                                        src='/logo.png' 
                                        alt='Logo' 
                                        width={150} 
                                        height={100}
                                        priority
                                   />
                              </div>
                         </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
                         <ul className="flex list-none gap-8 m-0 p-0">
                              {navLinks.map((link) => (
                                   <li key={link.label}>
                                        <a
                                             href={link.href}
                                             onClick={(e) => handleSmoothScroll(e, link)}
                                             className="text-gray-100 text-base font-medium hover:text-cyan-400 hover:pb-1 transition-all duration-300 relative group cursor-pointer"
                                        >
                                             {link.label}
                                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                                        </a>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    {/* Desktop Register */}
                    <div className="hidden md:flex ml-auto">
                         <Link href="#events">
                         <button className="bg-linear-to-r from-cyan-500 to-blue-900 text-white px-8 py-3 font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-800 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                              Register Now
                         </button>
                         </Link>
                    </div>

                    {/* Hamburger */}
                    <div
                         className="md:hidden flex flex-col gap-1.5 cursor-pointer"
                         onClick={toggleMenu}
                    >
                         <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 origin-center' : ''}`}></span>
                         <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                         <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 origin-center' : ''}`}></span>
                    </div>
               </div>

               {/* Mobile Menu */}
               {isMenuOpen && (
                    <>
                         <div 
                              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" 
                              onClick={closeMenu}
                         ></div>
                         <div 
                              className="fixed top-20 left-4 right-4 bg-linear-to-b from-slate-950 via-slate-900 to-blue-950/20 rounded-2xl shadow-2xl z-50 border border-cyan-500/20 overflow-hidden"
                         >
                              <div className="p-6">
                                   <ul className="flex flex-col list-none gap-1 m-0 p-0">
                                        {navLinks.map((link) => (
                                             <li key={link.label}>
                                                  <a
                                                       href={link.href}
                                                       onClick={(e) => handleSmoothScroll(e, link)}
                                                       className="text-gray-100 text-base font-medium hover:text-cyan-300 transition-all duration-300 px-4 py-3 block rounded-lg hover:bg-cyan-500/10 border-l-2 border-transparent hover:border-cyan-400"
                                                  >
                                                       {link.label}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                                   <div className="mt-6 pt-6 border-t border-white/10">
                                        <Link href="#events">
                                        <button
                                             className="w-full bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                                             onClick={closeMenu}
                                        >
                                             Register Now
                                        </button>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </>
               )}

               {/* Results Modal */}
               {isResultsOpen && (
                    <>
                         <div
                              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                              onClick={closeResults}
                         ></div>
                         <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-1/3 bg-linear-to-br from-slate-800 to-blue-900 rounded-2xl shadow-2xl z-60 border border-cyan-500 p-6">
                              <h2 className="text-2xl font-bold text-white mb-4 text-center">Results</h2>
                              <p className="text-gray-200 mb-6 text-center">
                                   The results are not published yet. Please check back later.
                              </p>
                              <div className="flex justify-center">
                                   <button
                                        onClick={closeResults}
                                        className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                                   >
                                        Close
                                   </button>
                              </div>
                         </div>
                    </>
               )}
          </nav>
     );
}
