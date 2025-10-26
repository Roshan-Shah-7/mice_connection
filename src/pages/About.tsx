import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);
    const valuesRef = useRef<HTMLDivElement>(null);
    // const timelineRef = useRef<HTMLDivElement>(null);
    const expertiseRef = useRef<HTMLDivElement>(null);
    const visionRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Animation for page elements
    useGSAP(() => {
        // Hero animation (only runs once on mount)
        gsap.fromTo(heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        );

        // Section animations with scroll trigger - create unique scroll triggers
        const sections = [valuesRef, expertiseRef, visionRef, ctaRef]; // Removed timelineRef as it's not used

        sections.forEach(section => {
            if (section.current) {
                // Create a unique scroll trigger for each section
                gsap.fromTo(section.current,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section.current,
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });

        // Value cards animation with unique scroll trigger
        if (valuesRef.current) {
            gsap.fromTo('.value-card',
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: valuesRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        // Expertise cards animation with unique scroll trigger
        if (expertiseRef.current) {
            gsap.fromTo('.expertise-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: expertiseRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        // Make sure all ScrollTriggers are properly cleaned up
        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };
    }, []);

    // Core values data
    const coreValues = [
        {
            icon: '✨',
            title: 'Innovation',
            description: 'Creative concepts that push boundaries and create memorable experiences.'
        },
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'Flawless execution with attention to every detail for perfect outcomes.'
        },
        {
            icon: '💡',
            title: 'Client-Centric',
            description: 'Tailored experiences designed around your unique needs and objectives.'
        },
        {
            icon: '🌍',
            title: 'Global Standards',
            description: 'International best practices combined with authentic Nepalese warmth.'
        }
    ];

    // Expertise data
    const expertiseData = [
        {
            title: 'Corporate Meetings',
            description: 'Curated gatherings that drive results and foster collaboration.',
            icon: '📊'
        },
        {
            title: 'Incentive Programs',
            description: 'Rewarding journeys that inspire and motivate teams.',
            icon: '🏆'
        },
        {
            title: 'Conferences & Conventions',
            description: 'World-class setups designed for knowledge sharing and networking.',
            icon: '🎤'
        },
        {
            title: 'Exhibitions & Trade Shows',
            description: 'Innovative platforms that showcase brands, products, and ideas.',
            icon: '🎪'
        },
        {
            title: 'Destination Weddings',
            description: 'Unforgettable wedding experiences in breathtaking Nepalese settings.',
            icon: '💍'
        },
        {
            title: 'Adventure Treks',
            description: 'Guided treks through stunning landscapes for all skill levels.',
            icon: '🧗'
        },
        {
            title: 'Cultural & Leisure Tours',
            description: "Immersive experiences that highlight Nepal's beauty and heritage.",
            icon: '🏔️'
        },
        {
            title: 'Women-Centric Tours',
            description: 'Empowering journeys designed for women travelers, focusing on safety, wellness, and authentic local experiences.',
            icon: '👩'
        },
        {
            title: 'Educational Tours',
            description: 'Engaging and informative tours designed for students and academic groups.',
            icon: '🎓'
        }
    ];


    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-4">
                <div ref={heroRef} className="relative z-10 text-center px-4 max-w-6xl lg:mt-35">
                    <div className="mb-8">
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                            Crafting World-Class Experiences
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 font-light">
                            Inspired by Nepal - Delivered Globally
                        </p>
                    </div>
                    <p className="text-lg mb-10 max-w-2xl mx-auto font-light">
                        With a strong foundation in Meetings, Incentives, Conferences, and Exhibitions (MICE), as well as tours and treks, we blend Nepalese warmth with global precision.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: valuesRef.current?.offsetTop ? valuesRef.current.offsetTop - 100 : 0, behavior: 'smooth' })}
                        className="px-8 py-3 bg-[#D4AF37] text-[#0e332e] cursor-pointer font-medium rounded-full hover:bg-[#c19c2d] transition-colors duration-300 group"
                    >
                        Learn More
                        <svg className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                <div className="images hidden lg:flex relative mt-20 w-full max-w-6xl mx-auto h-[300px]">
                    <div className="card absolute -top-30 left-0 w-85 h-75 bg-white border-3 border-black p-4 rotate-12 z-10">
                        <img src="/assets/about/About4.webp" alt="" className='border-3 border-black' />
                    </div>

                    <div className="card absolute top-10 right-0 transform -translate-y-1/2 w-85 h-75 bg-white border-3 border-black p-4 -rotate-6 z-20">
                        <img src="/assets/about/About2.webp" alt="" className='border-3 border-black' />
                    </div>

                    <div className="card absolute top-35 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-85 h-75 bg-white border-3 border-black p-4 z-30 shadow-2xl">
                        <img src="/assets/about/About3.webp" alt="" className='border-3 border-black' />
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-[#0e332e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Detailed About Us */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 text-sm font-medium bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full mb-6">
                            Our Journey
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0e332e] mb-6">Introducing The MICE Connection</h3>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <div className="lg:w-1/2 relative">
                            <img
                                src="/assets/about/managingDirector.webp"
                                alt="Shradha Chhetri - Managing Director, The MICE Connection"
                                className="rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] p-4 rounded-xl shadow-xl text-white font-bold text-center transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                                <p className="text-xl font-serif">Shradha Chhetri</p>
                                <p className="text-sm font-light">Managing Director</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-4 text-lg text-gray-700 leading-relaxed lg:pl-6">
                            <p className="text-xl font-medium text-[#0e332e]">
                                Hey there! I’m thrilled to introduce you to The MICE Connection, a passion venture that’s all about reshaping how we experience Meetings, Incentives, Conferences, and Exhibitions (MICE) in Nepal.
                            </p>
                            <p>
                                As the global tourism landscape continues to evolve, a destination like Nepal is swiftly emerging as a hotspot for MICE due to its unique offerings and unexploited potential. With more than a decade dedicated to navigating the details of the tourism industry and specializing in managing meetings, conferences, and exhibitions, my passion for promoting tourism and fostering cross-cultural connections has paved the way for The MICE Connection. This platform is the result of my heartfelt dedication and commitment.
                            </p>
                            <p>
                                My deep-rooted fascination with tourism, combined with Nepal’s breathtaking landscapes and cultural heritage, led to the inception of The MICE Connection. Having explored various countries, experiencing diverse cultures, and realizing the tremendous impact tourism has on local economies, my ambition to contribute meaningfully to this industry was ignited. Nestled in the Himalayas, Nepal offers an irresistible blend of tradition, modernity, and incredibly warm hospitality, making it an ideal choice for extraordinary event experiences.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 text-lg text-gray-700 leading-relaxed space-y-2">
                        <p>
                            At The MICE Connection, we bridge the gap between global organizations and Nepal’s vibrant offerings. We’re all about crafting events that resonate from international conferences, exhibitions, sales missions, and travel trade shows to corporate retreats infused with local essence. Our commitment lies in delivering seamless experiences tailored to each client’s needs, from conceptualization to flawless execution. And guess what? Our services go beyond Nepal! We love helping Nepalese groups step onto the global stage, connecting with others, exchanging ideas, and showcasing Nepal’s expertise worldwide. This elevates the MICE experience to a whole new level.
                        </p>
                        <p>
                            Establishing The MICE Connection in Nepal wasn’t just about business. It was a dream to put Nepal firmly on the MICE map globally. We’re more than an organization; we’re catalysts for cultural exchanges, unlocking the true potential of Nepal’s tourism.
                        </p>
                    </div>
                    <div className="mt-2 text-lg text-gray-700 leading-relaxed">
                        <p>
                            Come, let’s connect the world through The MICE Connection, where every event becomes an unforgettable adventure amidst Nepal’s inspiring landscapes and vibrant culture. No matter the event, conferences, exhibitions, meetings, or any other occasion we’ve got your back. Together, let’s create memories that last a lifetime.
                        </p>
                    </div>

                    <div className="text-center mt-16">
                        <p className="font-bold text-3xl text-[#0e332e] mb-4 font-serif">Connecting Events, Connecting People, Connecting You.</p>
                        <h4 className="font-bold text-2xl text-[#0e332e] mt-8">Shradha Chhetri</h4>
                        <p className="text-gray-600 font-medium text-lg">Managing Director, The MICE Connection</p>
                        <p className="text-sm text-gray-500 mt-1 max-w-xl mx-auto italic">
                            Ms. Shradha, with experience as COO at Nepal Association of Tour & Travel Agents (NATTA) and as an Executive Director for international events, brings valuable expertise in Nepal’s tourism and event management sectors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section ref={valuesRef} className="py-20 px-4 md:px-8 bg-[#f8f9fa] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#0e332e] rounded-full filter blur-3xl opacity-5 -translate-y-36 translate-x-36"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37] rounded-full filter blur-3xl opacity-5 translate-y-36 -translate-x-36"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0e332e] mb-4">
                            Our Philosophy
                        </h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="value-card bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="text-5xl mb-6">{value.icon}</div>
                                <h3 className="text-xl font-bold text-[#0e332e] mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section ref={expertiseRef} className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#f8f9fa] w-full relative overflow-hidden min-h-screen">
                <img src="/assets/about/experties.webp" alt="" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full object-cover opacity-4' />
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0e332e] mb-4">
                            Our Expertise
                        </h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertiseData.map((item, index) => (
                            <div key={index} className="expertise-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-xl font-bold text-[#0e332e] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Statement Section */}
            <section ref={visionRef} className="py-28 px-4 md:px-8 relative overflow-hidden">
                <div className="absolute w-full h-full right-0 top-0 bg-gradient-to-br from-[#0e332e] to-[#1a4d47] z-0"></div>
                <div className="absolute inset-0 opacity-20 bg-contain bg-right z-10" style={{ backgroundImage: 'url("/assets/about/our vision.webp")', backgroundRepeat: 'no-repeat' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                            Our Vision
                        </h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="space-y-8 text-white">
                        <p className="text-xl md:text-2xl font-light">
                            To become a globally recognized leader in the MICE, tour, and trek industry, setting new standards of excellence,
                            creativity, and client satisfaction while positioning Nepal as a premier destination for world-class experiences.
                        </p>
                        <p className="text-lg">
                            At The MICE Connection, we are more than just an agency, we are your partner in success.
                            Every experience we design reflects our passion, dedication, and pursuit of perfection.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-20 px-4 md:px-8 
            bg-gradient-to-b from-[#0e332e] to-black text-white relative"
                style={{
                    backgroundImage: 'url("/assets/about/aboutCTA.webp")',
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >

                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                        Let's Create Something Remarkable Together
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
                        Ready to elevate your next event, tour, or trek with world-class planning and execution?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-8 py-3 cursor-pointer bg-[#D4AF37] text-[#0e332e] border-2 border-[#0e332e] font-medium rounded-full hover:bg-[#c19c2d] transition-colors duration-300"
                        >
                            Start Planning
                        </button>
                        <button
                            onClick={() => navigate('/crafted-moments')}
                            className="px-8 py-3 border-2 cursor-pointer bg-white text-black font-medium rounded-full hover:bg-white hover:text-[#0e332e] transition-colors duration-300"
                        >
                            See Our Work
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;