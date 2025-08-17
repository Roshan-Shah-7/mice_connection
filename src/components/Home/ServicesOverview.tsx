import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define TypeScript interface for Service
interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServicesOverview = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const introRef = useRef<HTMLParagraphElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // GSAP animations with proper cleanup
    useGSAP(
        () => {
            // Initial animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                }
            });

            // Heading animation
            tl.fromTo(
                headingRef.current,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            )
                // Introduction animation
                .fromTo(
                    introRef.current,
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8
                    },
                    '-=0.5'
                )
                // Cards animation with stagger
                .fromTo(
                    cardRefs.current,
                    {
                        y: 80,
                        opacity: 0,
                        scale: 0.9
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'back.out(1.2)'
                    },
                    '-=0.4'
                );

            // Parallax effect on section
            const bgElement = containerRef.current?.querySelector('.services-bg');
            if (bgElement) {
                gsap.to(bgElement, {
                    yPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            }

            // Cleanup function
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        },
        {
            scope: containerRef,
            dependencies: []
        }
    );

    // Function to add refs to cards
    const addToCardRefs = (el: HTMLDivElement | null) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    // Service data with TypeScript typing
    const services: Service[] = [
        {
            id: 1,
            title: "INCENTIVE TRAVEL",
            description: "The use of an all-expenses-paid trip to reward and motivate employees or channel partners for achieving specific business goals.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            )
        },
        {
            id: 2,
            title: "MEETINGS NATIONAL|INTERNATIONAL",
            description: "Best practices for planning multinational meetings. It covers the aspects of selecting a venue, communicating with participants.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "TRADE SHOWS",
            description: "We can organize the best trade shows as per your requirement with comprehensive planning and execution.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            )
        },
        {
            id: 4,
            title: "CONFERENCES",
            description: "Any type of conference we can organize as per your requirements with professional management and execution.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 5,
            title: "SALES MISSION NATIONAL|INTERNATIONAL",
            description: "As per your requirement we organize sales missions both national and international with strategic planning.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: 6,
            title: "ENDURANCE",
            description: "We are ready for any event with our experienced team and resources to ensure successful execution.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            id: 7,
            title: "TRAININGS",
            description: "Any trainings for skill development with expert trainers and comprehensive learning materials.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            id: 8,
            title: "FESTIVALS",
            description: "Festivals are days to celebrate and we can make them even more special with our event management expertise.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            id: 9,
            title: "TOURS",
            description: "Arrange all your travel with us for hassle-free service with customized itineraries and professional guides.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    return (
        <section
            ref={containerRef}
            className="w-full py-20 relative overflow-hidden"
            itemScope
            itemType="https://schema.org/Service"
        >
            {/* Background decorative element */}
            <div className="services-bg absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e332e] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0e332e] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e332e] mb-4"
                    >
                        WHAT WE OFFER?
                    </h2>
                    <div className="w-24 h-1 bg-[#0e332e] mx-auto mt-6"></div>
                </div>

                {/* Introduction */}
                <div
                    ref={introRef}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <p className="text-lg text-gray-700 mb-6">
                        The MICE Connection, your premier destination for exceptional MICE (Meetings, Incentives, Conferences, and Exhibitions) services. With our expertise and dedication, we are here to ensure your corporate events are flawlessly executed and leave a lasting impression.
                    </p>
                    <p className="text-lg text-gray-700">
                        Explore our comprehensive range of services:
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            ref={addToCardRefs}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative"
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                        >
                            {/* Gold accent border on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37] rounded-2xl transition-all duration-500"></div>

                            {/* Icon with gold glow on hover */}
                            <div className="p-6 flex flex-col items-center text-center relative z-10">
                                <div className="w-16 h-16 bg-[#0e332e]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-all duration-500">
                                    <div className="text-[#0e332e] group-hover:text-[#D4AF37] transition-colors duration-500">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#0e332e] mb-3 group-hover:text-[#D4AF37] transition-colors duration-500" itemProp="name">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500" itemProp="description">
                                    {service.description}
                                </p>
                            </div>

                            {/* Gold shimmer effect on hover */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="shimmer absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-[#0e332e] text-white font-medium rounded-full hover:bg-[#D4AF37] hover:text-[#0e332e] transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                        Contact Us for Your Event
                    </button>
                </div>

                {/* Structured data for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "MICE Services",
                        "description": "Comprehensive MICE (Meetings, Incentives, Conferences, and Exhibitions) services in Nepal",
                        "provider": {
                            "@type": "Organization",
                            "name": "The MICE Connection"
                        },
                        "serviceType": [
                            "Incentive Travel",
                            "Meetings",
                            "Trade Shows",
                            "Conferences",
                            "Sales Missions",
                            "Event Management",
                            "Training Programs",
                            "Festival Management",
                            "Tour Services"
                        ],
                        "areaServed": "Nepal"
                    })}
                </script>
            </div>

        </section>
    );
};

export default ServicesOverview;