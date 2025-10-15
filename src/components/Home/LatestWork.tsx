import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { latestWorks } from '../../data/latestWorkData';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);


const LatestWork = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);
    const underlineRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const hasAnimatedRef = useRef(false);

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
                    toggleActions: 'play none none none',
                    markers: false
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
                // Underline animation
                .fromTo(
                    underlineRef.current,
                    {
                        width: 0
                    },
                    {
                        width: 100,
                        duration: 1,
                        ease: 'power3.out'
                    },
                    '-=0.3'
                )
                // Cards animation with stagger
                .fromTo(
                    cardRefs.current,
                    {
                        y: 80,
                        opacity: 0,
                        scale: 0.9
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: 'back.out(1.2)'
                    },
                    '-=0.3'
                );

            // Parallax effect on section
            const bgElement = containerRef.current?.querySelector('.work-bg');
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
                cardRefs.current.forEach(card => {
                    if (!card) return;
                });
            };
        },
        {
            scope: containerRef
        }
    );

    // Function to add refs to cards
    const addToCardRefs = (el: HTMLDivElement | null) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    // Image fallback handler
    const addImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZpbGw9IiM5OTkiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
    };


    return (
        <section
            ref={containerRef}
            className="w-full py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#f0f4f0] to-[#e1e8e1]"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            {/* Background decorative element */}
            <div className="work-bg absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#0e332e] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-[#0e332e] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e332e] mb-4"
                    >
                        Recent Events & Experiences
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4" ref={underlineRef}></div>
                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                    >
                        From global conferences to luxury incentive retreats, here's a glimpse of the experiences we've curated.
                    </p>
                </div>

                {/* New Layout: Alternating Image and Text */}
                <div className="space-y-12 md:space-y-20">
                    {latestWorks
                        .sort((a, b) => parseInt(b.year) - parseInt(a.year)) // Sort by year in descending order
                        .slice(0, 4)
                        .map((work, index) => (
                        <div
                            key={work.id}
                            ref={addToCardRefs}
                            className={`group relative rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex flex-col md:flex cursor-pointer`}
                            itemProp="exampleOfWork"
                            itemScope
                            itemType="https://schema.org/CreativeWork"
                            onClick={() => navigate(`/managed-experiences-detail/${work.slug || work.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
                        >
                            {/* Image Section */}
                            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={addImageFallback}
                                    loading="lazy"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Year Badge */}
                                {work.year && (
                                    <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {work.year}
                                    </div>
                                )}

                                {/* View project button that appears on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        className="bg-white text-[#0e332e] px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card click from firing
                                            navigate(`/managed-experiences-detail/${work.slug || work.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
                                        }}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                                <div className="mb-4">
                                    <span className="text-sm text-[#D4AF37] font-medium uppercase tracking-wider">
                                        Featured Event
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-[#0e332e] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300" itemProp="name">
                                    {work.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4" itemProp="description">
                                    {work.description}
                                </p>

                                <div className="flex items-center space-x-4 mt-auto">
                                    <button
                                        className="flex items-center text-[#0e332e] group-hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card click from firing
                                            navigate(`/managed-experiences-detail/${work.slug || work.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
                                        }}
                                    >
                                        <span className="mr-2">Learn more</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-16">
                    <Link to="/managed-experiences">
                        <button className="px-8 py-3 cursor-pointer bg-transparent border-2 border-[#0e332e] text-[#0e332e] font-medium rounded-full hover:bg-[#0e332e] hover:text-white transition-all duration-300 hover:shadow-lg">
                            Explore All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestWork;