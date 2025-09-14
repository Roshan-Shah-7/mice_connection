import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(heroRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
        }

        // Animate the content with a slight delay
        if (contentRef.current) {
            gsap.fromTo(contentRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.5, ease: 'power2.out' }
            );
        }

        // Animate images with staggered effect
        if (imagesRef.current.length > 0) {
            gsap.fromTo(imagesRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.8, ease: 'power2.out' }
            );
        }
    }, []);

    // Function to add image refs to our array
    const addToRefs = (el: HTMLDivElement | null, index: number) => {
        if (el && !imagesRef.current.includes(el)) {
            imagesRef.current[index] = el;
        }
    };

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/assets/nepal/aboutHero.webp"
                    alt="Nepal Himalayas"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#143a31]/90 via-[#143a31]/70 to-[#143a31]/50"></div>
            </div>
            
            {/* Content */}
            <div ref={contentRef} className="relative z-10 w-full mt-16">
                <div className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/20 backdrop-blur-sm border border-[#fcd00e]/30 rounded-full px-4 py-2">
                                <div className="w-2 h-2 bg-[#fcd00e] rounded-full animate-pulse"></div>
                                <span className="text-[#fcd00e] font-medium text-sm">ASIA'S HIDDEN GEM</span>
                            </div>
                            
                            {/* Main Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                Discover Heaven On
                                <span className="block text-[#fcd00e] mt-2">Earth "Nepal"</span>
                            </h1>
                            
                            {/* Subtitle */}
                            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                                Where ancient traditions meet breathtaking landscapes. From the majestic Himalayas to serene valleys, Nepal offers an unparalleled journey of discovery and adventure.
                            </p>
                            
                            {/* Key Highlights */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#fcd00e] mb-1">8</div>
                                    <div className="text-sm text-white/80">World's Highest Peaks</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#fcd00e] mb-1">10</div>
                                    <div className="text-sm text-white/80">UNESCO Heritage Sites</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#fcd00e] mb-1">123+</div>
                                    <div className="text-sm text-white/80">Languages Spoken</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#fcd00e] mb-1">6,000+</div>
                                    <div className="text-sm text-white/80">Rivers & Streams</div>
                                </div>
                            </div>
                            
                            {/* Additional Facts */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#fcd00e] mb-1">5,000+</div>
                                    <div className="text-sm text-white/80">Lakes</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#fcd00e] mb-1">12</div>
                                    <div className="text-sm text-white/80">National Parks</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#fcd00e] mb-1">1,310</div>
                                    <div className="text-sm text-white/80">Mountain Peaks</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#fcd00e] mb-1">25+</div>
                                    <div className="text-sm text-white/80">Casinos</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Content - Improved Image Layout */}
                        <div className="relative">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {/* Column 1 */}
                                <div className="space-y-4">
                                    <div 
                                        ref={el => addToRefs(el, 0)}
                                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                                    >
                                        <div className="aspect-w-4 aspect-h-5">
                                            <img
                                                src="/assets/nepal/kathmandu.webp"
                                                alt="Kathmandu Valley"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="text-lg font-bold text-white">Kathmandu Valley</div>
                                            <div className="text-sm text-white/80">Cultural Heritage</div>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        ref={el => addToRefs(el, 1)}
                                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                                    >
                                        <div className="aspect-w-4 aspect-h-3">
                                            <img
                                                src="/assets/nepal/lumbini.webp"
                                                alt="Lumbini"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="text-lg font-bold text-white">Lumbini</div>
                                            <div className="text-sm text-white/80">Birthplace of Buddha</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Column 2 */}
                                <div className="space-y-4 mt-8">
                                    <div 
                                        ref={el => addToRefs(el, 2)}
                                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                                    >
                                        <div className="aspect-w-4 aspect-h-3">
                                            <img
                                                src="/assets/nepal/pokhara.webp"
                                                alt="Pokhara"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="text-lg font-bold text-white">Pokhara</div>
                                            <div className="text-sm text-white/80">City of Lakes</div>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        ref={el => addToRefs(el, 3)}
                                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                                    >
                                        <div className="aspect-w-4 aspect-h-5">
                                            <img
                                                src="/assets/nepal/chitwan.webp"
                                                alt="Chitwan"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="text-lg font-bold text-white">Chitwan</div>
                                            <div className="text-sm text-white/80">Wildlife Safari</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Column 3 */}
                                <div className="space-y-4 hidden md:block">
                                    <div 
                                        ref={el => addToRefs(el, 4)}
                                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                                    >
                                        <div className="aspect-w-4 aspect-h-4">
                                            <img
                                                src="/assets/nepal/raraLake.webp"
                                                alt="Rara Lake"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="text-lg font-bold text-white">Rara Lake</div>
                                            <div className="text-sm text-white/80">Nepal's Largest Lake</div>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        ref={el => addToRefs(el, 5)}
                                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                                    >
                                        <div className="aspect-w-4 aspect-h-4">
                                            <img
                                                src="/assets/nepal/Annapurna.webp"
                                                alt="Annapurna Range"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="text-lg font-bold text-white">Annapurna</div>
                                            <div className="text-sm text-white/80">Trekking Paradise</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Quote Section */}
                    <div className="mt-16 text-center max-w-4xl mx-auto">
                        <p className="text-white italic text-lg md:text-xl mb-4">
                            A place where every day is marked, and even more so: 366 festivals in 365 days. - "Unknown"
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                </svg>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;