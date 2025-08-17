import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define TypeScript interface for timezone
interface TimeZone {
    name: string;
    location: string;
    timezone: string;
    offset: string;
}

const Footer = () => {
    const footerRef = useRef<HTMLDivElement | null>(null);
    const [times, setTimes] = useState<{ [key: string]: string }>({});

    // GSAP animations
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });

            const footerSections = footerRef.current?.querySelectorAll('.footer-section');
            if (footerSections) {
                tl.fromTo(
                    footerSections,
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2
                    }
                );
            }

            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        },
        {
            scope: footerRef,
            dependencies: []
        }
    );

    // Time zones data
    const timeZones: TimeZone[] = [
        { name: "Nepal Time", location: "Kathmandu", timezone: "Asia/Kathmandu", offset: "NPT" },
        { name: "GMT", location: "London", timezone: "Europe/London", offset: "GMT" },
        { name: "EST", location: "New York", timezone: "America/New_York", offset: "EST" },
        { name: "CST", location: "Beijing", timezone: "Asia/Shanghai", offset: "CST" },
        { name: "JST", location: "Tokyo", timezone: "Asia/Tokyo", offset: "JST" },
        { name: "AEST", location: "Sydney", timezone: "Australia/Sydney", offset: "AEST" }
    ];

    // Update times every second
    useEffect(() => {
        const updateTimes = () => {
            const newTimes: { [key: string]: string } = {};

            timeZones.forEach(tz => {
                const now = new Date();
                const formatter = new Intl.DateTimeFormat('en-US', {
                    timeZone: tz.timezone,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                });
                newTimes[tz.name] = formatter.format(now);
            });

            setTimes(newTimes);
        };

        updateTimes();
        const interval = setInterval(updateTimes, 1000);

        return () => clearInterval(interval);
    }, []);

    // Footer links
    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Tour Packages", href: "/tours" },
        { name: "Latest Work", href: "/work" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact", href: "/contact" }
    ];

    const services = [
        { name: "Meetings", href: "/services/meetings" },
        { name: "Incentives", href: "/services/incentives" },
        { name: "Conferences", href: "/services/conferences" },
        { name: "Exhibitions", href: "/services/exhibitions" },
        { name: "Trade Shows", href: "/services/trade-shows" },
        { name: "Corporate Retreats", href: "/services/retreats" }
    ];

    const socialLinks = [
        { name: "Facebook", href: "https://facebook.com", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12zm-1.5-7.5h-3v-3h3v-3c0-2.485 2.015-4.5 4.5-4.5h3v3h-3c-.827 0-1.5.673-1.5 1.5v3h4.5l-.75 3h-3.75v7.5z" },
        { name: "Twitter", href: "https://twitter.com", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
        { name: "LinkedIn", href: "https://linkedin.com", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
        { name: "Instagram", href: "https://instagram.com", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }
    ];

    return (
        <footer
            ref={footerRef}
            className="w-full bg-[#0e332e] text-white pt-16 pb-8 relative overflow-hidden"
        >
            {/* Background decorative element */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">The MICE Connection</h3>
                        <p className="text-gray-300 mb-6">
                            Your premier destination for exceptional MICE (Meetings, Incentives, Conferences, and Exhibitions) services in Nepal and beyond.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0e332e] transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Our Services</h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contact Us</h4>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-[#D4AF37] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>
                                    Thamel, Kathmandu, Nepal
                                </span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>
                                    +977-1-12345678
                                </span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>
                                    info@miceconnection.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Time Zones Section */}
                <div className="bg-[#D4AF37]/10 rounded-2xl p-6 mb-12">
                    <h4 className="text-lg font-semibold mb-4 text-center text-[#D4AF37]">Global Time Zones</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {timeZones.map((tz, index) => (
                            <div key={index} className="text-center">
                                <div className="text-sm font-medium text-[#D4AF37]">{tz.name}</div>
                                <div className="text-xs text-gray-400 mb-1">{tz.location}</div>
                                <div className="text-lg font-bold text-white">{times[tz.name] || 'Loading...'}</div>
                                <div className="text-xs text-gray-400">{tz.offset}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-white/5 rounded-2xl p-6 mb-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="text-xl font-semibold mb-2 text-[#D4AF37]">Stay Updated</h4>
                        <p className="text-gray-300 mb-4">
                            Subscribe to our newsletter for the latest updates on events, tours, and special offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#D4AF37] text-[#0e332e] font-medium rounded-lg hover:bg-white transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} The MICE Connection. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="/privacy" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="/sitemap" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;