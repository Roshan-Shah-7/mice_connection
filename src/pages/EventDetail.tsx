import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { latestWorks } from '../data/latestWorkData';

gsap.registerPlugin(ScrollTrigger);

const EventDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const contentRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    const event = latestWorks.find((work) => work.slug === slug);

    useEffect(() => {
        // Hero section animation
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, scale: 1.1 },
                { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
            );
        }

        // Content animation
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current.children,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        }
    }, [event]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    if (!event) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center p-12 bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#10362e] to-[#fcd10b] rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h2>
                    <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
                        The event you're looking for doesn't exist or may have been moved.
                    </p>
                    <button
                        onClick={() => navigate('/events')}
                        className="px-8 py-4 bg-gradient-to-r from-[#10362e] to-[#1a4d42] text-white font-semibold rounded-xl hover:from-[#fcd10b] hover:to-[#f8d947] hover:text-[#10362e] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Browse All Events
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Enhanced Hero Section */}
            <section className="relative h-[70vh] md:h-[80vh] overflow-hidden" ref={heroRef}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />

                {/* Loading state for image */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-[#fcd10b] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                <img
                    src={event.image}
                    alt={event.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={handleImageLoad}
                />

                {/* Floating elements */}
                <div className="absolute top-1/4 right-10 w-4 h-4 bg-[#fcd10b] rounded-full opacity-60 animate-pulse z-20"></div>
                <div className="absolute bottom-1/3 left-8 w-6 h-6 bg-white/30 rounded-full opacity-40 animate-bounce z-20"></div>

                <div className="relative z-20 flex items-end justify-start h-full p-8 md:p-16">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                            <span className="w-2 h-2 bg-[#fcd10b] rounded-full mr-2 animate-pulse"></span>
                            <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
                                Featured Event
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            {event.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <svg className="w-5 h-5 mr-3 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <span className="font-semibold">{event.year}</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <svg className="w-5 h-5 mr-3 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-semibold">Kathmandu, Nepal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Enhanced Event Details Section */}
            <section className="container mx-auto px-6 py-16 -mt-20 relative z-30">
                <div
                    ref={contentRef}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
                >
                    {/* Decorative header */}
                    <div className="bg-gradient-to-r from-[#10362e] to-[#1a4d42] p-8">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <h2 className="text-3xl font-bold text-white">Event Overview</h2>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-[#fcd10b] rounded-full animate-pulse"></div>
                                <span className="text-white/80 font-medium">Active</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed text-xl mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                                {event.description}
                            </p>

                            {/* Additional content section */}
                            <div className="bg-gradient-to-r from-[#fcd10b]/10 to-[#10362e]/10 p-8 rounded-2xl border border-[#fcd10b]/20 mb-12">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                    </svg>
                                    Key Highlights
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    This event showcased our expertise in delivering exceptional experiences while maintaining
                                    the highest standards of professionalism and creativity. Our team ensured every detail was
                                    meticulously planned and executed to perfection.
                                </p>
                            </div>

                            {/* Enhanced detail images section */}
                            {event.detailImages && event.detailImages.length > 0 && (
                                <div className="space-y-16 mt-16">
                                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Event Gallery</h3>
                                    {event.detailImages.map((detail, index) => (
                                        <div
                                            key={index}
                                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                                } items-center gap-8 group`}
                                        >
                                            <div className="md:w-1/2">
                                                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                                    <img
                                                        src={detail.image}
                                                        alt={`Event detail ${index + 1}`}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2">
                                                <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                                                    <p className="text-gray-700 text-lg leading-relaxed">
                                                        {detail.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16 pt-8 border-t border-gray-200/50">
                                <button
                                    onClick={() => navigate('/managed-experiences')}
                                    className="px-10 py-4 bg-gradient-to-r from-[#10362e] to-[#1a4d42] text-white font-bold rounded-xl hover:from-[#fcd10b] hover:to-[#f8d947] hover:text-[#10362e] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
                                >
                                    <svg className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Events
                                </button>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="px-10 py-4 bg-gradient-to-r from-[#fcd10b] to-[#f8d947] text-[#10362e] font-bold rounded-xl hover:from-[#10362e] hover:to-[#1a4d42] hover:text-white transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
                                >
                                    Plan Your Event
                                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventDetail;