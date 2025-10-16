import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

gsap.registerPlugin(ScrollTrigger);

const ExhibitionsPage = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);
    const whyNepalRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const venuesRef = useRef<HTMLDivElement>(null);
    const caseStudyRef = useRef<HTMLDivElement>(null);
    const valuePropRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Exhibition services data
    const exhibitionServices = [
        {
            icon: '📍',
            title: 'Venue Selection & Layout Design',
            description: 'From convention centers to custom spaces',
            details: 'We source and design the perfect exhibition space tailored to your needs. Our team creates efficient layout plans that optimize traffic flow, maximize visibility, and enhance attendee experience, whether in large convention centers or unique custom venues.'
        },
        {
            icon: '🎨',
            title: 'Booth Design & Construction',
            description: 'Custom, modular, or interactive displays',
            details: 'Creative booth solutions that make your brand stand out. We offer custom-built booths, modular systems, and interactive displays that engage visitors and effectively communicate your brand message, all constructed with quality materials and attention to detail.'
        },
        {
            icon: '📢',
            title: 'Marketing & Promotion',
            description: 'Pre-event, during, and post-event strategies',
            details: 'Comprehensive marketing campaigns to drive attendance and engagement. We develop targeted promotional strategies across multiple channels, manage social media campaigns, and create compelling content to generate buzz before, during, and after your exhibition.'
        },
        {
            icon: '👥',
            title: 'Attendee Management',
            description: 'Registration, badges, hospitality',
            details: 'Streamlined attendee management from registration to follow-up. Our services include online registration systems, badge printing, welcome kits, hospitality desks, and attendee tracking to ensure a smooth experience for all participants.'
        },
        {
            icon: '🛫',
            title: 'Travel & Logistics',
            description: 'For exhibitors and attendees',
            details: 'Complete travel and logistics coordination for exhibitors and attendees. We handle flight bookings, accommodation arrangements, transportation, shipping of exhibition materials, and all logistical requirements to ensure hassle-free participation.'
        },
        {
            icon: '🎉',
            title: 'On-site Management',
            description: 'Staff, coordination, support',
            details: 'Professional on-site team ensuring flawless execution. Our experienced staff manage all aspects of the exhibition including setup, supervision, technical support, and troubleshooting, allowing you to focus on your visitors and business objectives.'
        },
        {
            icon: '🌐',
            title: 'Hybrid Solutions',
            description: 'Virtual exhibition platforms',
            details: 'Cutting-edge hybrid exhibition solutions combining physical and virtual experiences. We provide virtual exhibition platforms, live streaming, interactive digital content, and online networking opportunities to extend your reach beyond physical boundaries.'
        },
        {
            icon: '🍽️',
            title: 'Exhibition Catering & Hospitality',
            description: 'Refreshments, VIP lounges, networking events',
            details: 'Premium catering and hospitality services designed for exhibitions. We provide refreshment stations, VIP lounges, networking receptions, and custom catering options that keep exhibitors and attendees energized throughout the event.'
        },
        {
            icon: '📊',
            title: 'Analytics & ROI Measurement',
            description: 'Lead capture, engagement metrics, performance reports',
            details: 'Comprehensive analytics and measurement tools to track exhibition success. We implement lead capture systems, measure visitor engagement, provide detailed performance reports, and help you calculate ROI to demonstrate the value of your exhibition participation.'
        }
    ];

    // Value proposition data
    const valueProps = [
        {
            icon: '✅',
            title: 'End-to-end exhibition management',
            description: 'Comprehensive services from concept to execution and post-event analysis'
        },
        {
            icon: '✅',
            title: 'Strong local and international network',
            description: 'Extensive connections with venues, suppliers, and industry partners'
        },
        {
            icon: '✅',
            title: 'Creative and technical expertise',
            description: 'Innovative design solutions and cutting-edge exhibition technology'
        },
        {
            icon: '✅',
            title: 'Dedicated project management',
            description: 'Single point of contact and personalized service throughout the process'
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
                style={{ backgroundImage: "url('/assets/events/eventHero.webp')" }}
            >
                <div className="absolute inset-0 bg-[#1f423b]/50"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Showcase Excellence</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Premium exhibition solutions in Nepal, from concept to execution, creating impactful brand experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Creative Design</span>
                        </div>
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Strategic Planning</span>
                        </div>
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Flawless Execution</span>
                        </div>
                    </div>
                    <Link to="/contact">
                        <button
                            onClick={handleGetInTouch}
                            className="px-8 py-4 bg-[#fcd00d] cursor-pointer text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Plan Your Exhibition
                        </button>
                    </Link>
                </div>
            </div>

            {/* Why Nepal for Exhibitions? */}
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
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-6">Why Nepal for Exhibitions?</h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    Nepal's rapidly growing economy presents unique opportunities for exhibitions and trade shows. As a developing market with increasing consumer spending, Nepal offers exhibitors access to an emerging customer base eager for new products and services. The country's strategic location between India and China also makes it an ideal hub for regional exhibitions targeting South Asian markets.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    Beyond business potential, Nepal provides a unique opportunity to blend professional exhibitions with unforgettable cultural experiences. Modern exhibition venues equipped with international standards ensure your event runs smoothly, while the backdrop of the Himalayas and rich cultural heritage creates an unforgettable setting that will impress exhibitors and attendees alike.
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
                                            <h3 className="font-medium text-gray-900">Growing Market Potential</h3>
                                            <p className="text-gray-600">Access to emerging consumer markets and business opportunities</p>
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
                                            <h3 className="font-medium text-gray-900">Strategic Location</h3>
                                            <p className="text-gray-600">Gateway between India and China with expanding connectivity</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/assets/about/About4.webp"
                                    alt="Exhibition in Nepal"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Exhibition Services */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Our Exhibition Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive solutions for impactful exhibitions and trade shows
                        </p>
                    </div>

                    <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exhibitionServices.map((service, index) => (
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
                            Our value proposition for your exhibition success
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
                    backgroundImage: "url('https://images.unsplash.com/photo-1590766940554-153a0b48a919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Let's create an unforgettable exhibition experience in Nepal</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Partner with our experienced team to deliver an exceptional exhibition that combines business objectives with the unique charm of Nepal.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Creative design</span>
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
                                <span className="text-gray-700">Exceptional results</span>
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

export default ExhibitionsPage;