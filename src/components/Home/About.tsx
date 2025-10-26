import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const tourTravelRef = useRef<HTMLDivElement>(null); // New ref for Tour and Travel section
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const hasAnimatedRef = useRef(false);

    const [hoveredLetter, setHoveredLetter] = useState<string | null>(null);
    const [centerHovered, setCenterHovered] = useState(false);


    // GSAP animations with proper cleanup
    useGSAP(
        () => {
            // Only run animation once, not on every re-render
            if (hasAnimatedRef.current) return;
            // Initial animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
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
                // Tour and Travel animation
                .fromTo(
                    tourTravelRef.current,
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

            // Hover animations for cards and images
            cardRefs.current.forEach(card => {
                if (!card) return;

                card.addEventListener('mouseenter', () => {
                    gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
                });
            });

            hasAnimatedRef.current = true;
            
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

    // Function to add refs to images
    const addToImageRefs = (el: HTMLDivElement | null) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    // Fallback image in case of error
    const addImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZpbGw9IiM5OTkiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
    };

    // Handle mouse events for MICE letters
    const handleMouseEnter = (letter: string) => {
        setHoveredLetter(letter);
    };

    const handleMouseLeave = () => {
        setHoveredLetter(null);
    };

    const handleCenterEnter = () => {
        setCenterHovered(true);
    };

    const handleCenterLeave = () => {
        setCenterHovered(false);
    };

    return (
        <section
            ref={containerRef}
            className="w-full py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="absolute inset-0 opacity-[0.03] mice-bg"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%230e332e\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                    backgroundAttachment: 'fixed',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-[#0e332e]/10 rounded-full">
                        <div className="w-6 h-0.5 bg-[#0e332e] mr-2"></div>
                        <span className="text-sm font-medium text-[#0e332e] uppercase tracking-wider">About Us</span>
                        <div className="w-6 h-0.5 bg-[#0e332e] ml-2"></div>
                    </div>
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0e332e] mb-6"
                        itemProp="name"
                    >
                        The <span className="text-[#0e332e]">MICE</span> Connection
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light mb-8">
                        Redefining Nepal's Event Landscape with Excellence
                    </p>
                    <div className="flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#2a9d8f] to-transparent"></div>
                    </div>
                </div>

                {/* MICE Images Grid with Letter Reveal */}
                <div className="mb-20 md:mb-24">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 text-sm font-medium bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full mb-6">
                            What We Represent
                        </span>
                        <h3 className="text-3xl font-bold text-[#0e332e] mb-4">The MICE Experience</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Each element of our name represents a core service we excel in</p>
                    </div>

                    <div className="relative grid grid-cols-2 gap-6 max-w-4xl mx-auto"
                        onMouseEnter={handleCenterEnter}
                        onMouseLeave={handleCenterLeave}>
                        {[
                            {
                                letter: "M",
                                title: "Meetings",
                                desc: "Professional meeting planning and execution",
                                image: "/assets/home/meeting.webp",
                                color: "from-blue-500/20 to-blue-700/20"
                            },
                            {
                                letter: "I",
                                title: "Incentives",
                                desc: "Rewarding incentive travel programs",
                                image: "/assets/home/incentives.webp",
                                color: "from-amber-500/20 to-amber-700/20"
                            },
                            {
                                letter: "C",
                                title: "Conferences",
                                desc: "Large-scale conference management",
                                image: "/assets/home/homeAbout2.webp",
                                color: "from-green-500/20 to-green-700/20"
                            },
                            {
                                letter: "E",
                                title: "Exhibitions",
                                desc: "Exhibition planning and coordination",
                                image: "/assets/home/exhibitions.webp",
                                color: "from-purple-500/20 to-purple-700/20"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={addToImageRefs}
                                className="overflow-hidden rounded-2xl shadow-lg group relative"
                                onMouseEnter={() => handleMouseEnter(item.letter)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="w-full h-full relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={addImageFallback}
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Letter overlay */}
                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${(centerHovered || hoveredLetter === item.letter) ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="text-white text-8xl font-bold drop-shadow-lg">{item.letter}</div>
                                    </div>

                                    {/* Title overlay */}
                                    <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transition-all duration-500 transform translate-y-0 group-hover:translate-y-0`}>
                                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Center overlay when all letters are shown */}
                        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${centerHovered ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex space-x-8">
                                {['M', 'I', 'C', 'E'].map((letter, index) => (
                                    <div key={index} className="text-8xl font-bold text-[#10362e] drop-shadow-lg animate-pulse">
                                        {letter}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 italic">Hover over each image to discover what MICE represents</p>
                    </div>
                </div>

                {/* Introduction */}
                <div
                    ref={introRef}
                    className="flex flex-col max-w-4xl mx-auto items-center justify-center mb-20 md:mb-24"
                >
                    <div className="mb-8 text-center">
                        <span className="inline-block px-4 py-2 text-sm font-medium bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full mb-6">
                            Welcome
                        </span>
                        <h3 className="text-3xl font-bold text-[#0e332e] mb-6">Welcome to The MICE Connection</h3>
                    </div>
                    <div className="space-y-6 text-lg text-gray-700 text-center">
                        <p>
                            A venture dedicated to showcasing Nepal as a world-class destination for Meetings, Incentives, Conferences, and Exhibitions (MICE).
                        </p>
                        <p>
                            With over a decade of experience in tourism and event management, I founded The MICE Connection to bridge Nepal's rich culture, breathtaking landscapes, and warm hospitality with global event standards.
                        </p>
                        <p>
                            Our mission is simple: to craft seamless, impactful experiences whether it's an international conference, exhibition, incentive program, or corporate retreat.
                        </p>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <div className="flex items-center space-x-4 p-4 bg-[#0e332e]/5 rounded-2xl">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#2a9d8f] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">2</span>
                                </div>
                            </div>
                            <p className="text-gray-700">Years of experience in tourism and event management</p>
                        </div>
                    </div>
                </div>


                {/* Mission Statement */}
                <div
                    ref={missionRef}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-20 md:mb-24 transition-all duration-300 hover:shadow-2xl relative overflow-hidden border border-gray-100"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#2a9d8f]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2a9d8f]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                        <div className="order-2 lg:order-1">
                            <div className="mb-8">
                                <span className="inline-block px-4 py-2 text-sm font-medium bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full mb-6">
                                    Our Purpose
                                </span>
                                <h3 className="text-3xl font-bold text-[#0e332e] mb-6">Our Mission</h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    We don't just bring the world to Nepal; we also empower Nepalese groups to step onto global platforms, fostering cultural exchange and amplifying Nepal's presence in the international MICE industry.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    At The MICE Connection, events are more than logistics they're opportunities to connect people, ideas, and cultures. Together, let's create experiences that inspire and leave lasting memories.
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-xl group order-1 lg:order-2">
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src="/assets/home/homeMission.webp"
                                    alt="Team collaborating on event planning"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={addImageFallback}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tour and Travel Section */}
                <div
                    ref={tourTravelRef}
                    className="flex flex-col max-w-4xl mx-auto items-center justify-center mb-20 md:mb-24"
                >
                    <div className="mb-8 text-center">
                        <span className="inline-block px-4 py-2 text-sm font-medium bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full mb-6">
                            Explore
                        </span>
                        <h3 className="text-3xl font-bold text-[#0e332e] mb-6">About Our Tour and Travel Services</h3>
                    </div>
                    <div className="space-y-6 text-lg text-gray-700 text-center">
                        <p>
                            Beyond MICE, The MICE Connection is your trusted partner for unforgettable tour and travel experiences across Nepal. We specialize in curating personalized itineraries that showcase the best of Nepal's natural beauty, cultural heritage, and adventurous spirit.
                        </p>
                        <p>
                            From serene Himalayan treks and thrilling jungle safaris to cultural tours of ancient cities and spiritual retreats, our expert team ensures every journey is seamless, enriching, and tailored to your preferences.
                        </p>
                        <p>
                            Discover Nepal with us where every trip is an adventure waiting to unfold.
                        </p>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <div className="flex items-center space-x-4 p-4 bg-[#0e332e]/5 rounded-2xl">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#2a9d8f] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">2</span>
                                </div>
                            </div>
                            <p className="text-gray-700">Years of crafting memorable travel experiences</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;