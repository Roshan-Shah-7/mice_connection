import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

gsap.registerPlugin(ScrollTrigger);

const ConferencesPage = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);
    const whyNepalRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const venuesRef = useRef<HTMLDivElement>(null);
    const caseStudyRef = useRef<HTMLDivElement>(null);
    const valuePropRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Conference services data
    const conferenceServices = [
        {
            icon: '📍',
            title: 'Venue Selection & Management',
            description: 'From luxury hotels to convention centers',
            details: 'We source and manage the perfect venue for your conference, whether you need a large convention center or an intimate boutique space. Our team handles all aspects of venue management including layout planning, technical requirements, and logistics coordination.'
        },
        {
            icon: '🎤',
            title: 'Event Production & AV Support',
            description: 'Sound, lighting, stage design',
            details: 'Professional event production services including state-of-the-art audiovisual equipment, custom stage designs, and technical support. We ensure seamless presentations and engaging audience experiences through cutting-edge technology.'
        },
        {
            icon: '🌐',
            title: 'Delegate Services',
            description: 'Registration, ticketing, logistics',
            details: 'Comprehensive delegate management from registration to departure. We handle ticketing, badge printing, welcome kits, transportation coordination, and all logistical requirements to ensure a smooth experience for all attendees.'
        },
        {
            icon: '🛫',
            title: 'Travel & Accommodation',
            description: 'Flights, transfers, premium stays',
            details: 'Complete travel management including flight bookings, airport transfers, and accommodation arrangements at Nepal\'s finest hotels. We negotiate preferential rates and ensure comfortable stays for all conference participants.'
        },
        {
            icon: '🍽',
            title: 'Catering & Hospitality',
            description: 'Curated menus, gala dinners',
            details: 'Exceptional catering services featuring international cuisine and local delicacies. From coffee breaks to gala dinners, we create memorable dining experiences that showcase Nepal\'s culinary heritage while meeting international standards.'
        },
        {
            icon: '🖥',
            title: 'Hybrid / Virtual Solutions',
            description: 'Live streaming, simultaneous translation',
            details: 'Advanced hybrid conference solutions enabling both in-person and virtual participation. We provide live streaming, virtual networking platforms, simultaneous translation services, and interactive digital experiences.'
        },
        {
            icon: '👥',
            title: 'On-Site Management',
            description: 'Event coordinators, help desk, multilingual staff',
            details: 'Dedicated on-site team ensuring flawless execution of your conference. Our professional event coordinators, help desk staff, and multilingual team members provide comprehensive support throughout the event.'
        },
        {
            icon: '📋',
            title: 'Program Development',
            description: 'Agenda planning, speaker coordination',
            details: 'End-to-end conference program development including agenda structuring, speaker recruitment and management, content coordination, and timeline optimization to create engaging and impactful conference experiences.'
        },
        {
            icon: '🎪',
            title: 'Exhibition Management',
            description: 'Booth design, vendor coordination',
            details: 'Complete exhibition management services including floor plan design, exhibitor coordination, booth construction, and sponsor activation. We handle all aspects of trade show integration within your conference.'
        }
    ];

    // Value proposition data
    const valueProps = [
        {
            icon: '✅',
            title: '10+ years of event expertise',
            description: 'Extensive experience organizing international conferences in Nepal'
        },
        {
            icon: '✅',
            title: 'Seamless execution, end-to-end',
            description: 'Comprehensive management from planning to execution and post-event follow-up'
        },
        {
            icon: '✅',
            title: 'Strong global + local networks',
            description: 'Extensive partnerships with international brands and local service providers'
        },
        {
            icon: '✅',
            title: 'Unique cultural add-ons',
            description: 'Enrich business events with authentic Nepali cultural experiences'
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

        // Animate services section
        if (servicesRef.current) {
            const cards = servicesRef.current.querySelectorAll('.service-card');
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
                        trigger: servicesRef.current,
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

        // Animate case study section
        if (caseStudyRef.current) {
            gsap.fromTo(caseStudyRef.current,
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
                        trigger: caseStudyRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate value proposition section
        if (valuePropRef.current) {
            const props = valuePropRef.current.querySelectorAll('.value-prop');
            gsap.fromTo(props,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    delay: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: valuePropRef.current,
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
                    delay: 1,
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
                className="relative h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
            >
                <div className="absolute inset-0 bg-[#1f423b]/50"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Where Ideas Meet Excellence</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Seamlessly managed conferences in the heart of Nepal, blending global standards with local warmth.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>World-Class Venues</span>
                        </div>
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Expert Management</span>
                        </div>
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Unforgettable Experience</span>
                        </div>
                    </div>
                    <Link to="/contact">
                        <button
                            onClick={handleGetInTouch}
                            className="px-8 py-4 bg-[#fcd00d] text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Plan Your Conference
                        </button>
                    </Link>
                </div>
            </div>

            {/* Why Nepal for Conferences? */}
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
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-6">Why Nepal for Conferences?</h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    Nepal's strategic location between India and China makes it an accessible hub for global delegates, offering a unique blend of business opportunities and cultural experiences. With modern venues in Kathmandu and Pokhara equipped with state-of-the-art facilities, Nepal provides the perfect setting for international conferences that require both professionalism and inspiration.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    Compared to other destinations, Nepal offers exceptional value without compromising on luxury or service quality. The backdrop of the Himalayas creates an unforgettable experience for attendees, combining serious business discussions with the opportunity to explore one of the world's most beautiful countries. This unique combination ensures your conference will be both productive and memorable.
                                </p>
                                <div className="space-y-4">
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
                                            <p className="text-gray-600">Easily accessible from major global hubs with growing international connectivity</p>
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
                                            <h3 className="font-medium text-gray-900">Exceptional Value</h3>
                                            <p className="text-gray-600">Premium service and luxury experiences at competitive rates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/public/assets/home/homeConference.webp"
                                    alt="Conference hall in Nepal"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Conference Services */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Our Conference Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive solutions for seamless conference management
                        </p>
                    </div>

                    <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {conferenceServices.map((service, index) => (
                            <div
                                key={index}
                                className="service-card bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                                    <h3 className="text-xl font-bold text-[#1f423b]">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">{service.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose The MICE Connection? */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Why Choose The MICE Connection?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our value proposition for your conference success
                        </p>
                    </div>

                    <div ref={valuePropRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valueProps.map((prop, index) => (
                            <div
                                key={index}
                                className="value-prop bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-3xl mb-4">{prop.icon}</div>
                                <h3 className="text-lg font-bold text-[#1f423b] mb-2">{prop.title}</h3>
                                <p className="text-gray-600">{prop.description}</p>
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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Let's make your next conference in Nepal a world-class success</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Partner with our experienced team to deliver an exceptional conference experience that combines global standards with Nepali hospitality.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Expert planning</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Seamless execution</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Unforgettable experience</span>
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

export default ConferencesPage;