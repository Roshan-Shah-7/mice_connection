import { useRef } from 'react';
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
    const founderRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Combined ref function for mission section
    const setMissionRef = (el: HTMLDivElement | null) => {
        missionRef.current = el;
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    // GSAP animations with proper cleanup
    useGSAP(
        () => {
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

            // Hover animations for cards and images
            cardRefs.current.forEach(card => {
                if (!card) return;

                card.addEventListener('mouseenter', () => {
                    gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
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

    return (
        <section
            ref={containerRef}
            className="w-full py-16 md:py-20 relative overflow-hidden"
        >
            <div className='absolute w-full h-full opacity-2'
                style={{
                    backgroundImage: 'url(/assets/home/topography.svg)',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e332e] mb-4"
                        itemProp="name"
                    >
                        The MICE Connection
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Redefining Nepal's Event Landscape
                    </p>
                    <div className="w-24 h-1 bg-[#0e332e] mx-auto mt-6"></div>
                </div>

                {/* Introduction with Images */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                    <div
                        ref={introRef}
                        className="flex flex-col justify-center order-2 lg:order-1"
                    >
                        <h3 className="text-2xl font-semibold text-[#0e332e] mb-4">Welcome to The MICE Connection</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            A venture dedicated to showcasing Nepal as a world-class destination for Meetings, Incentives, Conferences, and Exhibitions (MICE).
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            With over a decade of experience in tourism and event management, I founded The MICE Connection to bridge Nepal's rich culture, breathtaking landscapes, and warm hospitality with global event standards.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is simple: to craft seamless, impactful experiences—whether it's an international conference, exhibition, incentive program, or corporate retreat.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
                        <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg group">
                            <div className="aspect-square relative overflow-hidden">
                                <img
                                    src="/assets/home/homeAbout.webp"
                                    alt="Beautiful landscape of Nepal"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={addImageFallback}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>
                        </div>
                        <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg group">
                            <div className="aspect-square relative overflow-hidden">
                                <img
                                    src="/assets/home/homeevent.webp"
                                    alt="Modern conference hall in Nepal"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={addImageFallback}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>
                        </div>
                        <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg col-span-2 group">
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src="/assets/home/homeAbout2.webp"
                                    alt="Professional event management team"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={addImageFallback}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div
                    ref={setMissionRef}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-12 md:mb-16 transition-all duration-300 hover:shadow-xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div ref={addToImageRefs} className="overflow-hidden rounded-xl shadow-lg group">
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src="/assets/home/homeMission.webp"
                                    alt="Team collaborating on event planning"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={addImageFallback}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-[#0e332e] mb-6 text-center md:text-left">Our Mission</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                We don't just bring the world to Nepal; we also empower Nepalese groups to step onto global platforms, fostering cultural exchange and amplifying Nepal's presence in the international MICE industry.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                At The MICE Connection, events are more than logistics—they're opportunities to connect people, ideas, and cultures. Together, let's create experiences that inspire and leave lasting memories.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-semibold text-[#0e332e] mb-6">Ready to Create Unforgettable Events?</h3>
                    <a href="/contact">
                        <button className="bg-[#0e332e] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#1a4d47] hover:shadow-lg transform hover:-translate-y-1">
                            Contact Us Today
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;