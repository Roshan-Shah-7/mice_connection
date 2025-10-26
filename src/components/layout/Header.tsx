import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube, FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { navLinksLeft, navLinksRight, servicesLinks, type NavLink as NavLinkType, type ServiceLink as ServiceLinkType } from '../../constants';
import { useClickOutside } from '../../hooks/useClickOutside';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; className?: string }> = ({ to, children, onClick, className }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`relative text-gray-700 transition-colors hover:text-[#0c3b32] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#0c3b32] after:transition-all after:duration-300 hover:after:w-full ${className || ''}`}
  >
  {children}
  </Link>
);

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; className?: string }> = ({ to, children, onClick, className }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block w-full py-3 text-center text-lg text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#0c3b32] ${className || ''}`}
  >
    {children}
  </Link>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHighlightsOpen, setIsHighlightsOpen] = useState(false); // New state for Highlights dropdown
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileHighlightsOpen, setIsMobileHighlightsOpen] = useState(false); // New state for Mobile Highlights dropdown

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(servicesDropdownRef, () => setIsServicesOpen(false));

  const highlightsDropdownRef = useRef<HTMLDivElement>(null); // New ref for Highlights dropdown
  useClickOutside(highlightsDropdownRef, () => setIsHighlightsOpen(false));

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const socialLinks = [
    { href: "https://www.instagram.com/themiceconnectionnepal?igsh=anoyb3ZwN3RqOGly", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.facebook.com/themiceconnection/", icon: FaFacebook, label: "Facebook" },
    { href: "https://www.tiktok.com/@the_mice_connection", icon: FaTiktok, label: "TikTok" },
    { href: "https://www.linkedin.com/company/the-mice-connection/?viewAsMember=true", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.youtube.com/@themiceconnectionnepal", icon: FaYoutube, label: "Youtube" },
  ];

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeIn" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const mobileSubmenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Top bar - visible on medium screens and larger */}
      <div className="border-b border-gray-200 hidden md:block">
        <div className="max-w-[1540px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4 md:px-6 py-2 text-sm text-gray-600">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <span className="font-medium sr-only">Follow Us:</span>
            <div className="flex gap-3 text-lg" aria-label="Social media links">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Follow us on ${label}`}
                  className="text-gray-500 hover:text-[#0e332e] transition-transform hover:scale-110 duration-300 focus:outline-none focus:ring-2 focus:ring-[#0c3b32] focus:rounded"
                >
                  <Icon focusable="false" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href="/brocher.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button 
                className="w-full bg-gray-100 text-black cursor-pointer px-4 py-2 rounded-full font-semibold text-xs tracking-wide uppercase hover:bg-[#0e332e] hover:text-white transition-all hover:scale-105 duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0c3b32]"
              >
                Brochure
              </button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <button 
                className="w-full bg-[#0e332e] cursor-pointer text-white px-4 py-2 rounded-full font-semibold text-xs tracking-wide uppercase hover:bg-[#145f4a] transition-all hover:scale-105 duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-[1540px] mx-auto flex items-center justify-between px-4 md:px-6 py-3" aria-label="Main navigation">
        {/* Left nav - visible on medium screens and larger */}
        <ul className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8 font-medium text-base">
          {navLinksLeft.map((link: NavLinkType) => (
            <li key={link.label} className="relative">
              {link.hasDropdown && link.label === "Our Services" ? (
                <div
                  className="relative flex items-center gap-1.5 text-gray-700 transition-colors hover:text-[#0c3b32] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#0c3b32] after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-[#0c3b32] focus:rounded"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  onFocus={() => setIsServicesOpen(true)}
                  onBlur={() => setIsServicesOpen(false)}
                  ref={servicesDropdownRef}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsServicesOpen(!isServicesOpen);
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  <span>{link.label}</span>
                  <motion.div animate={{ rotate: isServicesOpen ? 180 : 0 }}>
                    <FaChevronDown className="text-xs" aria-hidden="true" />
                  </motion.div>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-3 w-56 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 z-50"
                        role="menu"
                        aria-label="Services menu"
                      >
                        <div className="py-2">
                          {servicesLinks.map((service: ServiceLinkType) => (
                            <li key={service.label} role="menuitem">
                              <Link 
                                to={service.href} 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f7f5] hover:text-[#0c3b32] transition-colors duration-200 focus:outline-none focus:bg-[#f0f7f5] focus:text-[#0c3b32]"
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.hasDropdown && link.label === "Highlights" ? ( // New dropdown for Highlights
                <div
                  className="relative flex items-center gap-1.5 text-gray-700 transition-colors hover:text-[#0c3b32] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#0c3b32] after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-[#0c3b32] focus:rounded"
                  onMouseEnter={() => setIsHighlightsOpen(true)}
                  onMouseLeave={() => setIsHighlightsOpen(false)}
                  onFocus={() => setIsHighlightsOpen(true)}
                  onBlur={() => setIsHighlightsOpen(false)}
                  ref={highlightsDropdownRef}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsHighlightsOpen(!isHighlightsOpen);
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={isHighlightsOpen}
                >
                  <span>{link.label}</span>
                  <motion.div animate={{ rotate: isHighlightsOpen ? 180 : 0 }}>
                    <FaChevronDown className="text-xs" aria-hidden="true" />
                  </motion.div>
                  <AnimatePresence>
                    {isHighlightsOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-3 w-56 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 z-50"
                        role="menu"
                        aria-label="Highlights menu"
                      >
                        <div className="py-2">
                          {link.subLinks?.map((subLink: NavLinkType) => (
                            <li key={subLink.label} role="menuitem">
                              <Link 
                                to={subLink.href} 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f7f5] hover:text-[#0c3b32] transition-colors duration-200 focus:outline-none focus:bg-[#f0f7f5] focus:text-[#0c3b32]"
                              >
                                {subLink.label}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink to={link.href} className="focus:outline-none focus:ring-2 focus:ring-[#0c3b32] focus:rounded">{link.label}</NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Logo - centered on mobile and properly sized on all devices */}
        <Link to="/" className="flex-shrink-0" aria-label="The MICE Connection Home">
          <img
            src="/logo.webp"
            alt="The MICE Connection"
            className="object-contain h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20"
          />
        </Link>

        {/* Right nav - visible on medium screens and larger */}
        <ul className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8 font-medium text-base">
          {navLinksRight.map((link: NavLinkType) => (
            <li key={link.label}>
              <NavLink to={link.href} className="focus:outline-none focus:ring-2 focus:ring-[#0c3b32] focus:rounded">{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl z-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0c3b32] focus:rounded"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden w-full bg-white shadow-lg overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex items-center justify-center py-3 border-b border-gray-200">
              <div className="flex gap-4 text-xl" aria-label="Social media links">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a 
                    key={label} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`Follow us on ${label}`}
                    className="text-gray-500 hover:text-[#0e332e] transition-transform hover:scale-110 duration-300 focus:outline-none focus:ring-2 focus:ring-[#0c3b32] focus:rounded"
                  >
                    <Icon focusable="false" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            {[...navLinksLeft, ...navLinksRight].map((link: NavLinkType) => (
              <div key={link.label} className="w-full border-b border-gray-200 last:border-b-0">
                {link.hasDropdown && link.label === "Our Services" ? (
                  <div>
                    <button
                      className="w-full flex justify-center items-center gap-2 py-3 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0c3b32]"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      aria-expanded={isMobileServicesOpen}
                      aria-controls="services-submenu"
                    >
                      <span>{link.label}</span>
                      <motion.div animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}>
                        <FaChevronDown className="text-sm" aria-hidden="true" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          variants={mobileSubmenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden bg-gray-50"
                          id="services-submenu"
                          role="menu"
                          aria-label="Services submenu"
                        >
                          {servicesLinks.map((service: ServiceLinkType) => (
                            <li key={service.label} role="menuitem">
                              <MobileNavLink 
                                to={service.href} 
                                onClick={closeMobileMenu}
                                className="focus:outline-none focus:bg-[#f0f7f5] focus:text-[#0c3b32]"
                              >
                                <span className="text-base font-normal">{service.label}</span>
                              </MobileNavLink>
                            </li>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.hasDropdown && link.label === "Highlights" ? ( // New mobile dropdown for Highlights
                  <div>
                    <button
                      className="w-full flex justify-center items-center gap-2 py-3 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0c3b32]"
                      onClick={() => setIsMobileHighlightsOpen(!isMobileHighlightsOpen)}
                      aria-expanded={isMobileHighlightsOpen}
                      aria-controls="highlights-submenu"
                    >
                      <span>{link.label}</span>
                      <motion.div animate={{ rotate: isMobileHighlightsOpen ? 180 : 0 }}>
                        <FaChevronDown className="text-sm" aria-hidden="true" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isMobileHighlightsOpen && (
                        <motion.div
                          variants={mobileSubmenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden bg-gray-50"
                          id="highlights-submenu"
                          role="menu"
                          aria-label="Highlights submenu"
                        >
                          {link.subLinks?.map((subLink: NavLinkType) => (
                            <li key={subLink.label} role="menuitem">
                              <MobileNavLink 
                                to={subLink.href} 
                                onClick={closeMobileMenu}
                                className="focus:outline-none focus:bg-[#f0f7f5] focus:text-[#0c3b32]"
                              >
                                <span className="text-base font-normal">{subLink.label}</span>
                              </MobileNavLink>
                            </li>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <li role="menuitem">
                    <MobileNavLink 
                      to={link.href} 
                      onClick={closeMobileMenu}
                      className="focus:outline-none focus:bg-[#f0f7f5] focus:text-[#0c3b32]"
                    >
                      {link.label}
                    </MobileNavLink>
                  </li>
                )}
              </div>
            ))}
            <div className="w-full border-b border-gray-200 last:border-b-0 flex flex-col gap-3 p-4">
              <a href="/brocher.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-gray-100 text-black cursor-pointer px-4 py-3 rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-[#0e332e] hover:text-white transition-all hover:scale-105 duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0c3b32]">
                  Brochure
                </button>
              </a>
              <Link to="/contact" className="w-full">
                <button className="w-full bg-[#0e332e] cursor-pointer text-white px-4 py-3 rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-[#145f4a] transition-all hover:scale-105 duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
