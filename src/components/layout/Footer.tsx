import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

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
        { name: "Tour Packages", href: "/tour-packages" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" }
    ];

    const services = [
        { name: "Meetings", href: "/services/meetings" },
        { name: "Incentives", href: "/services/incentives" },
        { name: "Conferences", href: "/services/conferences" },
        { name: "Exhibitions", href: "/services/exhibitions" },
    ];

    return (
        <footer
            ref={footerRef}
            className="w-full bg-[#0e332e] text-white pt-16 pb-8 relative overflow-hidden"
        >
            {/* Background decorative element */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-50 left-50 w-80 h-80 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">The MICE Connection</h3>
                        <p className="text-gray-300 mb-6">
                            Your premier destination for exceptional MICE (Meetings, Incentives, Conferences, and Exhibitions) services in Nepal and beyond.
                        </p>
                        <div className="mt-6">
                            <h5 className="text-md font-semibold mb-2 text-[#D4AF37]">Proudly Associated with:</h5>
                            <img src="/assets/partners/patner.png" alt="PATA International" className="h-12 md:h-20 lg:h-30" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
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
                                    <Link
                                        to={service.href}
                                        className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                                    >
                                        {service.name}
                                    </Link>
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
                                    Chakrapath, Kathmandu, Nepal
                                </span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>
                                    +977-9851363229
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

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} The MICE Connection. All rights reserved.
                        </p>
                        <p className='text-gray-400 text-sm mb-4 md:mb-0'>
                            Developed by: <a href="https://linktrix.tech/" className='hover:text-white duration-500'>Link Trix Pvt. Ltd.</a>
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;