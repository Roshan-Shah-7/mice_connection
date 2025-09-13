import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define type for service
type Service = {
    id: number;
    name: string;
    category: string;
    description: string;
    details?: string;
    highlights?: string[];
    imageUrl: string;
};

const GalleryPage: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const galleryRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Helper function to set refs properly
    const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
        cardRefs.current[index] = el;
    };

    const services: Service[] = [
        {
            id: 1,
            name: 'The Unsilenced: Documentary',
            category: 'event',
            description: 'Iconic landmarks with expert storytelling',
            details: 'Our sightseeing tours take you to the most iconic landmarks with expert guides who bring history to life. Experience the culture, architecture, and stories behind each destination.',
            highlights: ['Expert local guides', 'Skip-the-line access', 'Small group sizes', 'Multilingual options'],
            imageUrl: '/assets/gallery/Unsilenced.webp'
        },
        {
            id: 2,
            name: 'HONORING CHINESE PARAGLIDER IN NEPAL',
            category: 'event',
            description: 'Conquer peaks with breathtaking vistas',
            details: 'Challenge yourself with our trekking adventures that take you to breathtaking mountain peaks. Our experienced guides ensure your safety while you enjoy stunning vistas.',
            highlights: ['Certified mountain guides', 'All equipment provided', 'Accommodation included', 'Meals during trek'],
            imageUrl: '/public/assets/about/About2.webp'
        },
        {
            id: 3,
            name: 'Seminar',
            category: 'seminar',
            description: 'Opulent experiences in exclusive destinations',
            details: 'Indulge in the finest experiences with our luxury tours. Stay in exclusive properties, enjoy private transfers, and savor gourmet dining experiences.',
            highlights: ['5-star accommodations', 'Private transfers', 'Personal concierge', 'Exclusive access'],
            imageUrl: '/public/assets/about/About3.webp'
        },
        {
            id: 4,
            name: 'Seminar',
            category: 'seminar',
            description: 'Holistic rejuvenation in serene settings',
            details: 'Rejuvenate your mind, body, and soul at our wellness retreats. Experience holistic therapies, meditation sessions, and wellness workshops in serene settings.',
            highlights: ['Spa treatments', 'Yoga and meditation', 'Nutrition workshops', 'Wellness consultations'],
            imageUrl: '/public/assets/about/About4.webp'
        },
    ];

    // Set up GSAP animations
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Reset all masks to closed position (covering the entire card from top)
            cardRefs.current.forEach((card) => {
                if (card) {
                    const mask = card.querySelector('.reveal-mask') as HTMLElement;
                    if (mask) {
                        gsap.set(mask, {
                            y: 0,
                        });
                    }
                }
            });

            // Create scroll-triggered animations
            cardRefs.current.forEach((card) => {
                if (card) {
                    const mask = card.querySelector('.reveal-mask') as HTMLElement;
                    if (mask) {
                        gsap.to(mask, {
                            y: '100%',
                            duration: 1.5,
                            ease: 'power4.out',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                                end: 'bottom 15%',
                                toggleActions: 'play none none reverse',
                            }
                        });
                    }
                }
            });

            // Cleanup function
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, []);

    // Close modal when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (selectedService && e.target instanceof Element) {
                if (e.target.closest('.modal-content') === null) {
                    setSelectedService(null);
                }
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [selectedService]);

    // Handle mouse movement for eye icon
    const handleMouseMove = (e: React.MouseEvent, index: number) => {
        if (hoveredCard === index && cardRefs.current[index]) {
            const card = cardRefs.current[index];
            if (card) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Smooth animation with GSAP
                gsap.to(eyePosition, {
                    x,
                    y,
                    duration: 0.2,
                    ease: "power2.out",
                    onUpdate: () => {
                        setEyePosition({ ...eyePosition });
                    }
                });
            }
        }
    };

    // Get varying dimensions for Pinterest style
    const getCardDimensions = (index: number) => {
        // Define different card sizes
        const sizes = [
            { width: 'w-full', height: 'h-64' },    // Small
            { width: 'w-full', height: 'h-80' },    // Medium
            { width: 'w-full', height: 'h-96' },    // Large
            { width: 'w-full', height: 'h-72' },    // Medium-small
        ];

        return sizes[index % sizes.length];
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [location.pathname]); // Trigger on route path change


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative py-24 md:py-32 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/gallery/GalleryHero.webp')"
                    }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 text-center mt-10">
                    <div className="inline-block px-6 py-3 bg-[#fcd00d] text-[#133830] rounded-full mb-8 font-bold transform -rotate-3">
                        THE MICE CONNECTION
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
                        EXPERIENCE
                        <span className="block text-[#fcd00d] mt-4">GALLERY</span>
                    </h1>
                    <div className="w-32 h-1 bg-[#fcd00d] mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl text-[#e0e0e0] max-w-3xl mx-auto font-light">
                        Curated journeys that transcend ordinary travel experiences
                    </p>
                </div>
            </div>

            {/* Pinterest Gallery */}
            <div ref={galleryRef} className="py-16">
                <div className="container mx-auto px-4">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {services.map((service, index) => {
                            const { width, height } = getCardDimensions(index);
                            return (
                                <div
                                    key={service.id}
                                    ref={setCardRef(index)}
                                    className={`break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white mx-auto ${width}`}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onClick={() => setSelectedService(service)}
                                >
                                    {/* Image container */}
                                    <div className="relative overflow-hidden">
                                        {/* Image background with varying heights for Pinterest style */}
                                        <div className={`w-full ${height} bg-cover bg-center`} style={{ backgroundImage: `url(${service.imageUrl})` }}>

                                            {/* Category badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-block px-3 py-1 bg-white bg-opacity-90 text-[#133830] rounded-full text-xs font-bold uppercase tracking-wider">
                                                    {service.category}
                                                </span>
                                            </div>

                                            {/* Eye icon that follows mouse */}
                                            {hoveredCard === index && (
                                                <div
                                                    className="absolute z-20 pointer-events-none"
                                                    style={{
                                                        left: `${eyePosition.x}px`,
                                                        top: `${eyePosition.y}px`,
                                                        transform: 'translate(-50%, -50%)'
                                                    }}
                                                >
                                                    <div className="bg-white bg-opacity-90 rounded-full p-2 shadow-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#133830]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Reveal mask - positioned at the top */}
                                    <div className="reveal-mask absolute inset-0 bg-white z-30"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
                    <div className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-[#133830] bg-opacity-10 text-white rounded-full text-xs font-bold mb-3">
                                        {selectedService.category.toUpperCase()}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#133830]">{selectedService.name}</h2>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedService(null);
                                    }}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mb-6">
                                <div className="h-150 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${selectedService.imageUrl})` }}>
                                </div>
                            </div>
                            {/* <div className="mb-6">
                                <h3 className="text-lg font-bold text-[#133830] mb-3">Overview</h3>
                                <p className="text-gray-600">{selectedService.details || selectedService.description}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-[#133830] text-white font-bold rounded-lg hover:bg-[#0a1f1a] transition duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Inquire Now
                                </button>
                                <button className="px-6 py-3 bg-[#fcd00d] text-[#133830] font-bold rounded-lg hover:bg-[#e6bb0c] transition duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Book Experience
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;