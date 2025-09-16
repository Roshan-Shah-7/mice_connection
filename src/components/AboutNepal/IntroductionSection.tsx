import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContentData {
  title: string;
  description: string;
  image: string;
  statistic: string;
  statLabel: string;
  features: string[];
}

const IntroductionSection: React.FC = () => {
    const introRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const statRef = useRef<HTMLDivElement>(null);
    
    const [activeTab, setActiveTab] = useState(0);
    
    const contentData: ContentData[] = [
        {
            title: "The Majestic Himalayas",
            description: "Home to 8 of the world's 14 highest peaks, including Mount Everest (8,848m), the Himalayas dominate Nepal's northern region. This mountain range spans 800km across Nepal and features diverse ecosystems from subtropical foothills to permanent snow lines. The Himalayas are not just a geographical wonder but also hold deep spiritual significance in Nepalese culture and Hinduism.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            statistic: "8",
            statLabel: "of World's Highest Peaks",
            features: [
                "Mount Everest (8,848m) - Highest peak on Earth",
                "Kanchenjunga (8,586m) - World's third highest",
                "Annapurna Range - Trekking paradise",
                "Langtang Valley - Closest Himalayan region to Kathmandu"
            ]
        },
        {
            title: "Ancient Temples & Heritage",
            description: "Nepal boasts 10 UNESCO World Heritage Sites, with 7 in the Kathmandu Valley alone. The country is a living museum of ancient architecture, with pagoda-style temples, intricate wood carvings, and historic palaces. From the sacred Pashupatinath Temple to the Buddhist stupas of Swayambhunath and Boudhanath, Nepal's spiritual heritage spans over 2,000 years.",
            image: "/assets/nepal/kathmandu.webp",
            statistic: "10",
            statLabel: "UNESCO World Heritage Sites",
            features: [
                "Pashupatinath Temple - Sacred Hindu temple complex",
                "Swayambhunath Stupa - Ancient religious complex",
                "Bhaktapur Durbar Square - Medieval city architecture",
                "Lumbini - Birthplace of Lord Buddha"
            ]
        },
        {
            title: "Rich Biodiversity & Nature",
            description: "Despite covering only 0.1% of the earth's land area, Nepal contains over 4% of all mammal species, 8% of bird species, and 2% of flowering plants. With elevations ranging from 60m to 8,848m, Nepal's diverse ecosystems include tropical forests, temperate zones, and alpine regions. The country has established 12 national parks, 1 wildlife reserve, 6 conservation areas, and 13 buffer zones.",
            image: "/assets/nepal/chitwan.webp",
            statistic: "12",
            statLabel: "National Parks & Reserves",
            features: [
                "Chitwan National Park - UNESCO site with Bengal tigers",
                "Sagarmatha National Park - Includes Mount Everest",
                "Bardia National Park - Remote wilderness area",
                "Koshi Tappu Wildlife Reserve - Birdwatcher's paradise",
                "Shuklaphanta National Park - Grassland birds"
            ]
        }
    ];

    useEffect(() => {
        if (introRef.current) {
            gsap.fromTo(introRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: introRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
    }, []);

    // Animate content changes
    useEffect(() => {
        if (contentRef.current && imageRef.current && statRef.current) {
            // Fade out current content
            gsap.to([contentRef.current, imageRef.current, statRef.current], {
                opacity: 0,
                y: 20,
                duration: 0.4,
                onComplete: () => {
                    // After fade out, update content and fade in
                    gsap.to([contentRef.current, imageRef.current, statRef.current], {
                        opacity: 1,
                        y: 0,
                        duration: 0.6
                    });
                }
            });
        }
    }, [activeTab]);

    return (
        <section ref={introRef} className="relative py-24 px-6 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcd00e]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#143a31]/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#143a31]/10 rounded-full px-4 py-2 mb-6">
                        <span className="text-[#143a31] font-medium text-sm">WELCOME TO NEPAL</span>
                    </div>
                    <h2 className="text-5xl font-bold text-[#143a31] mb-6">A Land of Incredible Diversity</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From the world's highest mountains to ancient cultural heritage and rich biodiversity, Nepal offers unique experiences found nowhere else on Earth
                    </p>
                </div>
                
                {/* Interactive Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-100 rounded-xl p-2 shadow-md">
                        {['Himalayan Range', 'Ancient Temples', 'Rich Biodiversity'].map((tab, index) => (
                            <button
                                key={index}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    activeTab === index 
                                        ? 'bg-[#143a31] text-white shadow-md' 
                                        : 'text-gray-700 hover:text-[#143a31]'
                                }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#fcd00e]/20 rounded-full blur-xl"></div>
                        <div className="relative bg-white rounded-2xl shadow-2xl p-2 overflow-hidden">
                            <img
                                ref={imageRef}
                                src={contentData[activeTab].image}
                                alt={contentData[activeTab].title}
                                className="w-full h-96 object-cover rounded-xl"
                            />
                        </div>
                        <div 
                            ref={statRef}
                            className="absolute -bottom-6 -right-6 bg-[#143a31] text-white p-6 rounded-xl shadow-xl"
                        >
                            <div className="text-3xl font-bold mb-2">{contentData[activeTab].statistic}</div>
                            <div className="text-sm opacity-90 max-w-[120px]">{contentData[activeTab].statLabel}</div>
                        </div>
                    </div>
                    
                    <div ref={contentRef} className="space-y-8">
                        <div className="bg-gradient-to-r from-[#143a31]/5 to-white rounded-xl p-8 border-l-4 border-[#fcd00e]">
                            <h3 className="text-2xl font-bold text-[#143a31] mb-4">{contentData[activeTab].title}</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {contentData[activeTab].description}
                            </p>
                            
                            <div className="space-y-3">
                                <h4 className="font-semibold text-[#143a31]">Key Features:</h4>
                                <ul className="space-y-2">
                                    {contentData[activeTab].features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-[#fcd00e] mr-2">•</span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                            <div 
                                className={`flex items-center space-x-2 rounded-full px-4 py-2 shadow-md border cursor-pointer transition-all duration-300 ${
                                    activeTab === 0 
                                        ? 'bg-[#143a31] text-white border-[#143a31]' 
                                        : 'bg-white border-gray-100 text-gray-700 hover:bg-[#143a31]/5'
                                }`}
                                onClick={() => setActiveTab(0)}
                            >
                                <span className="text-2xl">🏔️</span>
                                <span className="text-sm font-medium">Himalayan Range</span>
                            </div>
                            <div 
                                className={`flex items-center space-x-2 rounded-full px-4 py-2 shadow-md border cursor-pointer transition-all duration-300 ${
                                    activeTab === 1 
                                        ? 'bg-[#143a31] text-white border-[#143a31]' 
                                        : 'bg-white border-gray-100 text-gray-700 hover:bg-[#143a31]/5'
                                }`}
                                onClick={() => setActiveTab(1)}
                            >
                                <span className="text-2xl">🏛️</span>
                                <span className="text-sm font-medium">Ancient Temples</span>
                            </div>
                            <div 
                                className={`flex items-center space-x-2 rounded-full px-4 py-2 shadow-md border cursor-pointer transition-all duration-300 ${
                                    activeTab === 2 
                                        ? 'bg-[#143a31] text-white border-[#143a31]' 
                                        : 'bg-white border-gray-100 text-gray-700 hover:bg-[#143a31]/5'
                                }`}
                                onClick={() => setActiveTab(2)}
                            >
                                <span className="text-2xl">🌿</span>
                                <span className="text-sm font-medium">Rich Biodiversity</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Additional Facts */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-gradient-to-b from-[#fcd00e]/10 to-white rounded-2xl shadow-md">
                        <div className="text-4xl font-bold text-[#143a31] mb-2">8,848m</div>
                        <div className="text-gray-700">Height of Mount Everest</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-b from-[#143a31]/10 to-white rounded-2xl shadow-md">
                        <div className="text-4xl font-bold text-[#143a31] mb-2">30+</div>
                                               <div className="text-gray-700">Protected Wildlife Species</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-b from-[#fcd00e]/10 to-white rounded-2xl shadow-md">
                        <div className="text-4xl font-bold text-[#143a31] mb-2">2,000+</div>
                        <div className="text-gray-700">Years of Documented History</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;