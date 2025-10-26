import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TbBuildingCommunity, TbGift, TbUsers, TbPodium, TbArrowRight, TbPlaneArrival } from 'react-icons/tb';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

const categories = [
    {
        icon: <TbPlaneArrival size={28} className="text-orange-600" />,
        title: 'Tours',
        description: 'Curated travel experiences',
        path: '/tours-&-travels'
    },
    {
        icon: <TbUsers size={28} className="text-blue-600" />,
        title: 'Meetings',
        description: 'Productive & professional setups',
        path: '/meetings'
    },
    {
        icon: <TbGift size={28} className="text-green-600" />,
        title: 'Incentives',
        description: 'Rewarding travel experiences',
        path: '/incentives'
    },
    {
        icon: <TbBuildingCommunity size={28} className="text-purple-600" />,
        title: 'Conferences',
        description: 'Large-scale corporate events',
        path: '/conferences'
    },
    {
        icon: <TbPodium size={28} className="text-red-600" />,
        title: 'Exhibitions',
        description: 'Showcasing products & services',
        path: '/exhibitions'
    },
];

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const hasAnimatedRef = useRef(false);

    useGSAP(() => {
        // Only run animation once, not on every re-render
        if (hasAnimatedRef.current) return;
        
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out', duration: 1 }
        });

        tl.fromTo('.hero-media-container',
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1 }
        )
            .fromTo('.hero-content > *',
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.2 },
                "-=1"
            )
            .fromTo('.category-card',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15 },
                "-=0.5"
            )
            .fromTo('.nav-buttons',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=0.5"
            );
            
        hasAnimatedRef.current = true;

    }, { scope: containerRef });

    return (
        <>
            <title>The MICE Connection</title>
            <meta name="description" content="The MICE Connection offers custom-crafted packages for unforgettable tour, travel, meetings, incentives, conferences, and exhibitions across Nepal. Expert event planning services." />
            <meta name="keywords" content="MICE, meetings, incentives, conferences, exhibitions, Nepal, event planning, corporate events, business travel, corporate meetings Nepal, conferences Nepal, tour and travel Nepal" />
            <meta property="og:title" content="Corporate MICE Services in Nepal | The MICE Connection" />
            <meta property="og:description" content="The MICE Connection offers custom-crafted packages for unforgettable corporate meetings, incentives, conferences, and exhibitions across Nepal. Expert event planning services." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.themicenepal.com" />
            <link rel="canonical" href="https://www.themicenepal.com" />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "The MICE Connection",
                    "description": "The MICE Connection offers custom-crafted packages for unforgettable tour, travel, meetings, incentives, conferences, and exhibitions across Nepal.",
                    "url": "https://www.themicenepal.com",
                    "logo": "https://www.themicenepal.com/logo.png",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Nepal"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+977-123456789",
                        "contactType": "customer service",
                        "areaServed": "NP"
                    },
                    "sameAs": [
                        "https://www.facebook.com/themicenepal",
                        "https://www.instagram.com/themicenepal",
                        "https://www.linkedin.com/company/themicenepal"
                    ],
                    "areaServed": "NP",
                    "serviceType": ["Meetings", "Incentives", "Conferences", "Exhibitions", "Tours & Travels"]
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Home - The MICE Connection",
                    "description": "The MICE Connection offers custom-crafted packages for unforgettable corporate meetings, incentives, conferences, and exhibitions across Nepal.",
                    "url": "https://www.themicenepal.com",
                    "breadcrumb": {
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.themicenepal.com"
                        }]
                    }
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": ["Meetings", "Incentives", "Conferences", "Exhibitions", "Tours & Travels"],
                    "provider": {
                        "@type": "Organization",
                        "name": "The MICE Connection"
                    },
                    "areaServed": {
                        "@type": "Country",
                        "name": "Nepal"
                    },
                    "offers": {
                        "@type": "OfferCatalog",
                        "name": "MICE Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Corporate Meetings"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Incentive Travel"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Conferences"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Exhibitions"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Tours & Travels"
                                }
                            }
                        ]
                    }
                })}
            </script>
            
            <section
                ref={containerRef}
                className="w-full flex"
                aria-labelledby="hero-title"
                itemScope
                itemType="https://schema.org/WebPage"
            >
                <div className="w-full grid grid-cols-1 lg:flex mt-12 lg:mt-20 xl:mt-26">
                    {/* Left Column - Video */}
                    <div className="hero-media-container w-full lg:w-[50%] flex items-center justify-start">
                        <div className="h-[90vh] w-full overflow-hidden shadow-2xl">
                            <video
                                src="/assets/home/hero.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                aria-label="Promotional video for The MICE Connection's services in Nepal"
                                poster="/assets/home/homeAbout.webp"
                                preload="metadata"
                                itemProp="video"
                            >
                                <source src="/assets/home/hero.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="hero-content w-full lg:w-[45%] flex flex-col justify-center p-8 md:p-12 lg:p-16">
                        <div className="mx-auto lg:mx-0 w-full">
                            <h1
                                id="hero-title"
                                className="text-4xl md:text-5xl font-bold text-[#0e332e] leading-tight mb-6"
                                itemProp="headline"
                            >
                                Let us plan your perfect
                                <br />
                                <span className="text-[#ffc400] bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                    Nepal Experience
                                </span>
                            </h1>
                            <p className="text-lg text-gray-700 mb-10 leading-relaxed" itemProp="description">
                                The MICE Connection offers custom-crafted packages for unforgettable corporate meetings, incentives, conferences, and exhibitions across the nation.
                            </p>

                            <div className="mb-10" itemScope itemType="https://schema.org/OfferCatalog">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center" itemProp="name">
                                    Explore Our Services
                                    <TbArrowRight className="ml-2 text-amber-600" />
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {categories.map((cat, index) => (
                                        <CategoryCard
                                            key={index}
                                            icon={cat.icon}
                                            title={cat.title}
                                            description={cat.description}
                                            path={cat.path}
                                            itemScope
                                            itemType="https://schema.org/Offer"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" aria-label="Get Started with The MICE Connection">
                                    <button className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center">
                                        Get Started
                                        <TbArrowRight className="ml-2" />
                                    </button>
                                </Link>
                                <Link to="/about" aria-label="Learn More about The MICE Connection">
                                    <button className="border border-gray-300 cursor-pointer hover:border-amber-500 text-gray-700 hover:text-amber-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;