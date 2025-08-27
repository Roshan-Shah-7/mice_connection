import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import gsap from "gsap";

const Header: React.FC = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Animate mobile menu toggle
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
        setIsMobileServicesOpen(false);
      }
    }
  }, [isOpen]);

  // Animate desktop services dropdown
  useEffect(() => {
    if (servicesDropdownRef.current) {
      if (isServicesOpen) {
        gsap.to(servicesDropdownRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(servicesDropdownRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }
  }, [isServicesOpen]);

  // Animate mobile services dropdown
  useEffect(() => {
    if (mobileServicesRef.current) {
      if (isMobileServicesOpen) {
        gsap.to(mobileServicesRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(mobileServicesRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }
  }, [isMobileServicesOpen]);

  const navLinksLeft = [
    { label: "About Nepal", href: "/about-nepal" },
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "Events", href: "/events" },
    { label: "Our Services", href: "#", hasDropdown: true },
  ];

  const navLinksRight = [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ];

  const servicesLinks = [
    { label: "Meetings", href: "/services/meetings" },
    { label: "Incentives", href: "/services/incentives" },
    { label: "Conferences", href: "/services/conferences" },
    { label: "Exhibitions", href: "/services/exhibitions" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      {/* Top bar (hidden on mobile) */}
      <div className="border-b border-gray-300 hidden md:block">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="font-light">Follow Us:</span>
            <div className="flex gap-3 text-lg">
              <a href="https://www.instagram.com/themiceconnectionnepal?igsh=anoyb3ZwN3RqOGly" aria-label="Instagram" className="hover:scale-110 duration-300"><FaInstagram /></a>
              <a href="https://www.facebook.com/themiceconnection/" target="_blank" aria-label="Facebook" className="hover:scale-110 duration-300"><FaFacebook /></a>
              <a href="https://www.tiktok.com/@themiceconnection?_t=ZS-8zDsxZUgPmJ&_r=1" aria-label="TikTok" className="hover:scale-110 duration-300"><FaTiktok /></a>
              <a href="https://www.linkedin.com/company/the-mice-connection/" aria-label="LinkedIn" className="hover:scale-110 duration-300"><FaLinkedin /></a>
            </div>
          </div>
          <a href="/contact">
            <button className="bg-[#0e332e] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#145f4a] transition hover:scale-105 duration-300">
              Schedule Now
            </button>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="max-w-[1440px] mx-auto flex items-center 
      justify-between px-4 md:px-6 py-5">
        {/* Left nav */}
        <ul className="hidden md870:flex gap-6 font-medium text-gray-800">
          {navLinksLeft.map((link) => (
            <li key={link.label} className="relative">
              {link.hasDropdown ? (
                <div
                  className="flex items-center gap-1 transition-colors hover:text-[#0c3b32] cursor-pointer"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>{link.label}</span>
                  <FaChevronDown className={`text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />

                  {/* Services dropdown */}
                  <div
                    ref={servicesDropdownRef}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden"
                    style={{ height: 0, opacity: 0 }}
                  >
                    <div className="py-2">
                      {servicesLinks.map((service) => (
                        <a
                          key={service.label}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f7f5] hover:text-[#0c3b32]"
                        >
                          {service.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#0c3b32]"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Logo center */}
        <a href="/" className="flex flex-col items-center">
          <img
            src="/logo.webp"
            alt="The MICE Connection"
            className="object-contain w-28 md:w-30 md870:bg-white md870:-mt-10 lg:w-34"
          />
        </a>

        {/* Right nav */}
        <ul className="hidden md870:flex gap-6 font-medium text-gray-800">
          {navLinksRight.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-[#0c3b32]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle - shown from 0 to 869px */}
        <button
          className="md870:hidden text-2xl ml-4"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        ref={mobileMenuRef}
        className="md870:hidden flex flex-col items-center gap-4 font-medium text-gray-800 bg-white shadow-md overflow-hidden h-0 opacity-0"
      >
        {navLinksLeft.map((link) => (
          <div key={link.label} className="w-full text-center">
            {link.hasDropdown ? (
              <div className="flex flex-col items-center">
                <button
                  className="flex items-center gap-1 transition-colors hover:text-[#0c3b32]"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>{link.label}</span>
                  <FaChevronDown className={`text-xs transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile services dropdown */}
                <div
                  ref={mobileServicesRef}
                  className="flex flex-col items-center gap-2 mt-2 overflow-hidden w-full"
                  style={{ height: 0, opacity: 0 }}
                >
                  {servicesLinks.map((service) => (
                    <a
                      key={service.label}
                      href={service.href}
                      className="transition-colors hover:text-[#0c3b32] text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                href={link.href}
                className="transition-colors hover:text-[#0c3b32] block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            )}
          </div>
        ))}

        {navLinksRight.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-[#0c3b32] py-2"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (min-width: 870px) {
          .md870\\:flex {
            display: flex !important;
          }
          .md870\\:hidden {
            display: none !important;
          }
          .md870\\:-mt-10 {
            margin-top: -2.5rem !important;
          }
          .md870\\:bg-white {
            background-color: #fff !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;