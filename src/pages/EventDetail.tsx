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

                    <h2 className="text-3xl font-bold text-[#10362e] mb-6">About This Event</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        This section can be expanded with more detailed information about the event, such as:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
                        <li>Key speakers and their profiles</li>
                        <li>Detailed agenda or schedule</li>
                        <li>Photo and video galleries from the event</li>
                        <li>Testimonials from attendees</li>
                        <li>Partners and sponsors</li>
                        <li>Logistics and practical information (e.g., accommodation, transport)</li>
                    </ul>

                    {/* Example of a sub-section */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-2xl font-bold text-[#10362e] mb-4">Event Highlights</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Here you can showcase the most memorable moments or key takeaways from the event.
                            This could include summaries of keynote speeches, interactive sessions, or networking opportunities.
                        </p>
                    </div>

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