import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { tourPackages } from '../data/tourPackagesData';
import type { TourPackage } from '../types/tourTypes';
import TourCard from '../components/TourPackages/TourCard';

gsap.registerPlugin(ScrollTrigger);

// --- HERO COMPONENT ---
const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

            tl.from('.hero-content > *', { opacity: 0, y: 40, stagger: 0.1, duration: 0.8 })
                .from('.hero-main-image-container', { opacity: 0, scale: 0.8, rotation: -5 }, "-=0.6")
                .from('.hero-polaroid', {
                    opacity: 0,
                    y: (i) => (i === 0 ? 100 : -100),
                    rotation: (i) => (i === 0 ? 30 : -30),
                    stagger: 0.2,
                    duration: 1.5,
                    ease: 'elastic.out(1, 0.6)'
                }, "-=1")
                .from('.hero-deco', { opacity: 0, scale: 0, duration: 0.8 }, "-=1");

            gsap.to('.hero-bg-shape', {
                y: (i) => (i === 0 ? -150 : 100),
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });

        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-brand-light">
            <div className="absolute inset-0 z-0">
                <div className="hero-bg-shape absolute -top-20 -left-20 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="hero-bg-shape absolute -bottom-20 -right-20 w-96 h-96 bg-brand-dark/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>


            <div className="relative z-10 w-full container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="hero-content inline-flex items-center space-x-3 bg-white text-brand-dark rounded-full px-4 py-2 shadow-sm border border-neutral-200/80">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
                            </div>
                            <span className="font-semibold text-sm tracking-wide">The MICE Connection</span>
                        </div>

                        <h1 className="hero-content text-5xl md:text-6xl font-extrabold text-brand-dark leading-tight">
                            Your Gateway to
                            <span className="block bg-clip-text text-transparent bg-yellow-500 drop-shadow-sm mt-2">Nepal Wonders</span>
                        </h1>

                        <p className="hero-content text-lg text-neutral-600 leading-relaxed max-w-lg">
                            Embark on unforgettable journeys through majestic mountains, ancient temples, and vibrant cultures. Your adventure of a lifetime awaits.
                        </p>

                        <div className="hero-content grid grid-cols-3 gap-4 text-center border-t border-b border-neutral-200 py-6">
                            <div>
                                <div className="text-4xl font-extrabold text-brand-dark">85%</div>
                                <div className="text-sm text-neutral-600 mt-1 tracking-wide">Happy Travelers</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-brand-dark">24/7</div>
                                <div className="text-sm text-neutral-600 mt-1 tracking-wide">Support</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-brand-dark">10+</div>
                                <div className="text-sm text-neutral-600 mt-1 tracking-wide">Unique Packages</div>
                            </div>
                        </div>

                        <button onClick={() => document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#1c4038] text-white px-7 py-4 rounded-xl font-bold text-base hover:shadow-lg 
                            transition-all duration-300 transform hover:scale-105 border-2 border-neutral-200 cursor-pointer">
                            Browse All Tours
                        </button>
                    </div>
                    <div className="hidden lg:block relative h-[550px] w-full">
                        <div className="hero-main-image-container absolute top-0 left-0 w-[70%] h-[80%] rounded-3xl shadow-2xl overflow-hidden">
                            <img src={tourPackages[0].image} alt={tourPackages[0].title} className="w-full h-full object-cover" />
                        </div>

                        <div className="hero-polaroid absolute bottom-0 right-0 w-[45%] bg-white p-2.5 rounded-xl shadow-2xl transform rotate-6">
                            <img src={tourPackages[3].image} alt={tourPackages[3].title} className="w-full h-auto object-cover rounded-md" />
                            <p className="text-center text-xs text-neutral-600 mt-2 font-semibold tracking-wide">CHITWAN WILDLIFE</p>
                        </div>

                        <div className="hero-polaroid absolute top-[10%] right-[15%] w-[35%] bg-white p-2 rounded-lg shadow-xl transform -rotate-8">
                            <img src={tourPackages[2].image} alt={tourPackages[2].title} className="w-full h-auto object-cover rounded" />
                        </div>

                        <div className="hero-deco absolute bottom-[20%] left-[-5%] w-32 h-32 border-4 border-yellow-500/50 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- MAIN PAGE COMPONENT ---
const TourPackagesPage: React.FC = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All');
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('featured');
    const [tourTypeFilter, setTourTypeFilter] = useState('All');
    const [showFilter, setShowFilter] = useState(window.innerWidth >= 1024); // Initially visible on large screens, hidden on small
    const [showScrollFilterButton, setShowScrollFilterButton] = useState(false); // State for compact filter button on scroll
    const filterRef = useRef<HTMLDivElement>(null); // Ref for click outside detection
    const hasRestoredScroll = useRef(false); // Ref to track if we've restored scroll position

    const categories = useMemo(() => [
        { name: "All", icon: "🗺️" }, { name: "Women Centric", icon: "👯‍♀️" }, { name: "Cultural", icon: "🏛️" }, { name: "Educational", icon: "📚" }, { name: "Adventure", icon: "🪂" }, { name: "Wildlife", icon: "🦒" }, { name: "Spiritual", icon: "🙏" }, { name: "Family", icon: "👨‍👩‍👧‍👦" }
    ], []);

    const difficulties = useMemo(() => ["All", "Easy", "Moderate", "Challenging"], []);
    const tourTypes = useMemo(() => ["All", "FIT (Individual/Small Group)", "Group (Large/Private)"], []);

    const filteredAndSortedTours = useMemo(() => {
        let result: TourPackage[] = [...tourPackages];

        if (activeCategory !== 'All') {
            result = result.filter(tour => tour.category === activeCategory);
        }

        if (difficultyFilter !== 'All') {
            result = result.filter(tour => tour.difficulty === difficultyFilter);
        }

        if (tourTypeFilter !== 'All') {
            result = result.filter(tour => {
                const groupSize = tour.groupSize.toLowerCase();
                const isFIT = groupSize.includes('small') ||
                    groupSize.includes('flexible') ||
                    groupSize.includes('exclusive') ||
                    groupSize.includes('max');

                const isLargeGroup = groupSize.includes('group') ||
                    groupSize.includes('minimum') ||
                    groupSize.includes('participants');

                if (tourTypeFilter === 'FIT (Individual/Small Group)') {
                    return isFIT;
                }
                if (tourTypeFilter === 'Group (Large/Private)') {
                    return isLargeGroup;
                }
                return true;
            });
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(tour =>
                tour.title.toLowerCase().includes(query) ||
                tour.description.toLowerCase().includes(query) ||
                tour.category.toLowerCase().includes(query)
            );
        }

        switch (sortOption) {
            case 'duration':
                result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
                break;
        }

        return result;
    }, [activeCategory, difficultyFilter, searchQuery, sortOption, tourTypeFilter]);

    const handleClearFilters = () => {
        setActiveCategory('All');
        setDifficultyFilter('All');
        setTourTypeFilter('All');
        setSearchQuery('');
        setSortOption('featured');
    };

    useClickOutside(filterRef, () => setShowFilter(false));

    // Manage scroll position restoration
    useEffect(() => {
        // Restore scroll position when component mounts, but only once
        if (!hasRestoredScroll.current) {
            const savedScrollPosition = sessionStorage.getItem('tourPackagesScrollPosition');
            if (savedScrollPosition) {
                // Use setTimeout to ensure the DOM is rendered before scrolling
                setTimeout(() => {
                    window.scrollTo(0, parseInt(savedScrollPosition, 10));
                    hasRestoredScroll.current = true; // Mark that we've restored scroll position
                }, 0);
            } else {
                hasRestoredScroll.current = true; // If no saved position, still mark as restored
            }
        }
        
        // Save scroll position when navigating away
        const saveScrollPosition = () => {
            sessionStorage.setItem('tourPackagesScrollPosition', window.scrollY.toString());
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setShowFilter(true); // Always show filter on large screens
                setShowScrollFilterButton(false);
            } else {
                // On small screens, maintain current filter visibility state
                // Don't automatically hide the filter on resize to prevent layout shifts
            }
        };

        // Save scroll position before navigating away
        window.addEventListener('beforeunload', saveScrollPosition);
        window.addEventListener('popstate', saveScrollPosition); // When user uses back button
        window.addEventListener('resize', handleResize);

        // Initial check on mount
        handleResize();

        // Set up scroll listener to continuously save position while scrolling
        let scrollTimeout: NodeJS.Timeout;
        const handleScroll = () => {
            // Debounce scroll events to avoid excessive sessionStorage writes
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                sessionStorage.setItem('tourPackagesScrollPosition', window.scrollY.toString());
            }, 100);
            
            if (window.innerWidth < 1024) { // Only show compact filter button on small screens when scrolled
                if (window.scrollY > 200) {
                    setShowScrollFilterButton(true);
                } else {
                    setShowScrollFilterButton(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('beforeunload', saveScrollPosition);
            window.removeEventListener('popstate', saveScrollPosition);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <div className="min-h-screen bg-brand-light font-sans">
            <Hero />

            <section id="tours-section" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-brand-dark mb-3">Discover Your Next Adventure for FIT/Groups</h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Whether you're a solo traveler, a small group of friends, or a large private group, we have the perfect experience for you. Explore our curated list of tours across the beautiful landscapes of Nepal.</p>
                    </div>

                    {/* Compact Filter Button for small screens when scrolled */}
                    {showScrollFilterButton && (
                        <div className="fixed bottom-4 right-4 lg:hidden z-50">
                            <button
                                onClick={() => setShowFilter(true)} // Show main filter when compact button is clicked
                                className="bg-[#1c4038] text-white p-4 rounded-full shadow-lg flex items-center justify-center gap-2"
                                aria-label="Show Filters"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Filter Toggle Button for small screens (before scroll) */}
                    <div className="lg:hidden mb-6">
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="w-full bg-[#1c4038] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                        >
                            {showFilter ? 'Hide Filters' : 'Show Filters'}
                            <svg className={`w-4 h-4 transition-transform duration-300 ${showFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Control Panel */}
                    {/* The filter panel is hidden by default on small screens and shown only when showFilter is true */}
                    <div ref={filterRef} className={`bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-neutral-200 z-20 mb-12 transition-all duration-300 ease-in-out ${showFilter ? 'block opacity-100' : 'opacity-0 pointer-events-none absolute h-0 overflow-hidden lg:block lg:opacity-100 lg:pointer-events-auto lg:relative lg:h-auto lg:overflow-visible'} lg:block`}>
                        <div className="space-y-4">
                            {/* Row 1: Category & Difficulty */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="category-select" className="block text-sm font-bold text-brand-dark mb-2">Category</label>
                                    <select id="category-select" value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition">
                                        {categories.map((category) => (
                                            <option key={category.name} value={category.name}>{category.icon} {category.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="difficulty-select" className="block text-sm font-bold text-brand-dark mb-2">Difficulty</label>
                                    <select id="difficulty-select" value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition">
                                        {difficulties.map((level) => (
                                            <option key={level} value={level}>{level}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="tour-type-select" className="block text-sm font-bold text-brand-dark mb-2">Tour Type</label>
                                    <select id="tour-type-select" value={tourTypeFilter} onChange={(e) => setTourTypeFilter(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition">
                                        {tourTypes.map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Row 2: Search and Sort */}
                            <div className="flex flex-col md:flex-row items-center gap-4 pt-4 border-t border-neutral-200">
                                <input type="text" placeholder="Search by keyword..." className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                <select className="w-full md:w-auto px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                                    <option value="featured">Sort by: Featured</option>
                                    <option value="duration">Duration</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {filteredAndSortedTours.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredAndSortedTours.map((tour, index) => (
                                <TourCard key={tour.id} tour={tour} index={index} navigate={navigate} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200">
                            <div className="text-6xl mb-4" role="img" aria-label="Magnifying glass">🔍</div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-2">No Tours Found</h3>
                            <p className="text-neutral-600 mb-6">We couldn't find any tours matching your criteria. Try adjusting the filters!</p>
                            <button onClick={handleClearFilters} className="bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300">
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TourPackagesPage;