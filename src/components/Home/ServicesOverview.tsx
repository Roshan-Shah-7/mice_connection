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
                    toggleActions: 'play none none none',
                    markers: false
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

            // Hover animations for cards
            cardRefs.current.forEach(card => {
                if (!card) return;

                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        duration: 0.3,
                        ease: 'power2.out',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    });
                });
            });

            // Cleanup function
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                cardRefs.current.forEach(card => {
                    if (!card) return;
                    card.removeEventListener('mouseenter', () => { });
                    card.removeEventListener('mouseleave', () => { });
                });
            };
        },
        {
            scope: containerRef
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
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            )
        },
        {
            id: 2,
            title: "MEETINGS NATIONAL|INTERNATIONAL",
            description: "Best practices for planning multinational meetings. It covers the aspects of selecting a venue, communicating with participants.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "CONFERENCES",
            description: "Any type of conference we can organize as per your requirements with professional management and execution.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "TOURS",
            description: "Arrange all your travel with us for hassle-free service with customized itineraries and professional guides.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    return (
        <section
            ref={containerRef}
            className="w-full py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]"
            itemScope
            itemType="https://schema.org/Service"
        >
            {/* Background decorative element */}
            <div className="services-bg absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#0e332e] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-[#0e332e] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-12 md:mb-16">
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
                    className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
                >
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        The MICE Connection, your premier destination for exceptional MICE (Meetings, Incentives, Conferences, and Exhibitions) services. With our expertise and dedication, we are here to ensure your corporate events are flawlessly executed and leave a lasting impression.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Explore our comprehensive range of services:
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            ref={addToCardRefs}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                        >
                            {/* Card content */}
                            <div className="p-6 flex flex-col items-center text-center h-full">
                                {/* Icon with background */}
                                <div className="w-16 h-16 bg-[#0e332e]/10 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#0e332e] group-hover:scale-110">
                                    <div className="text-[#0e332e] transition-colors duration-300 group-hover:text-white">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#0e332e] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300" itemProp="name">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 flex-grow mb-4 leading-relaxed" itemProp="description">
                                    {service.description}
                                </p>

                                {/* Learn more link */}
                                {/* <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                                    <span className="text-[#0e332e] font-medium group-hover:text-[#D4AF37] transition-colors duration-300 flex items-center justify-center">
                                        Learn more
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-[#0e332e] text-white font-medium rounded-full hover:bg-[#D4AF37] hover:text-[#0e332e] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Contact Us for Your Event
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;