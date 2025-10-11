import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { latestWorks } from '../data/latestWorkData';

gsap.registerPlugin(ScrollTrigger);

const EventDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const contentRef = useRef<HTMLDivElement>(null);

    const event = latestWorks.find((work) => work.slug === slug);

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current.children,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
            );
        }
    }, [event]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [location.pathname]); // Trigger on route path change



    if (!event) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center p-8 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Not Found</h2>
                    <p className="text-gray-600 mb-6">The event you are looking for does not exist.</p>
                    <button
                        onClick={() => navigate('/events')}
                        className="px-6 py-3 bg-[#10362e] text-white font-medium rounded-lg hover:bg-[#fcd10b] hover:text-[#10362e] transition-all duration-300"
                    >
                        Go to Events Page
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="relative z-10 flex items-end justify-start h-full p-8 md:p-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
                        {event.title}
                    </h1>
                </div>
            </section>

            {/* Event Details Section */}
            <section className="container mx-auto px-6 py-12 -mt-24 relative z-20">
                <div ref={contentRef} className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div className="flex items-center text-gray-600 mb-4 md:mb-0">
                            <svg className="w-6 h-6 mr-3 text-[#10362e]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg font-medium">{event.year}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <svg className="w-6 h-6 mr-3 text-[#10362e]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg font-medium">Nepal</span>
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {event.description}
                    </p>

                    {event.detailImages && event.detailImages.length > 0 && (
                        <div className="mt-12">
                            {event.detailImages.map((detail, index) => (
                                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}>
                                    <div className="md:w-1/2 p-4">
                                        <img
                                            src={detail.image}
                                            alt={`Detail image ${index + 1}`}
                                            className="w-full h-auto rounded-lg shadow-lg"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-4">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            {detail.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => navigate('/events')}
                            className="px-8 py-4 bg-[#fcd10b] text-[#10362e] font-bold rounded-lg hover:bg-[#10362e] hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            Back to Events
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventDetail;