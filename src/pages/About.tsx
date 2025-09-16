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
    const storyRef = useRef<HTMLDivElement>(null);
    const valuesRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const expertiseRef = useRef<HTMLDivElement>(null);
    const visionRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Animation for page elements
    useGSAP(() => {
        // Hero animation
        gsap.fromTo(heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        );

        // Section animations with scroll trigger
        const sections = [storyRef, valuesRef, timelineRef, expertiseRef, visionRef, ctaRef];

        sections.forEach(section => {
            if (section.current) {
                gsap.fromTo(section.current,
                    { opacity: 0, y: 80 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });

        // Value cards animation
        gsap.fromTo('.value-card',
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: valuesRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Expertise cards animation
        gsap.fromTo('.expertise-card',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: expertiseRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Core values data
    const coreValues = [
        {
            icon: '✨',
            title: 'Innovation',
            description: 'Creative event concepts that push boundaries and create memorable experiences.'
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
            title: 'Cultural & Leisure Tours',
            description: 'Immersive experiences that highlight Nepal\'s beauty and heritage.',
            icon: '🏔️'
        },
        {
            title: 'Women-Centric Tours',
            description: 'Empowering journeys designed for women travelers, focusing on safety, wellness, and authentic local experiences.',
            icon: '👩'
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
                        With a strong foundation in Meetings, Incentives, Conferences, and Exhibitions (MICE), we blend Nepalese warmth with global precision.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: storyRef.current?.offsetTop ? storyRef.current.offsetTop - 100 : 0, behavior: 'smooth' })}
                        className="px-8 py-3 bg-[#D4AF37] text-[#0e332e] font-medium rounded-full hover:bg-[#c19c2d] transition-colors duration-300 group"
                    >
                        Explore Our Story
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

            {/* Storytelling / Who We Are Section */}
            <section ref={storyRef} className="py-20 px-4 md:px-8 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#f8f9fa] to-white -z-10"></div>

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0e332e] mb-4">
                            Our Story
                        </h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-1/2">
                            <div className="sticky top-24">
                                <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 transition-transform duration-700 hover:rotate-0">
                                    <img
                                        src="/assets/about/team.webp"
                                        alt="Team at The MICE Connection"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="space-y-6">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    At The MICE Connection Pvt. Ltd., we don't just manage events we create transformative experiences.
                                    Our journey began with a vision: to redefine event management in Nepal and beyond.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Today, we are proud to be a trusted partner for businesses, organizations, and institutions worldwide,
                                    delivering events that inspire, connect, and elevate brands to new heights.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    We believe that events are not just gatherings they are powerful platforms for storytelling,
                                    networking, and transformation. Every detail matters, and every moment counts.
                                </p>
                                <div className="bg-[#0e332e] bg-opacity-5 p-6 rounded-2xl mt-8 border-l-4 border-[#D4AF37]">
                                    <p className="text-white italic font-serif text-lg">
                                        "That's why we commit to innovation, creativity, and client-centric excellence in everything we do."
                                    </p>
                                </div>
                            </div>
                        </div>
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
            <section ref={expertiseRef} className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#f8f9fa]">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#0e332e] to-[#1a4d47] z-0"></div>
                <div className="absolute inset-0 opacity-10 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/api/placeholder/1200/800")' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                            Our Vision
                        </h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="space-y-8 text-white">
                        <p className="text-xl md:text-2xl font-light">
                            To become a globally recognized leader in the MICE industry, setting new standards of excellence,
                            creativity, and client satisfaction—while positioning Nepal as a premier destination for world-class events.
                        </p>
                        <p className="text-lg">
                            At The MICE Connection, we are more than an event agency—we are your partner in success.
                            Every event we design reflects our passion, dedication, and pursuit of perfection.
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
                        Ready to elevate your next event with world-class planning and execution?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-8 py-3 bg-[#D4AF37] text-[#0e332e] border-2 border-[#0e332e] font-medium rounded-full hover:bg-[#c19c2d] transition-colors duration-300"
                        >
                            Start Planning
                        </button>
                        <button
                            onClick={() => navigate('/events')}
                            className="px-8 py-3 border-2 bg-white text-black font-medium rounded-full hover:bg-white hover:text-[#0e332e] transition-colors duration-300"
                        >
                            Successful Events
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;