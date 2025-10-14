import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UniqueToNepalSection: React.FC = () => {
    const uniqueRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (uniqueRef.current) {
            gsap.fromTo(uniqueRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: uniqueRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={uniqueRef} className="relative py-24 px-6 bg-gradient-to-br from-[#143a31] to-[#0f2821] overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-50 left-40 w-64 h-64 border-4 border-[#fcd00e] rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-[#fcd00e] rounded-full"></div>
            </div>
            
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#fcd00e]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <span className="text-[#fcd00e] font-medium text-sm">EXCLUSIVELY NEPALESE</span>
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-6">Only in Nepal</h2>
                    <p className="text-xl text-white/80 max-w-4xl mx-auto">
                        Discover unique products, experiences, and natural wonders found nowhere else in the world
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Unique Products */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#fcd00e]/50 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#fcd00e]/20 flex items-center justify-center mr-4">
                                <span className="text-xl text-[#fcd00e]">🛍️</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Exclusive Products</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { title: "Pashmina Shawls", description: "The world's finest cashmere wool from Himalayan goats" },
                                { title: "Thangka Paintings", description: "Intricate Buddhist religious art on cotton or silk" },
                                { title: "Khukuri Knives", description: "Traditional curved Nepalese knife with historical significance" },
                                { title: "Himalayan Singing Bowls", description: "Handcrafted metal bowls used for meditation and healing" },
                                { title: "Nepali Tea", description: "High altitude teas with unique flavors from the Himalayas" },
                                { title: "Lokta Paper", description: "Traditional handmade paper from the bark of the Daphne plant" },
                                { title: "Mad Honey", description: "Hallucinogenic honey harvested from cliffs by Gurung communities" },
                                { title: "Yarsagumba", description: "Rare caterpillar fungus valued in traditional medicine" },
                                { title: "Dhaka Topi", description: "Traditional patterned hat worn by Nepali men" }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-[#fcd00e] rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#fcd00e] transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-white/70">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Unique Experiences */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#fcd00e]/50 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#fcd00e]/20 flex items-center justify-center mr-4">
                                <span className="text-xl text-[#fcd00e]">✨</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Unique Experiences</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { title: "Everest Base Camp Trek", description: "Trek to the base of the world's highest mountain" },
                                { title: "Living Goddess Kumari", description: "Meet the living child goddess worshipped by Hindus and Buddhists" },
                                { title: "Honey Hunting", description: "Witness traditional cliff honey harvesting practices" },
                                { title: "Tibetan Refugee Culture", description: "Experience Tibetan culture preserved in exile communities" },
                                { title: "Festival Participation", description: "Join unique celebrations like Indra Jatra or Ghode Jatra" },
                                { title: "Newari Cuisine Experience", description: "Taste the distinctive flavors of the Newar community" },
                                { title: "Meditation Retreats", description: "Practice meditation in ancient monasteries and retreat centers" },
                                { title: "Village Homestays", description: "Live with local families in remote Himalayan villages" },
                                { title: "Yeti Legends", description: "Explore the folklore and alleged evidence of the Himalayan Yeti" }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-[#fcd00e] rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#fcd00e] transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-white/70">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Unique Natural Phenomena */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#fcd00e]/50 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#fcd00e]/20 flex items-center justify-center mr-4">
                                <span className="text-xl text-[#fcd00e]">🌿</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Natural Wonders</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { title: "One-Horned Rhinoceros", description: "See the rare species in Chitwan National Park" },
                                { title: "Red Panda", description: "Spot the elusive red panda in its natural habitat" },
                                { title: "Himalayan Terraces", description: "Witness the stunning terraced farming landscapes" },
                                { title: "High-Altitude Lakes", description: "Visit pristine lakes at elevations over 4,000 meters" },
                                { title: "Rhododendron Forests", description: "Walk through forests of Nepal's national flower in bloom" },
                                { title: "Yak Grazing", description: "See yaks grazing in high-altitude pastures" },
                                { title: "Eight-Thousanders", description: "View 8 of the world's 14 highest peaks" },
                                { title: "Glacial Lakes", description: "See turquoise lakes formed by glacial meltwater" },
                                { title: "Endemic Species", description: "Discover plants and animals found only in Nepal" }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-[#fcd00e] rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#fcd00e] transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-white/70">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center bg-gradient-to-r from-[#fcd00e]/30 to-yellow-400/30 backdrop-blur-sm rounded-full px-6 py-3 border border-[#fcd00e]/30">
                        <span className="text-white font-medium">Take home a piece of Nepal's uniqueness - souvenirs and memories that can't be found anywhere else</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniqueToNepalSection;