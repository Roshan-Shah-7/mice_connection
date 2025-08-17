import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLElement | null>(null);
    const headingRef = useRef(null);
    const introRef = useRef(null);
    const missionRef = useRef(null);
    const founderRef = useRef(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
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
                // Images animation with stagger
                .fromTo(
                    imageRefs.current,
                    {
                        scale: 0.9,
                        opacity: 0,
                        y: 30
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power2.out'
                    },
                    '-=0.4'
                )
                // Mission animation
                .fromTo(
                    missionRef.current,
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8
                    },
                    '-=0.4'
                )
                // Services cards animation
                .fromTo(
                    cardRefs.current,
                    {
                        y: 50,
                        opacity: 0,
                        scale: 0.95
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: 'back.out(1.2)'
                    },
                    '-=0.3'
                )
                // Founder section animation
                .fromTo(
                    founderRef.current,
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8
                    },
                    '-=0.3'
                );

            // Parallax effect on section
            const bgElement = containerRef.current?.querySelector('.mice-bg');
            if (bgElement) {
                gsap.to(bgElement, {
                    yPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
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

    // Function to add refs to images
    const addToImageRefs = (el: HTMLDivElement | null) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    // Function to add refs to service cards
    const addToCardRefs = (el: HTMLDivElement | null) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    return (
        <section
            ref={containerRef}
            className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]"
            itemScope
            itemType="https://schema.org/Organization"
        >
            {/* Background decorative element */}
            <div className="mice-bg absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e332e] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0e332e] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e332e] mb-4"
                        itemProp="name"
                    >
                        The MICE Connection
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Redefining Nepal's Event Landscape
                    </p>
                    <div className="w-24 h-1 bg-[#0e332e] mx-auto mt-6"></div>
                </div>

                {/* Introduction with Images */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div
                        ref={introRef}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-semibold text-[#0e332e] mb-4">Welcome to The MICE Connection</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            A venture dedicated to showcasing Nepal as a world-class destination for Meetings, Incentives, Conferences, and Exhibitions (MICE).
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            With over a decade of experience in tourism and event management, I founded The MICE Connection to bridge Nepal's rich culture, breathtaking landscapes, and warm hospitality with global event standards.
                        </p>
                        <p className="text-lg text-gray-700">
                            Our mission is simple: to craft seamless, impactful experiences—whether it's an international conference, exhibition, incentive program, or corporate retreat.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="/assets/home/homeAbout.webp"
                                alt="Beautiful landscape of Nepal"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="/assets/home/homeConference.webp"
                                alt="Modern conference hall in Nepal"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg col-span-2">
                            <img
                                src="/assets/home/homeevent.webp"
                                alt="Professional event management team"
                                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div
                    ref={missionRef}
                    className="bg-white p-8 rounded-2xl shadow-lg mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="/assets/home/homeMission.webp"
                                alt="Team collaborating on event planning"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-[#0e332e] mb-6 text-center">Our Mission</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                We don't just bring the world to Nepal; we also empower Nepalese groups to step onto global platforms, fostering cultural exchange and amplifying Nepal's presence in the international MICE industry.
                            </p>
                            <p className="text-lg text-gray-700">
                                At The MICE Connection, events are more than logistics—they're opportunities to connect people, ideas, and cultures. Together, let's create experiences that inspire and leave lasting memories.
                            </p>
                        </div>
                    </div>
                </div>

                {/* MICE Services */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-[#0e332e] mb-6 text-center">Our MICE Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div
                            ref={addToCardRefs}
                            className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#0e332e]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#0e332e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-[#0e332e] mb-3">Meetings</h4>
                            <p className="text-gray-700">
                                Professional meeting planning with state-of-the-art venues and seamless logistics for productive gatherings.
                            </p>
                        </div>
                        <div
                            ref={addToCardRefs}
                            className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#0e332e]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#0e332e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-[#0e332e] mb-3">Incentives</h4>
                            <p className="text-gray-700">
                                Unique incentive programs that motivate and reward teams with unforgettable experiences in Nepal.
                            </p>
                        </div>
                        <div
                            ref={addToCardRefs}
                            className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#0e332e]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#0e332e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-[#0e332e] mb-3">Conferences</h4>
                            <p className="text-gray-700">
                                World-class conference management with cutting-edge technology and exceptional attendee experiences.
                            </p>
                        </div>
                        <div
                            ref={addToCardRefs}
                            className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#0e332e]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#0e332e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-[#0e332e] mb-3">Exhibitions</h4>
                            <p className="text-gray-700">
                                Comprehensive exhibition services from planning to execution, creating impactful brand experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Founder Section */}
                <div
                    ref={founderRef}
                    className="bg-white p-8 rounded-2xl shadow-lg"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-semibold text-[#0e332e] mb-6 text-center">Meet Our Founder</h3>
                            <h4 className="text-xl font-semibold text-[#0e332e] mb-2">Shradha Chhetri</h4>
                            <p className="text-lg text-gray-700 mb-4 italic">Managing Director, The MICE Connection</p>
                            <p className="text-lg text-gray-700 mb-4">
                                With prior experience as COO of the Nepal Association of Tour & Travel Agents (NATTA) and as Executive Director for international events, Ms. Shradha brings proven expertise and vision to Nepal's MICE sector.
                            </p>
                            <p className="text-lg text-gray-700">
                                Her leadership has been instrumental in bridging Nepal's rich cultural heritage with global event standards, positioning the country as a premier destination for international MICE activities.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <span className="bg-[#0e332e]/10 text-[#0e332e] px-3 py-1 rounded-full text-sm">Event Management</span>
                                <span className="bg-[#0e332e]/10 text-[#0e332e] px-3 py-1 rounded-full text-sm">Tourism Expert</span>
                                <span className="bg-[#0e332e]/10 text-[#0e332e] px-3 py-1 rounded-full text-sm">Industry Leader</span>
                                <span className="bg-[#0e332e]/10 text-[#0e332e] px-3 py-1 rounded-full text-sm">Global Vision</span>
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg">
                                <img
                                    src="/src/assets/mice/founder.jpg"
                                    alt="Shradha Chhetri, Managing Director of The MICE Connection"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Structured data for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "The MICE Connection",
                        "description": "A venture dedicated to showcasing Nepal as a world-class destination for Meetings, Incentives, Conferences, and Exhibitions (MICE).",
                        "founder": {
                            "@type": "Person",
                            "name": "Shradha Chhetri",
                            "jobTitle": "Managing Director",
                            "description": "With prior experience as COO of the Nepal Association of Tour & Travel Agents (NATTA) and as Executive Director for international events, Ms. Shradha brings proven expertise and vision to Nepal's MICE sector."
                        },
                        "serviceType": ["Meetings", "Incentives", "Conferences", "Exhibitions"],
                        "areaServed": "Nepal",
                        "knowsAbout": ["Event Management", "Tourism", "Conference Planning", "Incentive Programs", "Exhibition Management"],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "MICE Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Meeting Planning"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Incentive Programs"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Conference Management"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Exhibition Services"
                                    }
                                }
                            ]
                        }
                    })}
                </script>
            </div>
        </section>
    );
};

export default About;

