import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { navLinksLeft, navLinksRight, servicesLinks } from '../constants';
import { useClickOutside } from '../hooks/useClickOutside';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative text-gray-700 transition-colors hover:text-[#0c3b32] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#0c3b32] after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block w-full py-3 text-center text-lg text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#0c3b32]"
  >
    {children}
  </Link>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(servicesDropdownRef, () => setIsServicesOpen(false));

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const socialLinks = [
    { href: "https://www.instagram.com/themiceconnectionnepal?igsh=anoyb3ZwN3RqOGly", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.facebook.com/themiceconnection/", icon: FaFacebook, label: "Facebook" },
    { href: "https://www.tiktok.com/@themiceconnection?_t=ZS-8zDsxZUgPmJ&_r=1", icon: FaTiktok, label: "TikTok" },
    { href: "https://www.linkedin.com/company/the-mice-connection/", icon: FaLinkedin, label: "LinkedIn" },
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
      {/* Top bar */}
      <div className="border-b border-gray-200 hidden lg:block">
        <div className="max-w-[1540px] mx-auto flex justify-between items-center px-6 py-2 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span className="font-medium">Follow Us:</span>
            <div className="flex gap-4 text-lg">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-500 hover:text-[#0e332e] transition-transform hover:scale-110 duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <Link to="/contact">
            <button className="bg-[#0e332e] text-white px-5 py-2 rounded-full font-semibold text-xs tracking-wide uppercase hover:bg-[#145f4a] transition-all hover:scale-105 duration-300 shadow-md hover:shadow-lg">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-[1540px] mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        {/* Left nav */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-base">
          {navLinksLeft.map((link) => (
            <li key={link.label} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative flex items-center gap-1.5 text-gray-700 transition-colors hover:text-[#0c3b32] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#0c3b32] after:transition-all after:duration-300 hover:after:w-full"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  ref={servicesDropdownRef}
                >
                  <span>{link.label}</span>
                  <motion.div animate={{ rotate: isServicesOpen ? 180 : 0 }}>
                    <FaChevronDown className="text-xs" />
                  </motion.div>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-3 w-56 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100"
                      >
                        <div className="py-2">
                          {servicesLinks.map((service) => (
                            <Link key={service.label} to={service.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f7f5] hover:text-[#0c3b32] transition-colors duration-200">
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink to={link.href}>{link.label}</NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.webp"
            alt="The MICE Connection"
            className="object-contain h-12 lg:h-20 lg:-mt-16 lg:p-2 xl:h-24"
          />
        </Link>

        {/* Right nav */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-base">
          {navLinksRight.map((link) => (
            <li key={link.label}>
              <NavLink to={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-2xl z-50 text-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
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
            className="lg:hidden w-full bg-white shadow-lg overflow-hidden"
          >
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <div key={link.label} className="w-full border-b border-gray-200 last:border-b-0">
                {link.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex justify-center items-center gap-2 py-3 text-lg text-gray-700"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      <span>{link.label}</span>
                      <motion.div animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}>
                        <FaChevronDown className="text-sm" />
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
                        >
                          {servicesLinks.map((service) => (
                            <MobileNavLink key={service.label} to={service.href} onClick={closeMobileMenu}>
                              <span className="text-base font-normal">{service.label}</span>
                            </MobileNavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <MobileNavLink to={link.href} onClick={closeMobileMenu}>
                    {link.label}
                  </MobileNavLink>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
