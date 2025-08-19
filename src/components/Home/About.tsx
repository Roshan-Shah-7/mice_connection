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
                                <span className="bg-[#0e332e]/10 text-[#0e332e] px-3 py-1 rounded-full text-sm">Women Empowerment</span>
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
            </div>
        </section>
    );
};

export default About;

