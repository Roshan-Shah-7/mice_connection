import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import flag from '/flag.png'

gsap.registerPlugin(ScrollTrigger);

const StatsSection: React.FC = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (statsRef.current) {
            gsap.fromTo(statsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: 'top 80%',
                        onEnter: () => setIsVisible(true),
                        onEnterBack: () => setIsVisible(true),
                    }
                }
            );
        }
    }, []);

    // Categorized statistics for Nepal
    const statsCategories = [
        { id: 'all', label: 'All Statistics', icon: '📊' },
        { id: 'geography', label: 'Geography', icon: '🗺️' },
        { id: 'culture', label: 'Culture', icon: '🎎' },
        { id: 'tourism', label: 'Tourism', icon: '✈️' },
        { id: 'biodiversity', label: 'Biodiversity', icon: '🌿' },
    ];

    const statsData = [
        // Geography
        { category: 'geography', id: 1, initial: 0, target: 147516, label: "Total Area (km²)", icon: "🗺️", suffix: "", duration: 2 },
        { category: 'geography', id: 2, initial: 0, target: 8848, label: "Highest Point (Mt. Everest)", icon: "🏔️", suffix: "m", duration: 2 },
        { category: 'geography', id: 3, initial: 0, target: 70, label: "Lowest Point (Kechana Kalan)", icon: "📉", suffix: "m", duration: 2 },
        { category: 'geography', id: 4, initial: 0, target: 6000, label: "Rivers & Streams", icon: "🌊", suffix: "+", duration: 2.5 },
        { category: 'geography', id: 5, initial: 0, target: 5358, label: "Lakes", icon: "🏞️", suffix: "", duration: 2.5 },

        // Culture
        { category: 'culture', id: 6, initial: 0, target: 123, label: "Languages Spoken", icon: "🗣️", suffix: "+", duration: 2 },
        { category: 'culture', id: 7, initial: 0, target: 125, label: "Ethnic Groups", icon: "👨‍👩‍👧‍👦", suffix: "+", duration: 2 },
        { category: 'culture', id: 8, initial: 0, target: 10, label: "UNESCO Heritage Sites", icon: "🏛️", suffix: "", duration: 2 },
        { category: 'culture', id: 9, initial: 0, target: 1, label: "The only non-rectangular flag in the world", icon: <img src={flag} alt="Nepal Flag" className="h-8 w-8 object-contain" />, suffix: "", duration: 2 },
        { category: 'culture', id: 10, initial: 0, target: 81, label: "Percent Hindu Population", icon: "🕉️", suffix: "%", duration: 2 },

        // Tourism
        { category: 'tourism', id: 11, initial: 0, target: 1.1, label: "Annual Tourists (Millions)", icon: "✈️", suffix: "M+", duration: 2 },
        { category: 'tourism', id: 12, initial: 0, target: 13.1, label: "Tourism Growth Rate", icon: "📈", suffix: "%", duration: 2 },
        { category: 'tourism', id: 13, initial: 0, target: 12, label: "National Parks", icon: "🌳", suffix: "", duration: 2 },
        { category: 'tourism', id: 14, initial: 0, target: 6, label: "Conservation Areas", icon: "🦌", suffix: "", duration: 2 },
        { category: 'tourism', id: 15, initial: 0, target: 1310, label: "Mountain Peaks", icon: "⛰️", suffix: "", duration: 2.5 },

        // Biodiversity
        { category: 'biodiversity', id: 16, initial: 0, target: 870, label: "Bird Species", icon: "🦜", suffix: "", duration: 2 },
        { category: 'biodiversity', id: 17, initial: 0, target: 185, label: "Mammal Species", icon: "🐅", suffix: "", duration: 2 },
        { category: 'biodiversity', id: 18, initial: 0, target: 6500, label: "Flowering Plants", icon: "🌸", suffix: "+", duration: 2.5 },
        { category: 'biodiversity', id: 19, initial: 0, target: 30, label: "Protected Wildlife Species", icon: "🛡️", suffix: "+", duration: 2 },
        { category: 'biodiversity', id: 20, initial: 0, target: 4, label: "Climate Zones", icon: "🌤️", suffix: "", duration: 2 },
    ];

    const filteredStats = activeCategory === 'all'
        ? statsData
        : statsData.filter(stat => stat.category === activeCategory);

    return (
        <section ref={statsRef} className="relative py-24 px-6 overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/nepal/calltoaction.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>

            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 80 + 20 + 'px',
                            height: Math.random() * 80 + 20 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            opacity: Math.random() * 0.1 + 0.05,
                            background: `radial-gradient(circle, rgba(252,208,14,0.3) 0%, transparent 70%)`,
                            animation: `pulse ${Math.random() * 5 + 3}s infinite alternate`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-[#fcd00e] rounded-full animate-pulse"></div>
                        <span className="text-[#fcd00e] font-medium text-sm">NEPAL IN NUMBERS</span>
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-6">Discover Nepal's Diversity</h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        From the world's highest peaks to rich cultural heritage, Nepal offers incredible diversity in a compact geographical area
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {statsCategories.map((category) => (
                        <button
                            key={category.id}
                            className={`flex items-center space-x-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-[#fcd00e] text-[#143a31] shadow-lg'
                                    : 'bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm'
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="text-xl">{category.icon}</span>
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {filteredStats.map((stat) => (
                        <StatCard
                            key={stat.id}
                            stat={stat}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                {/* Additional information */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-2xl font-bold text-[#fcd00e] mb-4">Unique Facts</h3>
                        <ul className="space-y-3 text-white/90">
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>Kumari, a living goddess, is worshipped in Nepal</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>Nepali youth continue to be recruited into international armed forces for their exceptional courage and dedication.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>To this day, members of the British royal family are protected by highly trained Nepali soldiers.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>Yeti legends originate from the Himalayan region of Nepal</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>Nepal was never colonized by any foreign power</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>We respectfully celebrate festivals and occasions from all religions.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-2xl font-bold text-[#fcd00e] mb-4">Tourist Essentials</h3>
                        <ul className="space-y-3 text-white/90">
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>Best time to visit: October-November and February-April</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>Visa available on arrival for most nationalities</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>Official currency: Nepalese Rupee (NPR)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#fcd00e] mr-2">•</span>
                                <span>Time zone: Nepal Standard Time (UTC+5:45)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Custom animation styles */}
            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.1; }
                    100% { transform: scale(1.2); opacity: 0.2; }
                }
                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(252, 208, 14, 0.2);
                }
            `}</style>
        </section>
    );
};

// StatCard component with counting animation
const StatCard: React.FC<{ stat: any, isVisible: boolean }> = ({ stat, isVisible }) => {
    const numberRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (isVisible && !animated && numberRef.current) {
            setAnimated(true);

            // Animate the card entrance
            gsap.fromTo(cardRef.current,
                { opacity: 0, y: 30, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
            );

            // Animate the number counting
            gsap.to(numberRef.current, {
                innerText: stat.target,
                duration: stat.duration,
                snap: { innerText: 1 },
                stagger: 1,
                ease: "power2.out",
                onUpdate: function () {
                    if (numberRef.current) {
                        const value = Math.floor(Number(numberRef.current.innerText));
                        numberRef.current.innerText = value.toLocaleString();
                    }
                }
            });
        }
    }, [isVisible, stat.target, stat.duration, animated]);

    return (
        <div
            ref={cardRef}
            className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/20 hover:border-[#fcd00e]/50 transition-all duration-500 cursor-pointer stat-card"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#fcd00e]/10 to-[#143a31]/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="flex justify-center items-center text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                    {typeof stat.icon === 'string' ? (
                        <span>{stat.icon}</span>
                    ) : (
                        stat.icon
                    )}
                </div>
                <div
                    ref={numberRef}
                    className="text-3xl font-bold text-[#fcd00e] mb-2"
                >
                    {stat.initial}
                </div>
                <div className="text-white/90 text-sm font-medium leading-tight mb-1">{stat.label}</div>
                {stat.suffix && <span className="text-[#fcd00e] text-lg font-bold">{stat.suffix}</span>}
            </div>
        </div>
    );
};

export default StatsSection;