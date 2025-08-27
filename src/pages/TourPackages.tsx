import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const toSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
};

export interface TourPackage {
    id: number;
    title: string;
    description: string;
    duration: string;
    priceUSD: string;
    priceNPR: string;
    image: string;
    category: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    highlights: string[];
    includes: string[];
    groupSize: string;
    bestSeason: string;
    itinerary: { day: number; title: string; description: string; }[];
    gallery: string[];
    slug?: string;
}


import { tourPackages } from '../data/tourPackagesData';

const TourPackages: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const packagesRef = useRef<HTMLDivElement>(null);
    const categoriesRef = useRef<HTMLDivElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);
    const bookingRef = useRef<HTMLDivElement>(null);
    const [currency, setCurrency] = useState<'USD' | 'NPR'>('USD');

    const categories = [
        { name: "All", icon: "🌍", count: tourPackages.length },
        { name: "Trekking", icon: "🏔️", count: tourPackages.filter(p => p.category === "Trekking").length },
        { name: "Cultural", icon: "🏛️", count: tourPackages.filter(p => p.category === "Cultural").length },
        { name: "Adventure", icon: "🪂", count: tourPackages.filter(p => p.category === "Adventure").length },
        { name: "Wildlife", icon: "🦒", count: tourPackages.filter(p => p.category === "Wildlife").length },
        { name: "Spiritual", icon: "🙏", count: tourPackages.filter(p => p.category === "Spiritual").length }
    ];

    useEffect(() => {
        // Hero animation
        if (heroRef.current) {
            gsap.fromTo(heroRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
        }

        // Categories animation
        if (categoriesRef.current) {
            gsap.fromTo(categoriesRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: categoriesRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }

        // Packages animation
        if (packagesRef.current) {
            gsap.fromTo(packagesRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: packagesRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }

        // Featured animation
        if (featuredRef.current) {
            gsap.fromTo(featuredRef.current.children,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: featuredRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }

        // Booking animation
        if (bookingRef.current) {
            gsap.fromTo(bookingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: bookingRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
    }, []);

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy': return 'bg-green-500';
            case 'Moderate': return 'bg-yellow-500';
            case 'Challenging': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const getPrice = (tour: TourPackage) => {
        return currency === 'USD' ? tour.priceUSD : tour.priceNPR;
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Modern Hero Section - Different Design */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#fcd00e]/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#143a31]/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#fcd00e]/30 to-[#143a31]/30 rounded-full blur-2xl animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full">
                    <div className="container mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#143a31] to-[#0f2821] text-white rounded-full px-6 py-3 shadow-lg">
                                    <div className="w-3 h-3 bg-[#fcd00e] rounded-full animate-pulse"></div>
                                    <span className="font-medium">DISCOVER NEPAL TOURS</span>
                                </div>

                                {/* Main Title with Split Design */}
                                <div className="space-y-2">
                                    <h1 className="text-6xl md:text-7xl font-bold text-[#143a31] leading-tight">
                                        Explore Nepal's
                                    </h1>
                                    <h1 className="text-6xl md:text-7xl font-bold text-[#fcd00e] leading-tight">
                                        Hidden Treasures
                                    </h1>
                                </div>

                                {/* Subtitle */}
                                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                                    Embark on unforgettable journeys through majestic Himalayas, ancient temples, and vibrant cultures.
                                    Your adventure of a lifetime awaits in the heart of the Himalayas.
                                </p>

                                {/* Interactive Stats */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                        <div className="text-3xl font-bold text-[#143a31] group-hover:text-[#fcd00e] transition-colors duration-300 mb-1">20+</div>
                                        <div className="text-sm text-gray-600">Tour Packages</div>
                                    </div>
                                    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                        <div className="text-3xl font-bold text-[#143a31] group-hover:text-[#fcd00e] transition-colors duration-300 mb-1">98%</div>
                                        <div className="text-sm text-gray-600">Happy Travelers</div>
                                    </div>
                                    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                        <div className="text-3xl font-bold text-[#143a31] group-hover:text-[#fcd00e] transition-colors duration-300 mb-1">24/7</div>
                                        <div className="text-sm text-gray-600">Support</div>
                                    </div>
                                </div>

                                {/* Modern CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="group relative bg-gradient-to-r from-[#143a31] to-[#0f2821] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                                        <span className="relative z-10">Explore Tours</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#fcd00e] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                    <button className="group relative bg-white text-[#143a31] px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-[#143a31] overflow-hidden">
                                        <span className="relative z-10">Custom Tour</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#143a31] to-[#0f2821] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </button>
                                </div>
                            </div>

                            {/* Right Content - Modern Card Stack */}
                            <div className="relative">
                                <div className="relative">
                                    {/* Main Card */}
                                    <div className="relative bg-white rounded-3xl shadow-2xl p-2 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                                        <img
                                            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                            alt="Everest Base Camp"
                                            className="w-full h-80 object-cover rounded-2xl"
                                        />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                                                <h3 className="font-bold text-[#143a31]">Everest Base Camp</h3>
                                                <div className="flex justify-between items-center mt-2">
                                                    <span className="text-sm text-gray-600">14 Days</span>
                                                    <span className="font-bold text-[#fcd00e]">{getPrice(tourPackages[0])}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Cards */}
                                    <div className="absolute -top-8 -left-8 w-48 h-32 bg-gradient-to-br from-[#fcd00e] to-yellow-400 rounded-2xl shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500 p-4">
                                        <div className="text-white text-sm font-bold">Popular Tours</div>
                                        <div className="text-white/80 text-xs mt-1">Starting from {getPrice(tourPackages[2])}</div>
                                    </div>

                                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#143a31] to-[#0f2821] rounded-full shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="text-2xl font-bold">20+</div>
                                            <div className="text-xs">Packages</div>
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-[#fcd00e]/30 rounded-full animate-spin-slow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Modern Categories Section */}
            <section ref={categoriesRef} className="relative py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#143a31] mb-4">Choose Your Adventure Type</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Select your preferred category to discover the perfect tour experience
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#fcd00e]"
                            >
                                <div className="text-center">
                                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                                    <div className="font-bold text-[#143a31] text-lg mb-1">{category.name}</div>
                                    <div className="text-sm text-gray-500">{category.count} tours available</div>
                                </div>
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#fcd00e] group-hover:w-full transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Tour Packages Section */}
            <section ref={packagesRef} className="relative py-16 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#143a31] mb-4">Featured Tour Packages</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Handpicked tours that showcase the best of Nepal's natural beauty and cultural heritage
                        </p>
                    </div>

                    {/* Currency Toggle */}
                    <div className="mb-10 m-auto w-fit">
                        <div className="bg-white rounded-full shadow-lg p-1 flex border border-gray-200">
                            <button
                                onClick={() => setCurrency('USD')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${currency === 'USD'
                                    ? 'bg-[#143a31] text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <span className="mr-1">$</span> USD
                            </button>
                            <button
                                onClick={() => setCurrency('NPR')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${currency === 'NPR'
                                    ? 'bg-[#143a31] text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <span className="mr-1">₨</span> NPR
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tourPackages.map((tour) => (
                            <div key={tour.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                                {/* Image with Overlay */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-[#fcd00e] text-[#143a31] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        {tour.category}
                                    </div>

                                    {/* Difficulty Badge */}
                                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                                        <div className={`w-2 h-2 rounded-full ${getDifficultyColor(tour.difficulty)}`}></div>
                                        <span className="text-white text-xs">{tour.difficulty}</span>
                                    </div>

                                    {/* Price and Duration */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <div className="text-white text-sm opacity-80">{tour.duration}</div>
                                                <div className="text-white text-2xl font-bold">{getPrice(tour)}</div>
                                            </div>
                                            <div className="text-white text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                                                {tour.groupSize}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#143a31] mb-3">{tour.title}</h3>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                                        <span>⏱️</span>
                                        <span>{tour.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                                        <span>👥</span>
                                        <span>{tour.groupSize}</span>
                                    </div>

                                    {/* Action Button */}
                                    <a href={`/tour-packages/${toSlug(tour.title)}`} className="w-full">
                                        <button className="w-full bg-gradient-to-r from-[#143a31] to-[#0f2821] text-white py-3 rounded-lg font-semibold hover:from-[#fcd00e] hover:to-yellow-400 hover:text-[#143a31] transition-all duration-300">
                                            View Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Featured Tours Section */}
            <section ref={featuredRef} className="relative py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#fcd00e] to-yellow-400 text-[#143a31] rounded-full px-6 py-3 mb-4 shadow-lg">
                            <span className="font-medium">MOST POPULAR</span>
                        </div>
                        <h2 className="text-4xl font-bold text-[#143a31] mb-4">Top Selling Tours</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our most sought-after experiences that travelers love the most
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Featured Tour 1 */}
                        <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="relative h-80">
                                <img
                                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Everest Base Camp"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    BESTSELLER
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-[#143a31]">Everest Base Camp Trek</h3>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-[#fcd00e]">{getPrice(tourPackages[0])}</div>
                                        <div className="text-sm text-gray-500">per person</div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    The ultimate trekking adventure to the base camp of the world's highest mountain.
                                    Experience breathtaking views and rich Sherpa culture.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#fcd00e]">⏱️</span>
                                        <span className="text-sm text-gray-600">14 Days</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#fcd00e]">🏔️</span>
                                        <span className="text-sm text-gray-600">5,545m Max</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#fcd00e]">👥</span>
                                        <span className="text-sm text-gray-600">2-12 people</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#fcd00e]">🎯</span>
                                        <span className="text-sm text-gray-600">Challenging</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-[#143a31] to-[#0f2821] text-white py-3 rounded-lg font-semibold hover:from-[#fcd00e] hover:to-yellow-400 hover:text-[#143a31] transition-all duration-300">
                                    Book This Tour
                                </button>
                            </div>
                        </div>

                        {/* Featured Tour 2 */}
                        <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="relative h-80">
                                <img
                                    src="/public/assets/nepal/kathmandu.webp"
                                    alt="Kathmandu Valley"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    FAMILY FRIENDLY
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-[#143a31]">Kathmandu Valley Cultural Tour</h3>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-[#fcd00e]">{getPrice(tourPackages[2])}</div>
                                        <div className="text-sm text-gray-500">per person</div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Explore the rich cultural heritage of Kathmandu Valley with its ancient temples,
                                    palaces, and vibrant local culture.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#fcd00e]">⏱️</span>
                                        <span className="text-sm text-gray-600">5 Days</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#fcd00e]">🏛️</span>
                                        <span className="text-sm text-gray-600">7 UNESCO Sites</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#fcd00e]">👥</span>
                                        <span className="text-sm text-gray-600">2-20 people</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#fcd00e]">🎯</span>
                                        <span className="text-sm text-gray-600">Easy</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-[#143a31] to-[#0f2821] text-white py-3 rounded-lg font-semibold hover:from-[#fcd00e] hover:to-yellow-400 hover:text-[#143a31] transition-all duration-300">
                                    Book This Tour
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern Booking Section */}
            <section ref={bookingRef} className="relative py-16 px-6 bg-gradient-to-br from-[#143a31] to-[#0f2821] overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 border-4 border-[#fcd00e] rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-64 h-64 border-4 border-[#fcd00e] rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                            <div className="w-3 h-3 bg-[#fcd00e] rounded-full animate-pulse"></div>
                            <span className="text-[#fcd00e] font-medium">READY FOR ADVENTURE?</span>
                        </div>

                        <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                            Book Your Dream Tour Today
                        </h2>

                        <p className="text-xl text-white/90 mb-12 leading-relaxed">
                            Start your Nepalese adventure with confidence. Our expert team is here to help you create unforgettable memories in the Himalayas.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#fcd00e]/50 transition-all duration-300">
                                <div className="w-16 h-16 bg-[#fcd00e]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fcd00e]/30 transition-colors duration-300">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Expert Guidance</h3>
                                <p className="text-white/80 text-sm">Professional guides with years of experience</p>
                            </div>
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#fcd00e]/50 transition-all duration-300">
                                <div className="w-16 h-16 bg-[#fcd00e]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fcd00e]/30 transition-colors duration-300">
                                    <span className="text-2xl">💰</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Best Price Guarantee</h3>
                                <p className="text-white/80 text-sm">Competitive prices with no hidden fees</p>
                            </div>
                            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#fcd00e]/50 transition-all duration-300">
                                <div className="w-16 h-16 bg-[#fcd00e]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fcd00e]/30 transition-colors duration-300">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Safe & Secure</h3>
                                <p className="text-white/80 text-sm">Your safety is our top priority</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            {/* <button className="group relative bg-[#fcd00e] text-[#143a31] px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden">
                                <span className="relative z-10">Book Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button> */}
                            <a href="/contact">
                                <button className="group relative bg-transparent border-2 border-[#fcd00e] text-[#fcd00e] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#fcd00e] hover:text-[#143a31] transition-all duration-300 transform hover:scale-105 overflow-hidden">
                                    <span className="relative z-10">Contact Us</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#fcd00e] to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourPackages;