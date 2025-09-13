import React, { useEffect, useRef } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { TourPackage, Currency } from '../../types/tourTypes';

gsap.registerPlugin(ScrollTrigger);

interface TourCardProps {
    tour: TourPackage;
    currency: Currency;
    index: number;
    isRecommended?: boolean;
    recommendationReason?: string;
    navigate: NavigateFunction;
}

const StatIcon: React.FC<{ icon: string; label: string; value: string; }> = ({ icon, label, value }) => (
    <div className="flex items-center space-x-2 text-sm text-neutral-600" aria-label={`${label}: ${value}`}>
        <span className="text-lg" role="img" aria-hidden="true">{icon}</span>
        <span>{value}</span>
    </div>
);

const TourCard: React.FC<TourCardProps> = ({ tour, currency, index, isRecommended, recommendationReason, navigate }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (el) {
            gsap.fromTo(el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: (index % 3) * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        }
    }, [index]);

    const getDifficultyClass = (difficulty: 'Easy' | 'Moderate' | 'Challenging') => {
        switch (difficulty) {
            case 'Easy': return 'bg-green-100 text-green-800 ring-1 ring-inset ring-green-200';
            case 'Moderate': return 'bg-yellow-100 text-yellow-800 ring-1 ring-inset ring-yellow-200';
            case 'Challenging': return 'bg-red-100 text-red-800 ring-1 ring-inset ring-red-200';
            default: return 'bg-gray-100 text-gray-800 ring-1 ring-inset ring-gray-200';
        }
    };

    const getPrice = (tour: TourPackage) => {
        return currency === 'USD' ? tour.priceUSD : tour.priceNPR;
    };

    return (
        <div
            ref={cardRef}
            className={`group relative flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden border ${isRecommended ? 'animate-glow border-transparent' : 'border-neutral-200'} cursor-pointer`}
            onClick={() => navigate(`/tour-packages/${tour.slug}`)}
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-dark px-3 py-1 rounded-full text-xs font-semibold shadow">{tour.category}</div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyClass(tour.difficulty)}`}>{tour.difficulty}</div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-brand-dark mb-3 line-clamp-2 leading-tight">{tour.title}</h3>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                    <StatIcon icon="⏱️" label="Duration" value={tour.duration} />
                    <StatIcon icon="👥" label="Group Size" value={tour.groupSize} />
                    <StatIcon icon="☀️" label="Best Season" value={tour.bestSeason} />
                </div>

                {isRecommended && recommendationReason && (
                    <div className="bg-yellow-50 text-yellow-900 p-3 my-2 rounded-lg text-sm transition-all duration-300 ring-1 ring-yellow-200">
                        <p><strong className="font-semibold">Nomad AI says:</strong> {recommendationReason}</p>
                    </div>
                )}

                <div className="mt-auto pt-4 border-t border-neutral-100">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-sm text-neutral-600">From</span>
                            <span className="text-xl font-extrabold text-brand-dark">{getPrice(tour)}</span>
                        </div>
                        <div className="bg-[#10362e] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 transform group-hover:scale-105">
                            View Details
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;