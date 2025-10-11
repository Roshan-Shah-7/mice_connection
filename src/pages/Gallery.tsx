import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Service type
type Service = {
    id: number;
    name: string;
    details?: string;
    highlights?: string[];
    imageUrl: string;
};

const services: Service[] = [
    { id: 1, name: 'The Unsilenced: Documentary', imageUrl: '/assets/gallery/Unsilenced.webp', details: 'A powerful documentary about the untold stories.' },
    { id: 2, name: 'Chinese Ambassador, economist Mr. Wu Xiabo', imageUrl: '/assets/gallery/ch1.webp', details: 'A Seminar on Economic Challenges and Opportunities and A Cultural Exchange Event.' },
    { id: 6, name: 'City Image Show Case', imageUrl: '/assets/gallery/event.webp', details: 'Charming Guangzhou Meets Nepal City Image Show Case. Screening of the Guangzhou City Image Film.' },
    { id: 7, name: 'Everest Summiteers Summit', imageUrl: '/assets/gallery/everest.webp', details: 'A gathering of the brave souls who conquered Everest.' },
    { id: 11, name: 'Himalayan Guardian Nepal', imageUrl: '/assets/gallery/hgn3.webp', details: 'Launch Event of The Himalayan Guardian Nepal.' },
    { id: 12, name: 'Honoring Li Shengtao', imageUrl: '/assets/gallery/horing1.webp', details: 'A tribute to the remarkable achievements of Li Shengtao for successfully flying from Mt. Everest.' },
    { id: 16, name: 'Ladies Tour in Nepal', imageUrl: '/assets/gallery/lades2.webp', details: 'Inspiring moments from our ladies-focused gathering.' },
    { id: 18, name: 'Mr. Namdoe and Family', imageUrl: '/assets/gallery/mr-namdoe.webp', details: 'A cherished family moment with Mr. Namdoe and his loved ones.' },
    { id: 20, name: 'Mr. Suresh and Family', imageUrl: '/assets/gallery/mr-suresh.webp', details: 'Joyful moments with Mr. Suresh and his family.' },
    { id: 22, name: 'Women\'s Volleyball Match', imageUrl: '/assets/gallery/volly.webp', details: 'Lalitpur Queens, winners of TMC in Everest Women\'s Volleyball League.' },
    { id: 23, name: 'Wedding Celebration', imageUrl: '/assets/gallery/wedding.webp', details: 'A beautiful wedding celebration capturing joyful moments.' },
];

const getCardDimensions = (index: number) => {
    const sizes = [
        { width: 'w-full', height: 'h-auto' }, // Use h-auto for aspect ratio
        { width: 'w-full', height: 'h-auto' },
        { width: 'w-full', height: 'h-auto' },
        { width: 'w-full', height: 'h-auto' },
    ];
    return sizes[index % sizes.length];
};

// Memoized Gallery Card for Performance Optimization
const GalleryCard = React.memo(({ service, index, setCardRef, onCardClick }: {
    service: Service;
    index: number;
    setCardRef: (index: number) => (el: HTMLDivElement | null) => void;
    onCardClick: (service: Service) => void;
}) => {
    const { width } = getCardDimensions(index);

    return (
        <div
            ref={setCardRef(index)}
            className={`break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white mx-auto ${width} cursor-pointer 
            hover:scale-105 hover:drop-shadow-2xl duration-500 ease-in-out transform`}
            onClick={() => onCardClick(service)}
            tabIndex={0}
            aria-label={`View details for ${service.name}`}
            role="button"
        >
            <div className="relative overflow-hidden">
                <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="reveal-mask absolute inset-0 bg-white z-30"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end">
                <span className="text-white text-lg font-semibold drop-shadow">{service.name}</span>
            </div>
        </div>
    );
});


const GalleryPage: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Memoized ref setter for performance
    const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
        cardRefs.current[index] = el;
    }, []);

    // GSAP animations
    useEffect(() => {
        if (!galleryRef.current) return;

        // Ensure cardRefs are populated before setting up animations
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        if (cards.length === 0) return;

        const masks = cards.map(card => card.querySelector('.reveal-mask')).filter(Boolean) as HTMLElement[];
        gsap.set(masks, { y: 0 });

        const batchAnimation = gsap.to(masks, {
            y: '100%',
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: galleryRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            }
        });

        return () => {
            batchAnimation.scrollTrigger?.kill();
        };
    }, []);

    // Modal outside click
    useEffect(() => {
        if (!selectedService) return;
        const handleOutsideClick = (e: MouseEvent) => {
            if (e.target instanceof Element && !e.target.closest('.modal-content')) {
                setSelectedService(null);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [selectedService]);

    // Accessibility: scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCardClick = useCallback((service: Service) => {
        setSelectedService(service);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative py-24 md:py-32 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/assets/gallery/GalleryHero.webp')" }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
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
                        {services.map((service, index) => (
                            <GalleryCard
                                key={service.id}
                                service={service}
                                index={index}
                                setCardRef={setCardRef}
                                onCardClick={handleCardClick}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
                    <div className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-2xl font-bold text-[#133830]">{selectedService.name}</h2>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedService(null);
                                    }}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                                    aria-label="Close modal"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mb-6">
                                <div className="h-96 rounded-xl bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${selectedService.imageUrl})` }} />
                            </div>
                            {selectedService.details && (
                                <div className="mb-4 text-gray-700">{selectedService.details}</div>
                            )}
                            {selectedService.highlights && (
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {selectedService.highlights.map((hl, idx) => (
                                        <li key={idx}>{hl}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;