import React, { useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { aboutNepalDestinations, type Destination } from '../data/aboutNepalDestinationsData';
import { tourPackages } from '../data/tourPackagesData';

const DetailDestination: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const destination: Destination | undefined = aboutNepalDestinations.find(dest =>
        (dest.relatedTourPackageSlug === slug) ||
        (dest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '') === slug)
    );

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [location.pathname]); // Trigger on route path change


    useEffect(() => {
        if (!destination) {
            navigate('/404');
        }
    }, [destination, navigate]);

    if (!destination) {
        return null;
    }

    const relatedPackages = tourPackages.filter(pkg => pkg.slug === destination.relatedTourPackageSlug);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10362e]/90 to-[#10362e]/40 z-10"></div>
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-[60vh] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                {destination.name}
                            </h1>
                            <div className="w-24 h-1 bg-[#fcd10b] mb-6"></div>
                            <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
                                {destination.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            {destination.descriptionDetail || destination.description}
                        </p>
                    </div>

                    {/* Highlights Section */}
                    {destination.highlights && destination.highlights.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#10362e] mb-8 relative inline-block">
                                Key Highlights
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#fcd10b] rounded-full"></span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {destination.highlights.map((highlight, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start p-4 bg-gradient-to-r from-[#10362e]/5 to-transparent rounded-xl border-l-4 border-[#fcd10b] hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="bg-[#fcd10b] rounded-full p-2 mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-[#10362e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 text-lg">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related Tour Packages Section */}
                    {relatedPackages.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-[#10362e] mb-8 relative inline-block">
                                Explore Related Tour Packages
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#fcd10b] rounded-full"></span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedPackages.map(pkg => (
                                    <div
                                        key={pkg.id}
                                        className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-[#fcd10b]"
                                    >
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={pkg.image}
                                                alt={pkg.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 right-4 bg-[#fcd10b] text-[#10362e] font-bold py-1 px-3 rounded-full text-sm z-10">
                                                {pkg.duration}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#10362e] mb-3 group-hover:text-[#fcd10b] transition-colors duration-300">
                                                {pkg.title}
                                            </h3>
                                            <p className="text-gray-600 mb-5 line-clamp-2">
                                                {pkg.description.substring(0, 100)}...
                                            </p>
                                            <Link
                                                to={`/tour-packages/${pkg.slug}`}
                                                className="inline-flex items-center text-[#10362e] font-semibold hover:text-[#fcd10b] transition-colors duration-300"
                                            >
                                                View Details
                                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Back Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 bg-[#10362e] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#fcd10b] hover:text-[#10362e] hover:shadow-lg"
                    >
                        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Destinations
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailDestination;