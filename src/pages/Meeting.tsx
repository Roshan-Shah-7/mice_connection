import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
            description: 'Partnerships with 5-star hotels, convention centers, and boutique spaces',
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

    // Featured venues data with enhanced details
    const featuredVenues = [
        {
            name: 'Soaltee Kathmandu',
            image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            capacity: 'Conference Hall – 500 pax',
            facilities: 'AV Equipment, High-speed WiFi, Catering Services',
            location: 'Tahachal, Kathmandu',
            description: 'Luxury hotel with extensive conference facilities and beautiful gardens, ideal for prestigious corporate events.',
            rating: 4.8
        },
        {
            name: 'Hyatt Regency Kathmandu',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            capacity: 'Grand Ballroom – 700 pax',
            facilities: 'Hybrid Meeting Capabilities, Simultaneous Translation, Event Planning',
            location: 'Boudhanath, Kathmandu',
            description: 'Modern business hotel with state-of-the-art meeting spaces and exceptional service standards.',
            rating: 4.7
        },
        {
            name: 'Temple Tree Resort, Pokhara',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            capacity: 'Lakeside Pavilion – 300 pax',
            facilities: 'Outdoor Venue, Natural Lighting, Scenic Views',
            location: 'Lakeside, Pokhara',
            description: 'Stunning lakeside resort offering unique outdoor venues with panoramic mountain views.',
            rating: 4.9
        },
        {
            name: 'Hotel Yak & Yeti',
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            capacity: 'Convention Center – 1000 pax',
            facilities: 'Multiple Breakout Rooms, Exhibition Space, Catering',
            location: 'Durbar Marg, Kathmandu',
            description: 'Heritage hotel with extensive convention facilities in the heart of Kathmandu\'s business district.',
            rating: 4.6
        }
    ];


    // Case studies data
    const caseStudies = [
        {
            title: 'Global Tech Summit 2023',
            description: 'International technology conference for 500+ delegates',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            stats: [
                { value: '500+', label: 'Attendees' },
                { value: '25', label: 'Countries' },
                { value: '95%', label: 'Satisfaction' },
                { value: '3', label: 'Days' }
            ]
        },
        {
            title: 'Asia-Pacific Finance Forum',
            description: 'High-level financial sector meeting with government officials',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            stats: [
                { value: '300+', label: 'Delegates' },
                { value: '18', label: 'Countries' },
                { value: '12', label: 'Speakers' },
                { value: '2', label: 'Days' }
            ]
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

    // Render star rating
    const renderRating = (rating: number) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-[#fcd00d]' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                <span className="ml-1 text-sm text-gray-600">{rating}</span>
            </div>
        );
    };

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
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>10+ Successful Events</span>
                        </div>
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>25+ Premium Venues</span>
                        </div>
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>98% Client Satisfaction</span>
                        </div>
                    </div>
                    <a href="/contact">
                        <button
                            onClick={handleGetInTouch}
                            className="px-8 py-4 bg-[#fcd00d] text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Plan Your Meeting
                        </button>
                    </a>
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

            {/* Showcase Featured Venues - Swiper */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Featured Venues</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Premium locations equipped for world-class corporate events
                        </p>
                    </div>

                    <div ref={venuesRef} className="relative">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="venues-swiper"
                        >
                            {featuredVenues.map((venue, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                                        <div className="h-56 overflow-hidden relative">
                                            <img
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                src={venue.image}
                                                alt={venue.name}
                                            />
                                            <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-medium text-[#1f423b]">
                                                {renderRating(venue.rating)}
                                            </div>
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col">
                                            <h3 className="text-xl font-bold text-[#1f423b] mb-2">{venue.name}</h3>
                                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                                <svg className="w-4 h-4 mr-1 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                {venue.location}
                                            </div>
                                            <div className="mb-3">
                                                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#1f423b] rounded-full">
                                                    {venue.capacity}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-4 flex-grow">{venue.description}</p>
                                            <div className="text-sm text-gray-600 mb-4">
                                                <span className="font-medium">Facilities:</span> {venue.facilities}
                                            </div>
                                            <button
                                                onClick={handleGetInTouch}
                                                className="w-full py-2 bg-[#fcd00d] text-[#1f423b] font-medium rounded-lg hover:bg-opacity-90 transition duration-300"
                                            >
                                                Inquire About This Venue
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation */}
                        <div className="swiper-button-next text-[#1f423b] after:text-2xl"></div>
                        <div className="swiper-button-prev text-[#1f423b] after:text-2xl"></div>

                        {/* Custom Pagination */}
                        <div className="swiper-pagination mt-8"></div>
                    </div>
                </div>
            </div>

            {/* Case Studies Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Proven Excellence in Corporate Meetings</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover how we've helped organizations achieve their event goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
                                <div className="md:flex h-full">
                                    <div className="md:w-2/5">
                                        <img
                                            className="w-full h-48 md:h-full object-cover"
                                            src={study.image}
                                            alt={study.title}
                                        />
                                    </div>
                                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                                        <h3 className="text-xl font-bold text-[#1f423b] mb-2">{study.title}</h3>
                                        <p className="text-gray-600 mb-6">{study.description}</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {study.stats.map((stat, idx) => (
                                                <div key={idx} className="bg-white p-3 rounded-lg shadow-sm">
                                                    <div className="text-xl font-bold text-[#fcd00d]">{stat.value}</div>
                                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
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
                        <a href="/contact">
                            <button
                                onClick={handleGetInTouch}
                                className="px-8 py-4 bg-[#fcd00d] text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                Get in Touch
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingsPage;