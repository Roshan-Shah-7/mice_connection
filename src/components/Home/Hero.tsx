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
        image: '/assets/tour/tours.jpg',
        path: '/tours-&-travels'
    },
    {
        icon: <TbUsers size={28} className="text-blue-600" />,
        title: 'Meetings',
        description: 'Productive & professional setups',
        image: '/assets/tour/meetings.jpg',
        path: '/meetings'
    },
    {
        icon: <TbGift size={28} className="text-green-600" />,
        title: 'Incentives',
        description: 'Rewarding travel experiences',
        image: '/assets/tour/incentives.jpg',
        path: '/incentives'
    },
    {
        icon: <TbBuildingCommunity size={28} className="text-purple-600" />,
        title: 'Conferences',
        description: 'Large-scale corporate events',
        image: '/assets/tour/conferences.jpg',
        path: '/conferences'
    },
    {
        icon: <TbPodium size={28} className="text-red-600" />,
        title: 'Exhibitions',
        description: 'Showcasing products & services',
        image: '/assets/tour/exhibitions.jpg',
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
        <section
            ref={containerRef}
            className="w-full flex"
            aria-labelledby="hero-title"
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
                        >
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
                        >
                            Let us plan your perfect
                            <br />
                            <span className="text-[#ffc400] bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                Nepal Experience
                            </span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                            The MICE Connection offers custom-crafted packages for unforgettable corporate meetings, incentives, conferences, and exhibitions across the nation.
                        </p>

                        <div className="mb-10">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
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
                                        image={cat.image}
                                        path={cat.path}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact">
                                <button className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center">
                                    Get Started
                                    <TbArrowRight className="ml-2" />
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="border border-gray-300 cursor-pointer hover:border-amber-500 text-gray-700 hover:text-amber-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;