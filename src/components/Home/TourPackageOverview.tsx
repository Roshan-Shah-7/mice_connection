import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define TypeScript interfaces

// Define TypeScript interfaces (now simpler as data comes from tourPackagesData.ts)
import { tourPackages } from '../../data/tourPackagesData'; // Import tourPackages from the data file

const TourPackageOverview = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const introRef = useRef<HTMLParagraphElement | null>(null);
    const swiperRef = useRef<HTMLDivElement | null>(null);
    const hasAnimatedRef = useRef(false);
    const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);

    // GSAP animations with proper cleanup
    useGSAP(
        () => {
            // Only run animation once, not on every re-render
            if (hasAnimatedRef.current) return;
            // Initial animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                }
            });

            // Heading animation
            tl.fromTo(
                headingRef.current,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            )
                // Introduction animation
                .fromTo(
                    introRef.current,
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8
                    },
                    '-=0.5'
                )
                // Swiper container animation
                .fromTo(
                    swiperRef.current,
                    {
                        y: 80,
                        opacity: 0,
                        scale: 0.95
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: 'power3.out'
                    },
                    '-=0.4'
                );

            // Parallax effect on section
            const bgElement = containerRef.current?.querySelector('.tour-bg');
            if (bgElement) {
                gsap.to(bgElement, {
                    yPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            }

            hasAnimatedRef.current = true;
            
            // Cleanup function
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        },
        {
            scope: containerRef,
            dependencies: []
        }
    );

    // Initialize Swiper after component mounts
    useEffect(() => {
        setIsSwiperInitialized(true);
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]"
            itemScope
            itemType="https://schema.org/Trip"
        >
            {/* Background decorative element */}
            <div className="tour-bg absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e332e] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0e332e] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e332e] mb-4"
                    >
                        Tour Package Overview
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Discover the beauty of Nepal with our curated tour experiences
                    </p>
                    <div className="w-24 h-1 bg-[#0e332e] mx-auto mt-6"></div>
                </div>

                {/* Introduction */}
                <div
                    ref={introRef}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <p className="text-lg text-gray-700">
                        From the majestic Himalayas to rich cultural heritage, Nepal offers unforgettable experiences.
                        Our expertly crafted tour packages ensure you discover the best of Nepal with comfort, safety, and authentic local experiences.
                    </p>
                </div>

                {/* Swiper Container */}
                <div ref={swiperRef} className="mb-16">
                    {isSwiperInitialized && (
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 10,
                                stretch: 0,
                                depth: 100,
                                modifier: 2,
                                slideShadows: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}
                            className="tourSwiper"
                        >
                            {tourPackages.map((tour) => (
                                <SwiperSlide key={tour.id} style={{ width: '320px' }}>
                                    {/* Card with full-width image */}
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl">
                                        {/* Background Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-110"
                                            style={{ backgroundImage: `url(${tour.image})` }}
                                        ></div>

                                        {/* Overlay with gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e332e]/90 via-[#0e332e]/40 to-transparent"></div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                            {/* Title (Serif) */}
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                                                {tour.title}
                                            </h3>

                                            {/* Description (Sans-serif) */}
                                            <p className="text-base md:text-lg font-sans mb-4 text-gray-100">
                                                {tour.description.length > 120 ? tour.description.substring(0, 120) + '...' : tour.description}
                                            </p>

                                            {/* CTA Button */}
                                            <button
                                                className="px-6 py-3 bg-[#D4AF37] cursor-pointer text-white font-medium rounded-full transition-all duration-500 hover:bg-[#0e332e] transform hover:scale-105"
                                                onClick={() => {
                                                    navigate(`/tour-packages/${tour.slug}`);
                                                }}
                                            >
                                                {tour.category === "Trekking" ? "Start Your Journey" : "View Details"}
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                {/* Additional Information */}
                <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-[#0e332e] mb-4">Custom Tour Packages</h3>
                        <p className="text-gray-700 mb-6">
                            Can't find exactly what you're looking for? We can create a custom tour package tailored to your interests, budget, and schedule. Whether it's a family vacation, corporate retreat, or special celebration, we'll craft the perfect Nepalese experience for you.
                        </p>
                        <Link to="/contact">
                            <button className="px-8 py-3 bg-transparent border-2 cursor-pointer border-[#0e332e] text-[#0e332e] font-medium rounded-full hover:bg-[#0e332e] hover:text-white transform transition-all duration-500 hover:scale-105">
                                Create Custom Tour
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TourPackageOverview;