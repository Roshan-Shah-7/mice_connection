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
interface Testimonial {
    id: number;
    name: string;
    company: string;
    testimonial: string;
    rating: number;
    featured?: boolean;
}

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);
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
                // Subtitle animation
                .fromTo(
                    subtitleRef.current,
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
            const bgElement = containerRef.current?.querySelector('.testimonials-bg');
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

    // Testimonials data with TypeScript typing
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Anuska Singh",
            company: "Kritya Studio",
            testimonial: "The MICE Connection's team is a pleasure to work with. Their expertise and personalized approach made our company retreat a standout success. They tailored every aspect to our needs and exceeded our expectations.",
            rating: 5,
            featured: true
        },
        {
            id: 2,
            name: "Wilson LA",
            company: "Australia",
            testimonial: "The MICE Connection's dedication and professionalism were evident throughout the planning and execution of our international event. They navigated complex logistics with ease, leaving us with a successful event and happy participants.",
            rating: 5,
        },
        {
            id: 3,
            name: "Sano Babu Sunuwar",
            company: "Babu Adventure Paragliding",
            testimonial: "The MICE Connection's team went above and beyond to make our conference a success in a very short span of time. From strategic planning to flawless execution, their expertise shone through. They truly understand the needs of their clients.",
            rating: 5,
        },
    ];

    // Render star rating
    const renderRating = (rating: number) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-4 h-4 ${index < rating ? 'text-[#D4AF37]' : 'text-gray-300'
                            }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section
            ref={containerRef}
            className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]"
            itemScope
            itemType="https://schema.org/Review"
        >
            {/* Background decorative element */}
            <div className="testimonials-bg absolute inset-0 opacity-5">
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
                        Client Testimonials
                    </h2>
                    <p
                        ref={subtitleRef}
                        className="text-xl text-gray-700 max-w-3xl mx-auto"
                    >
                        Hear from our valued clients about their experiences working with The MICE Connection
                    </p>
                    <div className="w-24 h-1 bg-[#0e332e] mx-auto mt-6"></div>
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
                            className="testimonialSwiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id} className="testimonial-card py-10">
                                    {/* Testimonial Card */}
                                    <div className={`group bg-white rounded-2xl shadow-lg p-6 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative ${testimonial.featured ? 'ring-2 ring-[#D4AF37]' : ''
                                        }`}
                                        itemProp="review"
                                        itemScope
                                        itemType="https://schema.org/Review"
                                    >
                                        {/* Featured badge */}
                                        {testimonial.featured && (
                                            <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                                                FEATURED
                                            </div>
                                        )}

                                        {/* Gold accent border on hover */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37] rounded-2xl transition-all duration-500"></div>

                                        {/* Quote Icon */}
                                        <div className="mb-4">
                                            <blockquote className="text-4xl text-[#D4AF37]/20">
                                                "
                                            </blockquote>
                                        </div>

                                        {/* Testimonial Content */}
                                        <div className="relative z-10">
                                            {/* Rating */}
                                            <div className="mb-4">
                                                {renderRating(testimonial.rating)}
                                            </div>

                                            {/* Testimonial Text */}
                                            <blockquote
                                                className="text-gray-700 mb-6 line-clamp-4"
                                                itemProp="reviewBody"
                                            >
                                                "{testimonial.testimonial}"
                                            </blockquote>

                                            {/* Client Info */}
                                            <div className="flex items-center">

                                                {/* Client Details */}
                                                <div>
                                                    <h4 className="font-bold text-[#0e332e] group-hover:text-[#D4AF37] transition-colors duration-500" itemProp="author">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-xs text-gray-500">
                                                        {testimonial.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gold shimmer effect on hover */}
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="shimmer absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#0e332e] mb-4">Ready to Create Your Success Story?</h3>
                        <p className="text-gray-700 mb-6">
                            Join our list of satisfied clients and let us help you create an unforgettable event experience.
                        </p>
                        <button className="px-8 py-3 bg-[#0e332e] text-white font-medium rounded-full hover:bg-[#D4AF37] hover:text-[#0e332e] transform transition-all duration-500 hover:scale-105">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;