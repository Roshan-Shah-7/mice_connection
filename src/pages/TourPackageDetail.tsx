import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { tourPackages } from '../data/tourPackagesData';
import type { TourPackage } from '../types/tourTypes';

const TourPackageDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [tour, setTour] = useState<TourPackage | undefined>(undefined);
    const [currency, setCurrency] = useState<'USD' | 'NPR'>('USD');
    const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'gallery'>('overview');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [location.pathname]); // Trigger on route path change


    useEffect(() => {
        const foundTour = tourPackages.find(p => p.slug === slug);
        setTour(foundTour);
    }, [slug]);

    if (!tour) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <p className="text-xl text-gray-700 mb-4">Tour package not found.</p>
                    <Link to="/tour-packages" className="inline-block px-6 py-3 bg-[#143a31] text-white rounded-lg hover:bg-[#0f2821] transition-colors">
                        Back to Tour Packages
                    </Link>
                </div>
            </div>
        );
    }

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

    const openLightbox = (image: string) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 flex items-end">
                    <div className="container mx-auto px-6 pb-8 text-white">
                        <div className="mb-4">
                            <Link to="/tour-packages" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Tours
                            </Link>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">{tour.title}</h1>
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-1 text-[#fcd00e]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {tour.duration}
                            </span>
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-1 text-[#fcd00e]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                </svg>
                                {getPrice(tour)}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getDifficultyColor(tour.difficulty)}`}>
                                {tour.difficulty}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-6">
                    <div className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview'
                                ? 'border-[#143a31] text-[#143a31]'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('itinerary')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'itinerary'
                                ? 'border-[#143a31] text-[#143a31]'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Itinerary
                        </button>
                        {/* <button
                            onClick={() => setActiveTab('gallery')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'gallery'
                                ? 'border-[#143a31] text-[#143a31]'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Gallery
                        </button> */}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Description & Itinerary */}
                    <div className="lg:col-span-2">
                        {activeTab === 'overview' && (
                            <>
                                <h2 className="text-3xl font-bold text-[#143a31] mb-6">Overview</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">{tour.description}</p>

                                <h3 className="text-2xl font-bold text-[#143a31] mb-4">Highlights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {tour.highlights.map((item: string, index: number) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-6 h-6 rounded-full bg-[#fcd00e]/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-[#143a31]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="ml-3 text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-[#143a31] mb-4">What's Included</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {tour.includes.map((item: string, index: number) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-6 h-6 rounded-full bg-[#fcd00e]/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-[#143a31]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="ml-3 text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === 'itinerary' && (
                            <>
                                <h2 className="text-3xl font-bold text-[#143a31] mb-6">Detailed Itinerary</h2>
                                <div className="space-y-6">
                                    {tour.itinerary.map((day: { day: number; title: string; description: string; }, index: number) => (
                                        <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                            <div className="bg-[#f9f9f9] px-6 py-4 border-b border-gray-200">
                                                <h3 className="text-xl font-semibold text-[#143a31]">Day {day.day}: {day.title}</h3>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-gray-700">{day.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === 'gallery' && (
                            <>
                                <h2 className="text-3xl font-bold text-[#143a31] mb-6">Tour Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {tour.gallery.map((image: string, index: number) => (
                                        <div
                                            key={index}
                                            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
                                            onClick={() => openLightbox(image)}
                                        >
                                            <img
                                                src={image}
                                                alt={`Gallery image ${index + 1}`}
                                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right Column - Quick Facts & Booking */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 sticky top-28">
                            {/* Currency Toggle */}
                            <div className="w-fit mb-4">
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
                            <h3 className="text-2xl font-bold text-[#143a31] mb-6">Quick Facts</h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-semibold text-gray-700">Duration:</span>
                                    <span className="text-gray-600">{tour.duration}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-semibold text-gray-700">Category:</span>
                                    <span className="text-gray-600">{tour.category}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-semibold text-gray-700">Difficulty:</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getDifficultyColor(tour.difficulty)}`}>
                                        {tour.difficulty}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-semibold text-gray-700">Group Size:</span>
                                    <span className="text-gray-600">{tour.groupSize}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-semibold text-gray-700">Best Season:</span>
                                    <span className="text-gray-600">{tour.bestSeason}</span>
                                </div>
                            </div>

                            <div className="mb-6 p-4 bg-[#f9f9f9] rounded-lg">
                                <h4 className="font-semibold text-[#143a31] mb-2">Need Help?</h4>
                                <p className="text-gray-600 text-sm mb-3">Our travel experts are ready to help you plan your perfect trip.</p>
                                <div className="flex items-center text-sm text-[#143a31]">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    +977-9851363229
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-[#143a31]">Price:</span>
                                    <span className="text-3xl font-bold text-[#fcd00e]">{getPrice(tour)}</span>
                                </div>
                                <Link to="/contact" className="cursor-pointer">
                                    <button className="w-full bg-gradient-to-r from-[#143a31] to-[#0f2821] text-white py-4 rounded-lg font-semibold text-lg hover:from-[#fcd00e] hover:to-yellow-400 hover:text-[#143a31] transition-all duration-300 shadow-md">
                                        Book This Tour Now
                                    </button>
                                </Link>
                                <p className="text-center text-gray-500 text-xs mt-3">No booking fees • Best price guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                            onClick={closeLightbox}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TourPackageDetail;