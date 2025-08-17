
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Lazy-loaded Video Component
interface LazyVideoProps {
    src: string;
    poster?: string;
    className?: string;
    [key: string]: any;
}

const LazyVideo = ({ src, poster, className, ...props }: LazyVideoProps) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (observerRef.current) {
                        observerRef.current.unobserve(entry.target);
                    }
                }
            },
            {
                root: null,
                rootMargin: '200px', // Load video 200px before it comes into view
                threshold: 0.1
            }
        );

        if (videoRef.current) {
            observerRef.current.observe(videoRef.current);
        }

        return () => {
            if (observerRef.current && videoRef.current) {
                observerRef.current.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div ref={videoRef} className="video-container">
            {isVisible ? (
                <video
                    src={src}
                    poster={poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className={className}
                    {...props}
                >
                    Your browser does not support the video tag. Please try viewing this page in a modern browser.
                </video>
            ) : (
                <div
                    className={`${className} bg-gray-200 flex items-center justify-center`}
                    style={{ backgroundImage: poster ? `url(${poster})` : 'none' }}
                >
                    <div className="text-gray-500">Loading video...</div>
                </div>
            )}
        </div>
    );
};

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const videoRef = useRef(null);

    // GSAP animations with proper cleanup
    useGSAP(
        () => {
            // Initial animations - optimized for performance
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                    duration: 1
                }
            });

            // Text animations with stagger for smooth performance
            tl.fromTo(
                titleRef.current,
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.95
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    force3D: true // Hardware acceleration
                }
            )
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
                    '-=0.6' // Overlap with title animation
                )
                .fromTo(
                    videoRef.current,
                    {
                        scale: 1.1,
                        opacity: 0,
                        filter: 'blur(10px)'
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        filter: 'blur(0px)',
                        duration: 1.5,
                        ease: 'power2.out'
                    },
                    '-=0.4'
                );

            // Parallax effect on scroll - optimized with ScrollTrigger
            gsap.to(videoRef.current, {
                yPercent: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1, // Smooth scrubbing
                    invalidateOnRefresh: true // Recalculate on resize
                }
            });
        },
        {
            scope: containerRef,
        }
    );

    return (
        <section
            ref={containerRef}
            className="w-full min-h-screen relative mx-auto max-w-[1440px] px-4 md:px-6 flex flex-col md:justify-start gap-6 py-10"
            itemScope
            itemType="https://schema.org/Organization"
        >
            {/* Text Content with accessibility improvements */}
            <div className="content text-center md:text-start w-full space-y-4 md:flex justify-between items-end">
                <h1
                    ref={titleRef}
                    className="text-2xl text-[#0e332e] sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-snug mt-20 md:mt-28 opacity-0"
                    itemProp="headline: The MICE Connection"
                >
                    <span className="block">Revolutionizing Events,</span>
                    <span className="block">Elevating Experiences</span>
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-md lg:max-w-xl opacity-0"
                    itemProp="description: The MICE Connection"
                >
                    Crafting world-class Meetings, Incentives, Conferences, and Exhibitions
                    with Nepalese warmth and global precision.
                </p>
            </div>

            {/* Lazy-loaded Video with performance optimizations */}
            <div ref={videoRef} className="video-wrapper opacity-0">
                <LazyVideo
                    src="/src/assets/home/hero.mp4"
                    poster="/src/assets/home/hero-poster.jpg" // Add a poster image
                    className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-xl md:rounded-3xl"
                    aria-label="Hero video showcasing event management services"
                    title="Professional Event Management Services: The MICE Connection"
                />
            </div>

            {/* SEO: Additional structured data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "The MICE Connection Pvt. Ltd.",
                    "url": "https://www.themiceconnection.com",
                    "logo": "https://www.themiceconnection.com/logo.png",
                    "description": "The MICE Connection Pvt. Ltd. is a premium event management and tourism company based in Nepal, specializing in Meetings, Incentives, Conferences, and Exhibitions (MICE). With over a decade of experience, we craft world-class event experiences that blend Nepalese warmth with global precision.",
                    "serviceType": "MICE Event Management and Tourism Services",
                    "knowsAbout": [
                        "Event Planning",
                        "Conference Management",
                        "Incentive Travel Programs",
                        "Exhibition & Trade Show Management",
                        "Corporate Retreats",
                        "Destination Management",
                        "Tourism Promotion",
                        "Cross-Cultural Exchange"
                    ]
                })}
            </script>
        </section>
    );
};

export default Hero;