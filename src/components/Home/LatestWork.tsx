import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define TypeScript interface
interface LatestWork {
    id: number;
    title: string;
    description: string;
    image: string;
    year: string;
}

const LatestWork = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);
    const underlineRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Function to add refs to cards
    const addToCardRefs = (el: HTMLDivElement | null) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    // Latest work data with TypeScript typing
    const latestWorks: LatestWork[] = [
        {
            id: 1,
            title: "TMC in Everest Women's Volleyball League",
            description: "The MICE Connection is committed to fostering gender equality and empowering women in all fields, including sports. By supporting the Lalitpur Queens in the Everest Women’s Volleyball League, we aim to inspire women to break barriers and pursue excellence. This groundbreaking league marks a significant step forward for women’s sports in South Asia, and we are proud to stand alongside these talented athletes as they showcase their skill, determination, and leadership. Together, we are building a future where women can thrive and succeed, both on and off the court.",
            image: "/assets/works/wo.jpg",
            year: "2024"
        },
        {
            id: 2,
            title: "HONORING CHINESE PARAGLIDER IN NEPAL",
            description: "Chinese paraglider Mr. Li Shengtao received a prestigious accolade for his daring feat of paragliding from the peak of the world’s tallest mountain, Mount Everest, at an astonishing altitude of 8,000 meters. The honor was conferred by Babu Adventure Paragliding, Seven Summit Treks Pvt. Ltd., and Nepal Big Mountain Travels, in collaboration with The MICE Connection.",
            image: "/assets/works/chi.jpg",
            year: "2023"
        },
        {
            id: 3,
            title: "A Seminar on Economic Challenges and Opportunities and A Cultural Exchange Event",
            description: "The MICE Connection is proud to be associated with the successful completion of a highly impactful seminar that brought together distinguished guests, including the esteemed Chinese Ambassador, economist Mr. Wu Xiabo, and Nepal’s Tourism Minister, Hit Bahadur Tamang. This event marked a significant milestone in fostering cultural exchange and collaboration between Nepal and China, highlighting the importance of bilateral relations in tourism and economic development.",
            image: "/assets/works/sem.jpg",
            year: ""
        },
        {
            id: 4,
            title: "The Unsilenced, Documentary - Powered by The MICE Connection",
            description: "The MICE Connection is honored to have played a key role in the documentary The Unsilenced, which tells the powerful stories and struggles of four remarkable women. Our team handled digital marketing, media mobilization, public relations, and event management for the project. The Unsilenced has garnered numerous international awards and earned widespread recognition across various countries. Its premiere was held in Nepal in October at CDC Cinemas and soon to be organised in Australia and USA.",
            image: "/assets/works/Unsilenced.jpg",
            year: ""
        },
    ];

    return (
        <section
            ref={containerRef}
            className="w-full py-20 relative overflow-hidden bg-[#E6EAE6]"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            {/* Background decorative element */}
            <div className="work-bg absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e332e] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0e332e] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0e332e] mb-4"
                    >
                        Recent Events & Experiences
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4" ref={underlineRef}></div>
                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl font-sans text-gray-700 max-w-3xl mx-auto"
                    >
                        From global conferences to luxury incentive retreats, here's a glimpse of the experiences we've curated.
                    </p>
                </div>

                {/* New Layout: Alternating Image and Text */}
                <div className="space-y-16 md:space-y-24">
                    {latestWorks.map((work, index) => (
                        <div
                            key={work.id}
                            ref={addToCardRefs}
                            className={`group relative rounded-2xl overflow-hidden bg-white shadow-lg transform transition-all duration-500 hover:shadow-2xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex flex-col md:flex`}
                            itemProp="exampleOfWork"
                            itemScope
                            itemType="https://schema.org/CreativeWork"
                        >
                            {/* Image Section */}
                            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Year Badge */}
                                <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {work.year}
                                </div>

                                {/* Gold shimmer effect on hover */}
                                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="shimmer absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <div className="mb-4">
                                    <span className="text-sm text-[#D4AF37] font-medium uppercase tracking-wider">
                                        Featured Event
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0e332e] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300" itemProp="name">
                                    {work.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed" itemProp="description">
                                    {work.description}
                                </p>

                                <div className="flex items-center space-x-4">
                                    <div className="cursor-pointer flex items-center text-gray-500 group-hover:text-[#D4AF37] transition-colors duration-300 border p-2 rounded-full">
                                        <a href="" className='flex items-center'>
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-sm">Learn more</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-16">
                    <button className="px-8 py-3 bg-transparent border-2 border-[#0e332e] text-[#0e332e] font-medium rounded-full hover:bg-[#0e332e] hover:text-white transform transition-all duration-500 hover:scale-105">
                        Explore All Projects
                    </button>
                </div>
            </div>

        </section>
    );
};

export default LatestWork;