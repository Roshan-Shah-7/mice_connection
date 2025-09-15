import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { latestWorks } from '../data/latestWorkData';

interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
    category: string;
    featured?: boolean;
}

const EventsPage = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);
    const eventsRef = useRef<HTMLDivElement>(null);
    const events: Event[] = latestWorks.map(work => ({
        id: work.id,
        title: work.title,
        date: work.year,
        location: "Nepal",
        description: work.description,
        imageUrl: work.image,
        category: "Corporate",
        featured: false
    }));

    const filteredEvents = events;

    useEffect(() => {
        // Hero section animation
        if (heroRef.current) {
            const heroTitle = heroRef.current.querySelector('.hero-title');
            const heroSubtitle = heroRef.current.querySelector('.hero-subtitle');
            const heroLine = heroRef.current.querySelector('.hero-line');
            const heroImage = heroRef.current.querySelector('.hero-image');

            gsap.fromTo(heroTitle,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );

            gsap.fromTo(heroSubtitle,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
            );

            gsap.fromTo(heroLine,
                { width: 0, opacity: 0 },
                { width: "100%", opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
            );

            gsap.fromTo(heroImage,
                { scale: 1.1, opacity: 0.8 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
            );
        }

        // Events section animation
        if (eventsRef.current) {
            const sectionTitle = eventsRef.current.querySelector('.section-title');
            const eventCards = eventsRef.current.querySelectorAll('.event-card');

            gsap.fromTo(sectionTitle,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionTitle,
                        start: "top 80%"
                    }
                }
            );


            gsap.fromTo(eventCards,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: eventCards[0],
                        start: "top 80%"
                    }
                }
            );
        }
    }, [filteredEvents]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [location.pathname]); // Trigger on route path change



    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#10362e]/60 to-[#10362e]/70 z-10"></div>
                <img
                    src="/assets/events/eventHero.webp"
                    alt="Event background"
                    className="hero-image absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 w-full max-w-[1440px] mx-auto">
                    <div className="">
                        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                            <span className="block">Our</span>
                            <span className="block text-[#fcd10b]">Successful</span>
                            <span className="block">Events</span>
                        </h1>
                        <div className="hero-line h-1 w-24 bg-[#fcd10b] my-6"></div>
                        <p className="hero-subtitle text-lg md:text-xl text-gray-200 max-w-2xl">
                            Discover the exceptional events we've managed for our clients around the world
                        </p>
                    </div>
                </div>
            </div>

            {/* Events Section */}
            <div ref={eventsRef} className="py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-[#10362e] mb-4">
                            Event Portfolio
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our diverse portfolio of successfully executed events across various industries
                        </p>
                    </div>


                    {/* Events Grid with Unique Layout */}
                    <div className="relative">
                        {/* Decorative Elements */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#fcd10b]/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#10362e]/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className={`event-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${event.featured ? 'md:col-span-2 md:row-span-2' : ''
                                        }`}
                                >
                                    {/* Event Image */}
                                    <div className={`relative overflow-hidden ${event.featured ? 'h-64' : 'h-48'}`}>
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute top-4 right-4 bg-[#fcd10b] text-[#10362e] font-bold py-1 px-3 rounded-full text-sm z-10">
                                            Event
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="p-6">
                                        <h3 className={`font-bold text-[#10362e] mb-3 group-hover:text-[#fcd10b] transition-colors duration-300 ${event.featured ? 'text-2xl' : 'text-xl'
                                            }`}>
                                            {event.title}
                                        </h3>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center text-gray-600">
                                                <svg className="w-5 h-5 mr-2 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <svg className="w-5 h-5 mr-2 text-[#fcd10b]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-5 line-clamp-3">{event.description}</p>

                                        <button
                                            className="w-full py-3 px-4 bg-[#10362e] text-white font-medium rounded-lg hover:bg-[#fcd10b] hover:text-[#10362e] transition-all duration-300 flex items-center justify-center group"
                                            onClick={() => {
                                                const slug = event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '');
                                                navigate(`/event-detail/${slug}`);
                                            }}
                                        >
                                            View Details
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#10362e] to-[#10362e]/90">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Create Your Next Unforgettable Event?
                    </h2>
                    <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                        Partner with The MICE Connection to bring your vision to life with our expert event planning and management services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <button className="bg-[#fcd10b] text-[#10362e] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;