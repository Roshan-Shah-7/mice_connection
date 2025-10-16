import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

gsap.registerPlugin(ScrollTrigger);

const MeetingsPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('all');
    const heroRef = useRef<HTMLDivElement>(null);
    const whyNepalRef = useRef<HTMLDivElement>(null);
    const solutionsRef = useRef<HTMLDivElement>(null);
    const venuesRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Meeting solutions data with enhanced details
    const meetingSolutions = [
        {
            icon: '🏨',
            title: 'Venue Selection',
            description: 'Partnerships with 4-star hotels, convention centers, and boutique spaces',
            details: 'We partner with Nepal\'s premier venues to offer the perfect setting for your corporate event. From intimate boardrooms to grand convention centers, we have access to spaces that combine modern amenities with authentic Nepali hospitality.'
        },
        {
            icon: '🖥',
            title: 'Technology Setup',
            description: 'Audio-visual, hybrid meeting support, high-speed connectivity',
            details: 'State-of-the-art technology solutions including high-speed internet, professional audio-visual equipment, simultaneous translation services, and hybrid meeting capabilities to connect participants globally.'
        },
        {
            icon: '🛎',
            title: 'End-to-End Planning',
            description: 'Scheduling, logistics, delegate management',
            details: 'Comprehensive event planning from concept to execution. Our team handles scheduling, logistics, delegate registration, transportation coordination, and all operational aspects to ensure a seamless experience.'
        },
        {
            icon: '🍴',
            title: 'Catering & Hospitality',
            description: 'Custom menus, welcome receptions, cultural add-ons',
            details: 'Exquisite catering options featuring international cuisine and local delicacies. We design custom menus, organize welcome receptions, and incorporate cultural elements that showcase Nepal\'s rich heritage.'
        },
        {
            icon: '✈️',
            title: 'Travel & Accommodation',
            description: 'Full arrangement for international delegates',
            details: 'Complete travel management including flight bookings, airport transfers, visa assistance, and accommodation arrangements at Nepal\'s finest hotels. We ensure comfort and convenience for all attendees.'
        },
        {
            icon: '👥',
            title: 'On-site Support',
            description: 'Dedicated event managers for seamless execution',
            details: 'Professional on-site support throughout your event. Our dedicated event managers coordinate all aspects in real-time, troubleshoot issues, and ensure everything runs according to plan.'
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

        // Animate venues section
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
                    backgroundImage: "url('/assets/meeting/meeting.webp')",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Seamless Meetings, Exceptional Outcomes</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto">
                        Tailored corporate meeting solutions in Nepal's world-class venues, designed for productivity and prestige.
                    </p>
                    <Link to="/contact">
                        <button
                            onClick={handleGetInTouch}
                            className="px-8 py-4 bg-[#fcd00d] cursor-pointer text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Plan Your Meeting
                        </button>
                    </Link>
                </div>
            </div>

            {/* Why Choose Nepal for Meetings? */}
            <div
                ref={whyNepalRef}
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-6">Why Choose Nepal for Meetings?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-lg text-gray-700 mb-4">
                                    Nepal has emerged as a strategic hub for South Asia, offering a unique blend of modern business facilities and rich cultural experiences. Its central location between India and China makes it an accessible destination for international delegates, while its growing connectivity through international flights ensures convenient travel.
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
                                            <h3 className="font-medium text-gray-900">Strategic Location</h3>
                                            <p className="text-gray-600">Central hub between India and China with growing international connectivity</p>
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
                                            <h3 className="font-medium text-gray-900">Modern Infrastructure</h3>
                                            <p className="text-gray-600">State-of-the-art venues with advanced technology and amenities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg text-gray-700 mb-4">
                                    The country boasts world-class venues that combine state-of-the-art facilities with authentic Nepali hospitality. From luxury hotels in Kathmandu to scenic resorts in Pokhara, Nepal offers diverse settings that can accommodate meetings of any scale. The rapidly growing hospitality industry ensures exceptional service standards that meet global expectations.
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
                                            <h3 className="font-medium text-gray-900">Cultural Richness</h3>
                                            <p className="text-gray-600">Unique blend of ancient traditions and modern business environment</p>
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
                                            <h3 className="font-medium text-gray-900">Natural Beauty</h3>
                                            <p className="text-gray-600">Stunning Himalayan backdrop and scenic landscapes for memorable events</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Meeting Solutions */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Our Meeting Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive services to ensure your corporate event is executed flawlessly
                        </p>
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
                            {['all', 'planning', 'technology', 'hospitality'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === tab
                                        ? 'bg-white text-[#1f423b] shadow'
                                        : 'text-gray-600 hover:text-[#1f423b]'
                                        }`}
                                >
                                    {tab === 'all' && 'All Services'}
                                    {tab === 'planning' && 'Planning'}
                                    {tab === 'technology' && 'Technology'}
                                    {tab === 'hospitality' && 'Hospitality'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div ref={solutionsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {meetingSolutions.map((solution, index) => (
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


            {/* Call-to-Action Banner */}
            <div
                ref={ctaRef}
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Your next successful meeting starts here</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let our expert team create a memorable corporate event experience in the heart of the Himalayas.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">No hidden fees</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Dedicated support</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Customizable packages</span>
                            </div>
                        </div>
                        <Link to="/contact">
                            <button
                                onClick={handleGetInTouch}
                                className="px-8 py-4 bg-[#fcd00d] cursor-pointer text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
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

export default MeetingsPage;