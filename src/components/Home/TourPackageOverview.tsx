import { useRef, useState, useEffect } from 'react';
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
interface TourPackage {
    id: number;
    name: string;
    description: string;
    price?: string;
    duration?: string;
    image: string;
    buttonText: string;
}

const TourPackageOverview = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const introRef = useRef<HTMLParagraphElement | null>(null);
    const swiperRef = useRef<HTMLDivElement | null>(null);
    const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);

    // GSAP animations with proper cleanup
    useGSAP(
        () => {
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

    // Tour package data with TypeScript typing
    const tourPackages: TourPackage[] = [
        {
            id: 1,
            name: "Luxury Incentive Tour in Nepal",
            description: "Experience the perfect blend of luxury and adventure in the heart of the Himalayas with our exclusive incentive tour package.",
            price: "$2,499",
            duration: "7 Days / 6 Nights",
            image: "/src/assets/tours/luxury-incentive.jpg",
            buttonText: "View Details"
        },
        {
            id: 2,
            name: "Executive Conference Retreat",
            description: "Host your next corporate conference in Nepal's most prestigious venues with state-of-the-art facilities and impeccable service.",
            price: "$3,299",
            duration: "5 Days / 4 Nights",
            image: "/src/assets/tours/conference-retreat.jpg",
            buttonText: "Start Your Journey"
        },
        {
            id: 3,
            name: "Cultural Immersion Experience",
            description: "Discover Nepal's rich cultural heritage with guided tours to ancient temples, palaces, and traditional villages.",
            price: "$1,899",
            duration: "8 Days / 7 Nights",
            image: "/src/assets/tours/cultural-immersion.jpg",
            buttonText: "View Details"
        },
        {
            id: 4,
            name: "Himalayan Adventure Package",
            description: "Challenge yourself with thrilling trekking adventures in the Himalayas, complete with expert guides and premium accommodations.",
            price: "$2,799",
            duration: "10 Days / 9 Nights",
            image: "/src/assets/tours/himalayan-adventure.jpg",
            buttonText: "Start Your Journey"
        },
        {
            id: 5,
            name: "Wellness & Yoga Retreat",
            description: "Rejuvenate your mind and body with our exclusive wellness retreat in serene Himalayan settings with expert yoga instructors.",
            price: "$1,599",
            duration: "6 Days / 5 Nights",
            image: "/src/assets/tours/wellness-retreat.jpg",
            buttonText: "View Details"
        },
        {
            id: 6,
            name: "Wildlife Safari Experience",
            description: "Explore Nepal's diverse wildlife with guided safaris in Chitwan and Bardia National Parks, staying in luxury jungle lodges.",
            price: "$1,799",
            duration: "5 Days / 4 Nights",
            image: "/src/assets/tours/wildlife-safari.jpg",
            buttonText: "Start Your Journey"
        },
        {
            id: 7,
            name: "Spiritual Journey",
            description: "Embark on a transformative spiritual journey through Nepal's sacred sites, monasteries, and meditation centers.",
            price: "$1,299",
            duration: "7 Days / 6 Nights",
            image: "/src/assets/tours/spiritual-journey.jpg",
            buttonText: "View Details"
        },
        {
            id: 8,
            name: "Luxury Honeymoon Package",
            description: "Celebrate your love in the most romantic settings Nepal has to offer, with private luxury accommodations and exclusive experiences.",
            price: "$3,599",
            duration: "8 Days / 7 Nights",
            image: "/src/assets/tours/honeymoon-package.jpg",
            buttonText: "Start Your Journey"
        }
    ];

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
                                <SwiperSlide key={tour.id} className="tour-card">
                                    {/* Card with full-width image */}
                                    <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl">
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
                                                {tour.name}
                                            </h3>

                                            {/* Description (Sans-serif) */}
                                            <p className="text-base md:text-lg font-sans mb-4 text-gray-100">
                                                {tour.description}
                                            </p>

                                            {/* Price / Duration (Optional) */}
                                            {(tour.price || tour.duration) && (
                                                <div className="flex items-center mb-6 text-[#D4AF37] text-sm">
                                                    {tour.price && (
                                                        <span className="mr-4">{tour.price}</span>
                                                    )}
                                                    {tour.duration && (
                                                        <span>{tour.duration}</span>
                                                    )}
                                                </div>
                                            )}

                                            {/* CTA Button */}
                                            <button className="px-6 py-3 bg-[#D4AF37] text-white font-medium rounded-full transition-all duration-500 hover:bg-[#0e332e] transform hover:scale-105">
                                                {tour.buttonText}
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
                        <button className="px-8 py-3 bg-transparent border-2 border-[#0e332e] text-[#0e332e] font-medium rounded-full hover:bg-[#0e332e] hover:text-white transform transition-all duration-500 hover:scale-105">
                            Create Custom Tour
                        </button>
                    </div>
                </div>

                {/* Structured data for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Trip",
                        "name": "Nepal Tour Packages",
                        "description": "Curated tour packages for exploring Nepal's cultural heritage, adventure activities, luxury experiences, and wildlife safaris",
                        "provider": {
                            "@type": "Organization",
                            "name": "The MICE Connection"
                        },
                        "subTrip": tourPackages.map(tour => ({
                            "@type": "Trip",
                            "name": tour.name,
                            "description": tour.description,
                            "duration": tour.duration,
                            "price": tour.price,
                            "priceCurrency": "USD"
                        }))
                    })}
                </script>
            </div>

        </section>
    );
};

export default TourPackageOverview;