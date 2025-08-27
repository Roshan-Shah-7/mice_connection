import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutNepalDestinations } from '../data/aboutNepalDestinationsData';
gsap.registerPlugin(ScrollTrigger);

const AboutNepal: React.FC = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const destinationsRef = useRef<HTMLDivElement>(null);
    const cultureRef = useRef<HTMLDivElement>(null);
    const activitiesRef = useRef<HTMLDivElement>(null);
    const uniqueRef = useRef<HTMLDivElement>(null);
    const eventsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        // Hero animation
        if (heroRef.current) {
            gsap.fromTo(heroRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
        }
        // Intro animation
        if (introRef.current) {
            gsap.fromTo(introRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: introRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
        // Stats animation
        if (statsRef.current) {
            gsap.fromTo(statsRef.current.children,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
        // Destinations animation
        if (destinationsRef.current) {
            gsap.fromTo(destinationsRef.current.children,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: destinationsRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
        // Culture animation
        if (cultureRef.current) {
            gsap.fromTo(cultureRef.current.children,
                { opacity: 0, rotationX: 90 },
                {
                    opacity: 1,
                    rotationX: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: cultureRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
        // Activities animation
        if (activitiesRef.current) {
            gsap.fromTo(activitiesRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: activitiesRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
        // Unique to Nepal animation
        if (uniqueRef.current) {
            gsap.fromTo(uniqueRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: uniqueRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
        // Events animation
        if (eventsRef.current) {
            gsap.fromTo(eventsRef.current.children,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: eventsRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
        // CTA animation
        if (ctaRef.current) {
            gsap.fromTo(ctaRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/nepal/aboutHero.webp"
                        alt="Nepal Himalayas"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#143a31]/90 via-[#143a31]/70 to-[#143a31]/50"></div>
                </div>
                {/* Content */}
                <div className="relative z-10 w-full">
                    <div className="container mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/20 backdrop-blur-sm border border-[#fcd00e]/30 rounded-full px-4 py-2">
                                    <div className="w-2 h-2 bg-[#fcd00e] rounded-full animate-pulse"></div>
                                    <span className="text-[#fcd00e] font-medium text-sm">ASIA'S HIDDEN GEM</span>
                                </div>
                                {/* Main Title */}
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    Discover Heaven On
                                    <span className="block text-[#fcd00e] mt-2">Earth "Nepal"</span>
                                </h1>
                                {/* Subtitle */}
                                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                                    Where ancient traditions meet breathtaking landscapes. From the majestic Himalayas to serene valleys, Nepal offers an unparalleled journey of discovery and adventure.
                                </p>
                                {/* Key Highlights */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                        <div className="text-2xl font-bold text-[#fcd00e] mb-1">8</div>
                                        <div className="text-sm text-white/80">World's Highest Peaks</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                        <div className="text-2xl font-bold text-[#fcd00e] mb-1">10</div>
                                        <div className="text-sm text-white/80">UNESCO Heritage Sites</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                        <div className="text-2xl font-bold text-[#fcd00e] mb-1">100+</div>
                                        <div className="text-sm text-white/80">Ethnic Cultures</div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Content - Image Cards */}
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="space-y-4">
                                        <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                            <img
                                                src="/assets/nepal/kathmandu.webp"
                                                alt="Kathmandu Valley"
                                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <div className="text-sm font-medium">Kathmandu Valley</div>
                                                <div className="text-xs opacity-80">Cultural Heritage</div>
                                            </div>
                                        </div>
                                        <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                            <img
                                                src="/assets/nepal/lumbini.webp"
                                                alt="Lumbini"
                                                className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <div className="text-sm font-medium">Lumbini</div>
                                                <div className="text-xs opacity-80">Birthplace of Buddha</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mt-8">
                                        <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                            <img
                                                src="/assets/nepal/pokhara.webp"
                                                alt="Pokhara"
                                                className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <div className="text-sm font-medium">Pokhara</div>
                                                <div className="text-xs opacity-80">City of Lakes</div>
                                            </div>
                                        </div>
                                        <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                            <img
                                                src="/assets/nepal/chitwan.webp"
                                                alt="Chitwan"
                                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <div className="text-sm font-medium">Chitwan</div>
                                                <div className="text-xs opacity-80">Wildlife Safari</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Introduction Section */}
            <section ref={introRef} className="relative py-24 px-6 bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcd00e]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#143a31]/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-[#143a31]/10 rounded-full px-4 py-2 mb-6">
                            <span className="text-[#143a31] font-medium text-sm">WELCOME TO NEPAL</span>
                        </div>
                        <h2 className="text-5xl font-bold text-[#143a31] mb-6">A Land of Wonders</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the perfect blend of natural beauty, cultural richness, and adventure that makes Nepal truly unique
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#fcd00e]/20 rounded-full blur-xl"></div>
                            <div className="relative bg-white rounded-2xl shadow-2xl p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Nepal Culture"
                                    className="w-full h-96 object-cover rounded-xl"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-[#143a31] text-white p-6 rounded-xl shadow-xl">
                                <div className="text-3xl font-bold mb-2">147,516</div>
                                <div className="text-sm opacity-90">Square Kilometers</div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-[#143a31]/5 to-white rounded-xl p-8 border-l-4 border-[#fcd00e]">
                                <h3 className="text-2xl font-bold text-[#143a31] mb-4">Geographic Diversity</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Nestled between China and India, Nepal boasts an incredible range of landscapes from the world's highest mountains to subtropical forests. This geographical diversity creates unique ecosystems and breathtaking scenery found nowhere else on Earth.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-[#fcd00e]/5 to-white rounded-xl p-8 border-l-4 border-[#143a31]">
                                <h3 className="text-2xl font-bold text-[#143a31] mb-4">Cultural Mosaic</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Home to Mount Everest and the birthplace of Lord Buddha, Nepal has been a sacred crossroads of Hinduism and Buddhism for centuries. With over 100 ethnic groups and 90+ languages, it's a living museum of human civilization.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md border border-gray-100">
                                    <span className="text-2xl">🏔️</span>
                                    <span className="text-sm font-medium text-gray-700">Himalayan Range</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md border border-gray-100">
                                    <span className="text-2xl">🏛️</span>
                                    <span className="text-sm font-medium text-gray-700">Ancient Temples</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md border border-gray-100">
                                    <span className="text-2xl">🌿</span>
                                    <span className="text-sm font-medium text-gray-700">Rich Biodiversity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="relative py-24 px-6 overflow-hidden"
                style={{
                    backgroundImage: "url('/assets/nepal/calltoaction.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}>
                <div className="absolute bg-black/50 inset-0"></div>
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-white mb-6">Nepal By The Numbers</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Impressive statistics that showcase Nepal's growing prominence in global tourism
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "1.1M+", label: "Annual Tourists", icon: "✈️" },
                            { number: "13.1%", label: "Growth Rate", icon: "📈" },
                            { number: "10", label: "UNESCO Sites", icon: "🏛️" },
                            { number: "8", label: "World's Highest Peaks", icon: "🏔️" }
                        ].map((stat, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1 bg-[#153830] rounded-2xl blur opacity-35 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20">
                                    <div className="text-4xl mb-4">{stat.icon}</div>
                                    <div className="text-4xl font-bold text-[#fcd00e] mb-2">{stat.number}</div>
                                    <div className="text-white/90 text-sm">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <section ref={destinationsRef} className="relative py-24 px-6 bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#143a31]/5 rounded-full blur-3xl"></div>
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/10 rounded-full px-4 py-2 mb-6">
                            <span className="text-[#143a31] font-medium text-sm">MUST-VISIT DESTINATIONS</span>
                        </div>
                        <h2 className="text-5xl font-bold text-[#143a31] mb-6">Explore Nepal's Treasures</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From ancient cities to breathtaking mountain vistas, discover the diverse wonders that await you
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aboutNepalDestinations.map((destination, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                                onClick={() => {
                                    const detailSlug = destination.relatedTourPackageSlug || destination.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '');
                                    navigate(`/detaildestation/${detailSlug}`);
                                }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#143a31]/90 via-[#143a31]/50 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-[#fcd00e] text-[#143a31] px-3 py-1 rounded-full text-xs font-bold">
                                        #{index + 1}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                                    <p className="text-white/90 text-sm mb-4">
                                        {destination.description.length > 120 ? destination.description.substring(0, 120) + '...' : destination.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {destination.highlights && destination.highlights.map((highlight, idx) => (
                                            <span key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section ref={cultureRef} className="relative py-24 px-6 bg-gradient-to-br from-[#fcd00e]/5 to-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-[#143a31]/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#fcd00e]/10 rounded-full blur-xl"></div>
                </div>
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-[#143a31]/10 rounded-full px-4 py-2 mb-6">
                            <span className="text-[#143a31] font-medium text-sm">CULTURAL HERITAGE</span>
                        </div>
                        <h2 className="text-5xl font-bold text-[#143a31] mb-6">Living Cultural Heritage</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the vibrant tapestry of traditions, art, and spirituality that defines Nepal's unique cultural landscape
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Religious Harmony",
                                description: "Hinduism and Buddhism coexist peacefully, creating a unique spiritual landscape",
                                icon: "🙏",
                                color: "from-[#143a31] to-[#0f2821]"
                            },
                            {
                                title: "Ethnic Diversity",
                                description: "Over 100 ethnic groups with distinct languages, customs, and traditions",
                                icon: "🌍",
                                color: "from-[#fcd00e] to-yellow-400"
                            },
                            {
                                title: "Architectural Marvels",
                                description: "Ancient temples, palaces, and stupas showcase exquisite craftsmanship",
                                icon: "🏛️",
                                color: "from-[#143a31] to-[#0f2821]"
                            },
                            {
                                title: "Living Heritage",
                                description: "Traditions passed down through generations remain vibrant today",
                                icon: "🎭",
                                color: "from-[#fcd00e] to-yellow-400"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r opacity-25 group-hover:opacity-75 transition duration-1000 blur rounded-2xl" style={{ background: `linear-gradient(to right, ${item.color})` }}></div>
                                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-[#143a31] mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    <div className="mt-6">
                                        <div className="w-full h-1 bg-gradient-to-r rounded-full" style={{ background: `linear-gradient(to right, ${item.color})` }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Cultural Highlights */}
                    <div className="mt-20 bg-gradient-to-r from-[#143a31] to-[#0f2821] rounded-3xl p-12 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#fcd00e] mb-2">125+</div>
                                <div className="text-sm opacity-90">Ethnic Communities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#fcd00e] mb-2">123</div>
                                <div className="text-sm opacity-90">Languages Spoken</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#fcd00e] mb-2">50+</div>
                                <div className="text-sm opacity-90">Major Festivals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Activities Section */}
            <section ref={activitiesRef} className="relative py-24 px-6 bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcd00e]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#143a31]/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-[#143a31]/10 rounded-full px-4 py-2 mb-6">
                            <span className="text-[#143a31] font-medium text-sm">ADVENTURE AWAITS</span>
                        </div>
                        <h2 className="text-5xl font-bold text-[#143a31] mb-6">Thrilling Adventures</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nepal is a paradise for adventure seekers, offering world-class activities set against breathtaking natural backdrops
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: "🏔️", name: "Trekking", description: "World-class trails", gradient: "from-[#143a31] to-[#0f2821]" },
                            { icon: "🪂", name: "Paragliding", description: "Soar above valleys", gradient: "from-blue-500 to-blue-600" },
                            { icon: "🚣", name: "Rafting", description: "White water adventures", gradient: "from-cyan-500 to-cyan-600" },
                            { icon: "🪢", name: "Bungee Jumping", description: "Ultimate thrill", gradient: "from-red-500 to-red-600" },
                            { icon: "🧗", name: "Rock Climbing", description: "Scale new heights", gradient: "from-gray-600 to-gray-700" },
                            { icon: "🏍️", name: "Mountain Biking", description: "Off-road excitement", gradient: "from-green-500 to-green-600" },
                            { icon: "🦒", name: "Jungle Safari", description: "Wildlife encounters", gradient: "from-yellow-600 to-yellow-700" },
                            { icon: "⛷️", name: "Skiing", description: "Alpine adventures", gradient: "from-purple-500 to-purple-600" }
                        ].map((activity, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${activity.gradient})` }}></div>
                                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{activity.icon}</div>
                                    <h3 className="text-lg font-bold text-[#143a31] mb-2 text-center">{activity.name}</h3>
                                    <p className="text-sm text-gray-600 text-center">{activity.description}</p>
                                    <div className="mt-4 w-full h-1 bg-gradient-to-r rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${activity.gradient})` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Unique to Nepal Section */}
            <section ref={uniqueRef} className="relative py-24 px-6 bg-gradient-to-br from-[#143a31] to-[#0f2821] overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-20 w-64 h-64 border-4 border-[#fcd00e] rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-[#fcd00e] rounded-full"></div>
                </div>
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <span className="text-[#fcd00e] font-medium text-sm">EXCLUSIVELY NEPALESE</span>
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-6">Only in Nepal</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Discover unique products and experiences found nowhere else in the world
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Unique Products */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#fcd00e]/20 flex items-center justify-center mr-4">
                                    <span className="text-2xl">🛍️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Exclusive Products</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "Pashmina Shawls", description: "The world's finest cashmere wool from Himalayan goats" },
                                    { name: "Thangka Paintings", description: "Intricate Buddhist religious art on cotton or silk" },
                                    { name: "Khukuri Knives", description: "Traditional curved Nepalese knife with historical significance" },
                                    { name: "Himalayan Singing Bowls", description: "Handcrafted metal bowls used for meditation and healing" },
                                    { name: "Nepali Tea", description: "High-altitude teas with unique flavors from the Himalayas" },
                                    { name: "Lokta Paper", description: "Traditional handmade paper from the bark of the Daphne plant" }
                                ].map((item, index) => (
                                    <div key={index} className="group cursor-pointer">
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-[#fcd00e] rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd00e] transition-colors duration-300">{item.name}</h4>
                                                <p className="text-sm text-white/70">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Unique Experiences */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#fcd00e]/20 flex items-center justify-center mr-4">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Unique Experiences</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "Everest Flight Seeing", description: "Witness the world's highest peak up close from a scenic flight" },
                                    { name: "Traditional Homestays", description: "Live with local families in authentic Nepalese villages" },
                                    { name: "Himalayan Meditation", description: "Meditate in monasteries at high altitudes with spiritual masters" },
                                    { name: "Traditional Healing", description: "Experience ancient Ayurvedic and Tibetan healing practices" },
                                    { name: "Festival Participation", description: "Join unique celebrations like Indra Jatra or Ghode Jatra" },
                                    { name: "Newari Cuisine Experience", description: "Taste the distinctive flavors of the Newar community" }
                                ].map((item, index) => (
                                    <div key={index} className="group cursor-pointer">
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-[#fcd00e] rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd00e] transition-colors duration-300">{item.name}</h4>
                                                <p className="text-sm text-white/70">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Unique Natural Phenomena */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#fcd00e]/20 flex items-center justify-center mr-4">
                                    <span className="text-2xl">🌿</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Natural Wonders</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "One-Horned Rhinoceros", description: "See the rare species in Chitwan National Park" },
                                    { name: "Red Panda", description: "Spot the elusive red panda in its natural habitat" },
                                    { name: "Himalayan Terraces", description: "Witness the stunning terraced farming landscapes" },
                                    { name: "High-Altitude Lakes", description: "Visit pristine lakes at elevations over 4,000 meters" },
                                    { name: "Rhododendron Forests", description: "Walk through forests of Nepal's national flower in bloom" },
                                    { name: "Yak Grazing", description: "See yaks grazing in high-altitude pastures" }
                                ].map((item, index) => (
                                    <div key={index} className="group cursor-pointer">
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-[#fcd00e] rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white group-hover:text-[#fcd00e] transition-colors duration-300">{item.name}</h4>
                                                <p className="text-sm text-white/70">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center bg-gradient-to-r from-[#fcd00e]/30 to-yellow-400/30 backdrop-blur-sm rounded-full px-6 py-3">
                            <span className="text-white font-medium">Take home a piece of Nepal's uniqueness - souvenirs and memories that can't be found anywhere else</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section ref={eventsRef} className="relative py-24 px-6 bg-white overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-[#153931] backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <span className="text-white font-medium text-sm">FESTIVALS & EVENTS</span>
                        </div>
                        <h2 className="text-5xl font-bold mb-6">Vibrant Celebrations</h2>
                        <p className="text-xl text-black/70 max-w-3xl mx-auto">
                            Immerse yourself in Nepal's colorful festivals that celebrate its rich cultural heritage and traditions
                        </p>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#153931]"></div>
                        <div className="space-y-16">
                            {[
                                {
                                    name: "Dashain",
                                    description: "15-day Hindu festival celebrating victory over evil with family gatherings and traditional rituals",
                                    timing: "September-October",
                                    image: "/assets/festivals/dashain.webp",
                                    color: "#fcd00e"
                                },
                                {
                                    name: "Tihar",
                                    description: "Festival of lights honoring brothers and sisters with beautiful decorations and celebrations",
                                    timing: "October-November",
                                    image: "/assets/festivals/tihar.webp",
                                    color: "#fcd00e"
                                },
                                {
                                    name: "Holi",
                                    description: "Festival of colors celebrating spring and the victory of good over evil",
                                    timing: "March",
                                    image: "/assets/festivals/holi.webp",
                                    color: "#fcd00e"
                                },
                                {
                                    name: "Bisket Jatra",
                                    description: "Nepali New Year celebration in Bhaktapur with chariot processions and cultural performances",
                                    timing: "April",
                                    image: "/assets/festivals/bisketJatra.webp",
                                    color: "#fcd00e"
                                }
                            ].map((festival, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-1/2 px-8">
                                        <div className="group relative hover:scale-105 transition-transform duration-500">
                                            <div className="absolute -inset-1 opacity-100 transition duration-1000 blur rounded-xl bg-[#153931]"></div>
                                            <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: festival.color }}></div>
                                                    <h3 className="text-2xl font-bold text-white">{festival.name}</h3>
                                                </div>
                                                <p className="text-white/90 mb-4 leading-relaxed">{festival.description}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm text-white/70">
                                                        📅 {festival.timing}
                                                    </div>
                                                    <button className="text-sm text-white hover:text-[#fcd00e] transition-colors duration-300">
                                                        Learn More →
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex justify-center">
                                        <div className="relative group">
                                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" style={{ backgroundColor: festival.color }}></div>
                                            <img
                                                src={festival.image}
                                                alt={festival.name}
                                                className="relative w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section ref={ctaRef} className="relative py-24 px-6 bg-gradient-to-br from-[#143a31] to-[#0f2821] overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-20 left-20 w-96 h-96 border-4 border-[#fcd00e] rounded-full"></div>
                        <div className="absolute bottom-20 right-20 w-64 h-64 border-4 border-[#fcd00e] rounded-full"></div>
                    </div>
                </div>
                <div className="container mx-auto relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                            <div className="w-2 h-2 bg-[#fcd00e] rounded-full animate-pulse"></div>
                            <span className="text-[#fcd00e] font-medium text-sm">READY FOR ADVENTURE?</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Experience Nepal Like Never Before
                        </h2>
                        <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Whether you're seeking adventure, spiritual enlightenment, or cultural immersion,
                            Nepal offers experiences that will transform your perspective and create memories to last a lifetime.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="/contact">
                                <button className="group relative bg-[#fcd00e] text-[#143a31] px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                    <span className="relative z-10">Plan Your Visit</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </a>
                        </div>
                        <div className="mt-16 flex flex-wrap justify-center gap-8">
                            <div className="flex items-center space-x-3 text-white/80">
                                <span className="text-2xl">🏔️</span>
                                <span className="text-sm">Adventure</span>
                            </div>
                            <div className="flex items-center space-x-3 text-white/80">
                                <span className="text-2xl">🏛️</span>
                                <span className="text-sm">Culture</span>
                            </div>
                            <div className="flex items-center space-x-3 text-white/80">
                                <span className="text-2xl">🌿</span>
                                <span className="text-sm">Nature</span>
                            </div>
                            <div className="flex items-center space-x-3 text-white/80">
                                <span className="text-2xl">🙏</span>
                                <span className="text-sm">Spirituality</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutNepal;