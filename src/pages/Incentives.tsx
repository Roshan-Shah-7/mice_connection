import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

gsap.registerPlugin(ScrollTrigger);

const IncentivesPage = () => {
    const navigate = useNavigate();
    // const [activeTab, setActiveTab] = useState('all');
    const heroRef = useRef<HTMLDivElement>(null);
    const whyNepalRef = useRef<HTMLDivElement>(null);
    const experiencesRef = useRef<HTMLDivElement>(null);
    const programsRef = useRef<HTMLDivElement>(null);
    const packagesRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Incentive experiences data
    const incentiveExperiences = [
        {
            icon: '🏔',
            title: 'Adventure Incentives',
            description: 'Trekking, helicopter tours, rafting',
            details: 'Thrilling adventures that build team spirit and create lasting memories. From short treks with breathtaking views to helicopter tours over the Himalayas and white-water rafting excursions.',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            icon: '🏨',
            title: 'Luxury Escapes',
            description: 'Spa retreats, 5-star resorts, boutique stays',
            details: 'Indulge in world-class hospitality at Nepal\'s finest accommodations. Enjoy rejuvenating spa treatments, gourmet dining, and impeccable service in stunning settings.',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            icon: '🎭',
            title: 'Cultural Immersion',
            description: 'Gala dinners, temple tours, craft workshops',
            details: 'Immerse your team in Nepal\'s rich cultural heritage. Experience traditional dance performances, explore ancient temples, and participate in authentic craft workshops.',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            icon: '🌿',
            title: 'Wellness & Mindfulness',
            description: 'Yoga, meditation, holistic therapies',
            details: 'Rejuvenate mind and body with wellness experiences set in serene natural environments. Enjoy guided yoga sessions, meditation retreats, and holistic healing therapies.',
            image: '/assets/incentives/yoga.webp'
        },
        {
            icon: '🍷',
            title: 'Exclusive Dining',
            description: 'Private dinners, rooftop cocktails, heritage banquets',
            details: 'Savor exquisite culinary experiences in unforgettable settings. From private rooftop dinners with mountain views to traditional heritage banquets featuring local delicacies.',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            icon: '🚁',
            title: 'Custom Experiences',
            description: 'Tailored packages for corporate brands',
            details: 'Create unique incentive programs tailored to your company\'s specific goals and brand identity. We design bespoke experiences that align with your corporate culture and objectives.',
            image: '/assets/incentives/custom.webp'
        }
    ];

    // Sample programs data
    // const samplePrograms = [
    //     {
    //         title: 'Kathmandu Luxury Escape',
    //         duration: '3 Days',
    //         description: 'Heritage tours, gala dinner, spa experiences',
    //         highlights: [
    //             'Private guided tour of UNESCO World Heritage Sites',
    //             'Gala dinner with traditional cultural performances',
    //             'Luxury spa treatments at 5-star hotel',
    //             'Shopping excursion for authentic handicrafts'
    //         ],
    //         image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    //     },
    //     {
    //         title: 'Adventure & Wellness Retreat',
    //         duration: '5 Days',
    //         description: 'Pokhara, paragliding, yoga retreat',
    //         highlights: [
    //             'Scenic flight to Pokhara with mountain views',
    //             'Paragliding experience over Phewa Lake',
    //             'Daily yoga and meditation sessions',
    //             'Boating on Phewa Lake and visit to Peace Pagoda'
    //         ],
    //         image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    //     },
    //     {
    //         title: 'Himalayan Reward Journey',
    //         duration: '7 Days',
    //         description: 'Everest Heli tour, Chitwan safari, Lumbini',
    //         highlights: [
    //             'Helicopter tour to Mount Everest Base Camp',
    //             'Wildlife safari in Chitwan National Park',
    //             'Visit to Lumbini, birthplace of Buddha',
    //             'Traditional Tharu cultural evening'
    //         ],
    //         image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    //     }
    // ];

    // Gallery images data
    // const galleryImages = [
    //     {
    //         image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //         caption: 'Helicopter tour over the Himalayas'
    //     },
    //     {
    //         image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //         caption: 'Traditional cultural performance'
    //     },
    //     {
    //         image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //         caption: 'Luxury resort accommodation'
    //     },
    //     {
    //         image: 'https://images.unsplash.com/photo-1506126613408-cca07d5b1561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //         caption: 'Wellness and yoga retreat'
    //     },
    //     {
    //         image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //         caption: 'Exclusive dining experience'
    //     },
    //     {
    //         image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //         caption: 'Team building activities'
    //     }
    // ];

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

        // Animate experiences section
        if (experiencesRef.current) {
            const cards = experiencesRef.current.querySelectorAll('.experience-card');
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
                        trigger: experiencesRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate programs section
        if (programsRef.current) {
            gsap.fromTo(programsRef.current,
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
                        trigger: programsRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate packages section
        if (packagesRef.current) {
            const packageCards = packagesRef.current.querySelectorAll('.package-card');
            gsap.fromTo(packageCards,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: packagesRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate gallery section
        if (galleryRef.current) {
            gsap.fromTo(galleryRef.current,
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
                        trigger: galleryRef.current,
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
                className="relative h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
            >
                <div className="absolute inset-0 bg-[#1f423b]/50"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Reward Beyond Expectations</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Transform incentives into unforgettable journeys amidst Nepal’s majestic landscapes and timeless culture.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Unique Experiences</span>
                        </div>
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Luxury & Adventure</span>
                        </div>
                        <div className="flex items-center justify-center text-white">
                            <svg className="w-5 h-5 mr-2 text-[#fcd00d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Memorable Rewards</span>
                        </div>
                    </div>
                    <Link to="/contact">
                        <button
                            onClick={handleGetInTouch}
                            className="px-8 py-4 bg-[#fcd00d] cursor-pointer text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Design Your Incentive Trip
                        </button>
                    </Link>
                </div>
            </div>

            {/* Why Incentives in Nepal? */}
            <div
                ref={whyNepalRef}
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-6">Why Incentives in Nepal?</h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    Imagine rewarding your team with experiences that transcend ordinary incentives. Nepal offers a perfect blend of luxury and adventure, creating transformative journeys that inspire and motivate. From watching the sunrise over the Himalayas in Nagarkot to embarking on a helicopter tour to Everest Base Camp, every moment becomes a cherished memory.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    Nepal's unique combination of breathtaking landscapes, rich cultural heritage, and world-class hospitality makes it an ideal destination for corporate incentives. Whether it's a luxury jungle safari in Chitwan, a rejuvenating yoga retreat, or an elegant cultural gala with traditional performances, Nepal delivers experiences that truly reward excellence.
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
                                            <h3 className="font-medium text-gray-900">Perfect for Team Bonding</h3>
                                            <p className="text-gray-600">Shared experiences in extraordinary settings strengthen relationships and foster collaboration</p>
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
                                            <h3 className="font-medium text-gray-900">Powerful Motivation</h3>
                                            <p className="text-gray-600">The promise of a once-in-a-lifetime journey drives exceptional performance and results</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/assets/incentives/Incentives.webp"
                                    alt="Team enjoying incentive trip in Nepal"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Incentive Experiences */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Our Incentive Experiences</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Curated journeys that combine luxury, adventure, and cultural immersion
                        </p>
                    </div>

                    {/* <div className="flex justify-center mb-10">
                        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
                            {['all', 'adventure', 'luxury', 'cultural'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === tab
                                        ? 'bg-white text-[#1f423b] shadow'
                                        : 'text-gray-600 hover:text-[#1f423b]'
                                        }`}
                                >
                                    {tab === 'all' && 'All Experiences'}
                                    {tab === 'adventure' && 'Adventure'}
                                    {tab === 'luxury' && 'Luxury'}
                                    {tab === 'cultural' && 'Cultural'}
                                </button>
                            ))}
                        </div>
                    </div> */}

                    <div ref={experiencesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {incentiveExperiences.map((experience, index) => (
                            <div
                                key={index}
                                className="experience-card bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        src={experience.image}
                                        alt={experience.title}
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <span className="text-3xl mr-3">{experience.icon}</span>
                                        <h3 className="text-xl font-bold text-[#1f423b]">{experience.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{experience.description}</p>
                                    <p className="text-sm text-gray-600">{experience.details}</p>
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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f423b] mb-4">Reward your team with experiences they'll never forget</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let our expert team craft a bespoke incentive journey that will inspire, motivate, and create lasting memories for your top performers.
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
                                <span className="text-gray-700">Unforgettable experiences</span>
                            </div>
                        </div>
                        <Link to="/contact">
                            <button
                                onClick={handleGetInTouch}
                                className="px-8 py-4 bg-[#fcd00d] cursor-pointer text-[#1f423b] font-bold text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                Start Planning
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncentivesPage;