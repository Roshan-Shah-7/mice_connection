import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutNepalDestinations } from '../../data/aboutNepalDestinationsData';

gsap.registerPlugin(ScrollTrigger);

const DestinationsSection: React.FC = () => {
    const navigate = useNavigate();
    const destinationsRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (destinationsRef.current) {
            gsap.fromTo(destinationsRef.current.children,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: destinationsRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }

        // Add hover animations for each card
        cardsRef.current.forEach((card) => {
            if (card) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
                });
            }
        });
    }, []);

    // Add to cards ref array
    const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current[index] = el;
        }
    };

    return (
        <section ref={destinationsRef} className="relative py-24 px-6 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#143a31]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fcd00e]/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/10 rounded-full px-4 py-2 mb-6">
                        <span className="text-[#143a31] font-medium text-sm">MUST-VISIT DESTINATIONS</span>
                    </div>
                    <h2 className="text-5xl font-bold text-[#143a31] mb-6">Explore Nepal's Treasures</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From ancient cities to breathtaking mountain vistas, discover the diverse wonders that await you in this Himalayan paradise
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutNepalDestinations.map((destination, index) => (
                        <div
                            ref={el => addToCardsRef(el, index)}
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                            onClick={() => {
                                const detailSlug = destination.relatedTourPackageSlug || destination.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '');
                                navigate(`/detaildestation/${detailSlug}`);
                            }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#143a31]/90 via-[#143a31]/50 to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-[#fcd00e] text-[#143a31] px-3 py-1 rounded-full text-xs font-bold">
                                    #{index + 1}
                                </div>
                                <div className="absolute top-4 left-4 bg-[#143a31] text-white px-3 py-1 rounded-full text-xs font-bold">
                                    {destination.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-[#143a31]">{destination.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {destination.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {destination.highlights && destination.highlights.slice(0, 3).map((highlight, idx) => (
                                        <span key={idx} className="bg-[#fcd00e]/20 text-[#143a31] px-3 py-1 rounded-full text-xs">
                                            {highlight}
                                        </span>
                                    ))}
                                    {destination.highlights && destination.highlights.length > 3 && (
                                        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs">
                                            +{destination.highlights.length - 3} more
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        <span className="text-[#fcd00e]">★</span> {destination.rating}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        Best time: {destination.bestTime}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Information Section */}
                <div className="mt-20 bg-gradient-to-r from-[#143a31]/5 to-[#fcd00e]/5 rounded-2xl p-8">
                    <h3 className="text-3xl font-bold text-[#143a31] mb-6 text-center">Why Visit Nepal?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="text-4xl mb-4">🏔️</div>
                            <h4 className="text-xl font-bold text-[#143a31] mb-2">Mountain Majesty</h4>
                            <p className="text-gray-600">Home to 8 of the world's 14 highest peaks, including Mount Everest, the highest point on Earth at 8,848 meters.</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="text-4xl mb-4">🕌</div>
                            <h4 className="text-xl font-bold text-[#143a31] mb-2">Cultural Heritage</h4>
                            <p className="text-gray-600">10 UNESCO World Heritage Sites showcasing rich Buddhist and Hindu traditions dating back millennia.</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="text-4xl mb-4">🐅</div>
                            <h4 className="text-xl font-bold text-[#143a31] mb-2">Wildlife Diversity</h4>
                            <p className="text-gray-600">12 national parks protecting endangered species like Bengal tigers and one-horned rhinoceroses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationsSection;