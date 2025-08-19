import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import gsap from "gsap";

const Header: React.FC = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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
      }
    }
  }, [isOpen]);

  const navLinksLeft = [
    { label: "About Us", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const navLinksRight = [
    { label: "About Nepal", href: "#" },
    { label: "Tour Packages", href: "#" },
    { label: "Events", href: "#" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      {/* Top bar (hidden on mobile) */}
      <div className="border-b border-gray-300 hidden md:block">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="font-light">Follow Us:</span>
            <div className="flex gap-3 text-lg">
              <a href="#" aria-label="Instagram" className="hover:scale-110 duration-300"><FaInstagram /></a>
              <a href="#" aria-label="Facebook" className="hover:scale-110 duration-300"><FaFacebook /></a>
              <a href="#" aria-label="TikTok" className="hover:scale-110 duration-300"><FaTiktok /></a>
              <a href="#" aria-label="LinkedIn" className="hover:scale-110 duration-300"><FaLinkedin /></a>
            </div>
          </div>
          <button className="bg-[#0e332e] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#145f4a] transition hover:scale-105 duration-300">
            Schedule Now
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="max-w-[1440px] mx-auto flex items-center 
      justify-between px-4 md:px-6 py-3">
        {/* Left nav */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-800">
          {navLinksLeft.map((link) => (
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

        {/* Logo center */}
        <div className="flex flex-col items-center">
          <img
            src="/logo.webp"
            alt="The MICE Connection"
            className="object-contain md:-mt-10 w-28 md:w-36 bg-white"
          />
        </div>

        {/* Right nav */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-800">
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

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl ml-4"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        ref={mobileMenuRef}
        className="md:hidden flex flex-col items-center gap-6 font-medium text-gray-800 bg-white shadow-md overflow-hidden h-0 opacity-0"
      >
        {[...navLinksLeft, ...navLinksRight].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-[#0c3b32]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
