import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define TypeScript interfaces
interface Testimonial {
    id: number;
    name: string;
    testimonial: string;
    rating: number;
    featured?: boolean;
}

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);
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

    // Testimonials data with TypeScript typing
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Sarah Chen",
            testimonial: "The MICE Connection planned an incredible 'Annapurna Cultural Trek' for us. The guides were knowledgeable, and every detail, from accommodation to cultural experiences, was perfectly arranged. Truly an unforgettable journey!",
            rating: 5,
            featured: true
        },
        {
            id: 10,
            name: "Sophie Dubois",
            testimonial: "Planning our destination wedding in Bali with The MICE Connection was stress-free and magical. Every element, from the stunning venue to the exquisite catering, was meticulously arranged, creating memories we'll cherish forever.",
            rating: 5,
        },

        {
            id: 2,
            name: "David Miller",
            testimonial: "The MICE Connection managed our 'Corporate Leadership Summit' conference, and the results were outstanding. From venue selection to speaker coordination, everything was handled with utmost professionalism. Our delegates were thoroughly impressed.",
            rating: 5,
        },
        {
            id: 3,
            name: "Maria Garcia",
            testimonial: "Our family holiday 'Chitwan Wildlife Safari' was made magical by The MICE Connection. The jungle safari and cultural programs were fantastic, and their team ensured our comfort throughout. A perfect blend of adventure and relaxation!",
            rating: 5,
        },
        {
            id: 8,
            name: "Emily White",
            testimonial: "The MICE Connection orchestrated a flawless 'Thailand Incentive Experience' for our top performers. The itinerary was perfectly balanced, combining luxury, adventure, and cultural immersion. Truly an exceptional experience!",
            rating: 5,
        },
        {
            id: 4,
            name: "Roshan Shah",
            testimonial: "The MICE Connection handled our 'Annual Corporate Retreat' with remarkable professionalism. From conceptualization to execution, their team ensured every aspect was perfect, leading to a highly successful and memorable gathering.",
            rating: 4,
        },
        {
            id: 5,
            name: "Kenji Tanaka",
            testimonial: "Exploring the ancient city of Bhaktapur with The MICE Connection's 'Heritage Discovery Tour' was an enriching experience. Their historical insights and seamless arrangements allowed us to truly immerse ourselves in Nepal's rich heritage. Highly recommended for cultural tours!",
            rating: 5,
        },
        {
            id: 6,
            name: "Priya Sharma",
            testimonial: "The product launch organized by The MICE Connection was a resounding success! Their innovative ideas and meticulous planning created an impactful event that exceeded all our expectations.",
            rating: 5,
        },
        {
            id: 7,
            name: "Suresh Karki",
            testimonial: "Our 'Everest Base Camp Expedition' with The MICE Connection was a dream come true. The support team was incredible, and the entire journey was managed flawlessly. An adventure of a lifetime, thanks to their expertise!",
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
                                                className="text-gray-700 mb-6"
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
                        <h3 className="text-2xl font-bold text-[#0e332e] mb-4">Ready to Create Your Travel Story?</h3>
                        <p className="text-gray-700 mb-6">
                            Join our list of satisfied clients and let us help you create an unforgettable event experience.
                        </p>
                        <Link to="/contact">
                            <button className="px-8 py-3 cursor-pointer bg-[#0e332e] text-white font-medium rounded-full hover:bg-[#D4AF37] hover:text-[#0e332e] transform transition-all duration-500 hover:scale-105">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;