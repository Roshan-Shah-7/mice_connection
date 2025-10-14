import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { ourPresenceData } from '../data/ourPresenceData';

interface Presence {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    year: string;
    slug?: string;
}

const OurPresencePage = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const presenceRef = useRef<HTMLDivElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    const allPresence: Presence[] = ourPresenceData
        .sort((a, b) => parseInt(b.year) - parseInt(a.year)) // Sort by year in descending order
        .map(work => ({
            id: work.id,
            title: work.title,
            description: work.description,
            imageUrl: work.image,
            year: work.year,
            slug: work.slug,
        }));

    useEffect(() => {
        // Enhanced hero section animation
        if (heroRef.current) {
            const heroTitle = heroRef.current.querySelector('.hero-title');
            const heroSubtitle = heroRef.current.querySelector('.hero-subtitle');
            const heroLine = heroRef.current.querySelector('.hero-line');
            const heroImage = heroRef.current.querySelector('.hero-image');
            const floatingElements = heroRef.current.querySelectorAll('.floating-element');

            const tl = gsap.timeline();

            tl.fromTo(heroTitle,
                { y: 100, opacity: 0, rotationX: 45 },
                { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power3.out" }
            )
                .fromTo(heroSubtitle,
                    { y: 60, opacity: 0, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }, "-=0.5"
                )
                .fromTo(heroLine,
                    { width: 0, opacity: 0 },
                    { width: "120px", opacity: 1, duration: 1, ease: "power3.out" }, "-=0.3"
                )
                .fromTo(heroImage,
                    { scale: 1.3, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }, "-=1"
                )
                .fromTo(floatingElements,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.5"
                );
        }

        // Enhanced presence section animation
        if (presenceRef.current) {
            const sectionTitle = presenceRef.current.querySelector('.section-title');
            const sectionSubtitle = presenceRef.current.querySelector('.section-subtitle');
            const presenceCards = presenceRef.current.querySelectorAll('.presence-card');

            gsap.fromTo([sectionTitle, sectionSubtitle],
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionTitle,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(presenceCards,
                { y: 100, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: presenceCards,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }
    }, [allPresence]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100/50 overflow-hidden">
            {/* Enhanced Hero Section */}
            <div ref={heroRef} className="relative h-screen overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#10362e]/60 via-[#10362e]/60 to-[#10362e]/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 z-10"></div>

                {/* Loading State */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-5">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 border-4 border-[#fcd10b] border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-gray-600">Loading presence showcase...</p>
                        </div>
                    </div>
                )}

                {/* Background Image */}
                <img
                    src="/assets/works/iitmPune.jpg" // Reusing eventHero for now, can be changed later
                    alt="Our Presence background"
                    className={`hero-image absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={handleImageLoad}
                />

                {/* Floating Elements */}
                <div className="floating-element absolute top-20 left-10 w-6 h-6 bg-[#fcd10b] rounded-full opacity-80 animate-pulse z-20"></div>
                <div className="floating-element absolute bottom-40 left-20 w-4 h-4 bg-[#fcd10b] rounded-full opacity-70 animate-pulse z-20"></div>

                <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 w-full max-w-[1440px] mx-auto">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-3 bg-white/15 backdrop-blur-sm rounded-2xl mb-8 border border-white/20">
                            <span className="w-3 h-3 bg-[#fcd10b] rounded-full mr-3 animate-pulse"></span>
                            <span className="text-white/95 text-sm font-semibold uppercase tracking-wider">
                                Our Global Footprint
                            </span>
                        </div>

                        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                            <span className="block transform transition-transform duration-700 hover:scale-105">Our</span>
                            <span className="block text-[#fcd10b] bg-gradient-to-r from-[#fcd10b] to-[#f8d947] bg-clip-text transform transition-transform duration-700 hover:scale-105">Global</span>
                            <span className="block transform transition-transform duration-700 hover:scale-105">Presence</span>
                        </h1>

                        <div className="hero-line h-2 w-32 bg-gradient-to-r from-[#fcd10b] to-[#f8d947] my-8 rounded-full shadow-lg"></div>

                        <p className="hero-subtitle text-xl md:text-2xl text-gray-100 max-w-3xl leading-relaxed bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            Showcasing our reach and impact through international collaborations and participations.
                        </p>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                            <div className="flex flex-col items-center text-white/80">
                                <span className="text-sm mb-2 font-medium">Explore Our Presence</span>
                                <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Presence Section */}
            <div ref={presenceRef} className="py-20 px-6 md:px-12 lg:px-20 relative">
                <div className="max-w-[1440px] mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#10362e] mb-6">
                            Our Footprint
                        </h2>
                        <p className="section-subtitle text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Discover where we've made our mark and fostered global connections.
                        </p>
                    </div>

                    {/* Presence Grid */}
                    <div className="relative">
                        {/* Animated Background Elements */}
                        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#fcd10b]/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#10362e]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#fcd10b]/5 to-[#10362e]/5 rounded-full blur-2xl animate-pulse delay-500"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {allPresence.map((item: Presence) => (
                                <Link
                                    to={`/our-presence-detail/${item.slug}`}
                                    key={item.id}
                                    className={`presence-card group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-8`}
                                >
                                    {/* Presence Image with Enhanced Overlay */}
                                    <div className={`relative overflow-hidden h-64`}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#10362e]/20 to-[#fcd10b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced Presence Details */}
                                    <div className="p-6 md:p-8 relative">
                                        {/* Decorative Element */}
                                        <div className="absolute -top-4 left-6 w-8 h-1 bg-gradient-to-r from-[#fcd10b] to-[#f8d947] rounded-full"></div>

                                        <h3 className={`font-bold text-[#10362e] mb-4 group-hover:text-[#fcd10b] transition-colors duration-300 text-xl md:text-2xl leading-tight`}>
                                            {item.title}
                                        </h3>

                                        {/* Enhanced Meta Information */}
                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-gray-600 bg-gray-50/50 rounded-lg p-3">
                                                <svg className="w-5 h-5 mr-3 text-[#fcd10b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-medium">{item.year}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Enhanced Action Button */}
                                        <div
                                            className="w-full py-4 px-6 bg-gradient-to-r from-[#10362e] to-[#1a4d42] text-white font-semibold rounded-xl hover:from-[#fcd10b] hover:to-[#f8d947] hover:text-[#10362e] transition-all duration-500 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                        >
                                            <span>View Details</span>
                                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#10362e] via-[#1a4d42] to-[#10362e] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-[#fcd10b] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f8d947] rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                        Ready to Explore Our Global
                        <span className="block text-[#fcd10b]">Footprint?</span>
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                        Discover where The MICE Connection has made an impact and how we can bring your global vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link to="/contact">
                            <button className="bg-[#fcd10b] text-[#10362e] font-bold py-4 px-12 rounded-xl hover:bg-white hover:scale-105 transition-all duration-500 transform shadow-2xl hover:shadow-3xl flex items-center gap-3 group">
                                <span>Get Started Today</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="border-2 border-white text-white font-bold py-4 px-12 rounded-xl hover:bg-white hover:text-[#10362e] hover:scale-105 transition-all duration-500 transform shadow-2xl hover:shadow-3xl">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPresencePage;