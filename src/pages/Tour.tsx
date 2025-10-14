import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

gsap.registerPlugin(ScrollTrigger);

const TourPage = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);
    const whyNepalRef = useRef<HTMLDivElement>(null);
    const solutionsRef = useRef<HTMLDivElement>(null);
    const venuesRef = useRef<HTMLDivElement>(null); // This might be repurposed or removed
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Tour solutions data with enhanced details
    const tourSolutions = [
        {
            icon: '⛰️',
            title: 'Adventure Tours',
            description: 'Trekking, mountaineering, rafting, paragliding, and more',
            details: 'Embark on thrilling adventures across Nepal\'s diverse landscapes. We organize treks to Everest Base Camp, Annapurna Circuit, white-water rafting, paragliding, and other adrenaline-pumping activities with experienced guides and top-notch safety.'
        },
        {
            icon: '🎭',
            title: 'Cultural Immersion',
            description: 'Heritage tours, local festivals, authentic experiences',
            details: 'Immerse yourself in Nepal\'s rich cultural tapestry. Our tours include visits to UNESCO World Heritage Sites, participation in local festivals, culinary experiences, and interactions with indigenous communities for an authentic cultural journey.'
        },
        {
            icon: '🧘',
            title: 'Wellness & Retreats',
            description: 'Yoga, meditation, spiritual journeys in serene settings',
            details: 'Rejuvenate your mind, body, and soul with our wellness and spiritual retreats. Experience yoga and meditation in the tranquil Himalayas, visit ancient monasteries, and find inner peace amidst breathtaking natural beauty.'
        },
        {
            icon: '🐘',
            title: 'Wildlife Safaris',
            description: 'Jungle safaris, bird watching, conservation tours',
            details: 'Discover Nepal\'s incredible biodiversity with our wildlife safaris. Explore national parks like Chitwan and Bardia, home to rhinos, tigers, and diverse bird species. Ethical and responsible wildlife encounters guaranteed.'
        },
        {
            icon: '✈️',
            title: 'Travel Logistics',
            description: 'Flights, accommodation, transportation, visa assistance',
            details: 'Seamless travel arrangements from start to finish. We handle international and domestic flights, comfortable accommodation, reliable ground transportation, and provide visa assistance for a hassle-free travel experience.'
        },
        {
            icon: '🗺️',
            title: 'Custom Itineraries',
            description: 'Tailored journeys to match your interests and budget',
            details: 'Design your dream trip with our personalized itinerary planning. Whether you\'re a solo traveler, a family, or a group, we craft unique journeys that align with your interests, preferences, and budget, ensuring a truly bespoke adventure.'
        }
    ];

    // Animation effects
    useEffect(() => {
        // Animate hero section
        if (heroRef.current) {
            gsap.fromTo(heroRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                }
            );
        }

        // Animate why Nepal section
        if (whyNepalRef.current) {
            gsap.fromTo(whyNepalRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: whyNepalRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate solutions section
        if (solutionsRef.current) {
            const cards = solutionsRef.current.querySelectorAll('.solution-card');
            gsap.fromTo(cards,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: solutionsRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate venues section (repurposed for an additional section if needed, or can be removed)
        if (venuesRef.current) {
            gsap.fromTo(venuesRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: venuesRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate testimonials section
        if (testimonialsRef.current) {
            gsap.fromTo(testimonialsRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: testimonialsRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate CTA section
        if (ctaRef.current) {
            gsap.fromTo(ctaRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Clean up animations on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Handle navigation to contact page
    const handleGetInTouch = () => {
        navigate('/contact');
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [location.pathname]); // Trigger on route path change


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div
                ref={heroRef}
                className="relative h-screen flex items-center justify-center"
                style={{
                    backgroundImage: "url('/assets/nepal/Annapurna.webp')",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Unforgettable Journeys, Seamlessly Planned</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto">
                        Discover the magic of Nepal with our expertly curated tour and travel packages.
                    </p>
                    <Link to="/contact">
                        <button
                            onClick={handleGetInTouch}
                            className="px-8 py-4 bg-[#fcd00d] text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Plan Your Adventure
                        </button>
                    </Link>
                </div>
            </div>

            {/* Why Choose Nepal for Tours? */}
            <div
                ref={whyNepalRef}
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1587595462822-ac3091001f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-6">Why Choose Nepal for Your Tour?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-lg text-gray-700 mb-4">
                                    Nepal offers an unparalleled blend of natural beauty, rich culture, and thrilling adventures. From the majestic Himalayas to serene lowlands, it's a land of diverse landscapes and experiences. Our tours are designed to showcase the best of Nepal, providing authentic and memorable journeys.
                                </p>
                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-[#fcd00d]/20 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#1f423b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-medium text-gray-900">Diverse Landscapes</h3>
                                            <p className="text-gray-600">Majestic mountains, lush jungles, and serene lakes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-[#fcd00d]/20 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#1f423b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-medium text-gray-900">Rich Cultural Heritage</h3>
                                            <p className="text-gray-600">Ancient traditions, vibrant festivals, and historical sites</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg text-gray-700 mb-4">
                                    Our experienced guides and local connections ensure a deep dive into the heart of Nepal, whether you're seeking adventure, cultural insights, or a peaceful retreat. We prioritize sustainable tourism, ensuring your visit benefits local communities and preserves Nepal's natural wonders.
                                </p>
                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-[#fcd00d]/20 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#1f423b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-medium text-gray-900">Adventure Hub</h3>
                                            <p className="text-gray-600">Trekking, paragliding, rafting, and wildlife safaris</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-[#fcd00d]/20 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#1f423b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-medium text-gray-900">Authentic Experiences</h3>
                                            <p className="text-gray-600">Local insights, sustainable tourism, and community engagement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Tour & Travel Services */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Our Tour & Travel Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive services to ensure your journey through Nepal is seamless and memorable
                        </p>
                    </div>
                    <div ref={solutionsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tourSolutions.map((solution, index) => (
                            <div
                                key={index}
                                className="solution-card bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                                <h3 className="text-xl font-bold text-[#1f423b] mb-2">{solution.title}</h3>
                                <p className="text-gray-600 mb-4">{solution.description}</p>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">{solution.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Explore Tour Packages */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Explore Our Tour Packages</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Ready to embark on an adventure? Browse our diverse range of tour packages designed for every explorer.
                    </p>
                    <Link to="/tour-packages">
                        <button
                            className="px-8 py-4 bg-[#1f423b] text-white font-bold text-lg rounded-lg hover:bg-[#fcd00d] hover:text-[#1f423b] transition duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            View All Packages
                        </button>
                    </Link>
                </div>
            </div>

            {/* International Tours Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 text-white relative"
                style={{
                    backgroundImage: "url('/assets/international/internationalTours.webp')",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 opacity-70 bg-black"></div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">International Tours</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        We also facilitate international tour experiences. While our packages are currently under development, we are dedicated to crafting unforgettable journeys to global destinations. Please contact us to discuss your international travel aspirations.
                    </p>
                    <Link to="/contact">
                        <button
                            onClick={handleGetInTouch}
                            className="px-8 py-4 bg-[#fcd00d] text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Inquire About International Tours
                        </button>
                    </Link>
                </div>
            </div>

            {/* Call-to-Action Banner */}
            <div
                ref={ctaRef}
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('/public/assets/nepal/calltoaction.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Ready for Your Next Nepali Adventure?</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let our expert team craft your perfect tour and travel experience in the heart of the Himalayas.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Experienced guides</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Personalized itineraries</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Sustainable tourism</span>
                            </div>
                        </div>
                        <Link to="/contact">
                            <button
                                onClick={handleGetInTouch}
                                className="px-8 py-4 bg-[#fcd00d] text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourPage;