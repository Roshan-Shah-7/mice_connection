import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CallToActionSection: React.FC = () => {
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ctaRef.current) {
            gsap.fromTo(ctaRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={ctaRef} className="relative py-24 px-6 bg-gradient-to-br from-[#143a31] to-[#0f2821] overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 border-4 border-[#fcd00e] rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-64 h-64 border-4 border-[#fcd00e] rounded-full"></div>
                </div>
            </div>
            <div className="container mx-auto relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                        <div className="w-2 h-2 bg-[#fcd00e] rounded-full animate-pulse"></div>
                        <span className="text-[#fcd00e] font-medium text-sm">READY FOR ADVENTURE?</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Experience Nepal Like Never Before
                    </h2>
                    <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Whether you're seeking adventure, spiritual enlightenment, or cultural immersion,
                        Nepal offers experiences that will transform your perspective and create memories to last a lifetime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link to="/contact">
                            <button className="group relative bg-[#fcd00e] text-[#143a31] px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                <span className="relative z-10">Plan Your Visit</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </Link>
                    </div>
                    <div className="mt-16 flex flex-wrap justify-center gap-8">
                        <div className="flex items-center space-x-3 text-white/80">
                            <span className="text-2xl">🏔️</span>
                            <span className="text-sm">Adventure</span>
                        </div>
                        <div className="flex items-center space-x-3 text-white/80">
                            <span className="text-2xl">🏛️</span>
                            <span className="text-sm">Culture</span>
                        </div>
                        <div className="flex items-center space-x-3 text-white/80">
                            <span className="text-2xl">🌿</span>
                            <span className="text-sm">Nature</span>
                        </div>
                        <div className="flex items-center space-x-3 text-white/80">
                            <span className="text-2xl">🙏</span>
                            <span className="text-sm">Spirituality</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;