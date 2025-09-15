import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ActivitiesSection: React.FC = () => {
    const activitiesRef = useRef<HTMLDivElement>(null);
    const [hoveredActivity, setHoveredActivity] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (activitiesRef.current) {
            gsap.fromTo(activitiesRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: activitiesRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const activities = [
        { 
            icon: "🏔️", 
            name: "Trekking", 
            description: "Himalayan trails", 
            gradient: "from-[#143a31] to-[#0f2821]",
            image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        { 
            icon: "🪂", 
            name: "Paragliding", 
            description: "Soar above Pokhara", 
            gradient: "from-blue-500 to-blue-600",
            image: "/assets/advanture/paragliding.webp"
        },
        { 
            icon: "🚣", 
            name: "Rafting", 
            description: "Thrilling river adventures", 
            gradient: "from-cyan-500 to-cyan-600",
            image: "/assets/advanture/rafting.webp"
        },
        { 
            icon: "🪢", 
            name: "Bungee Jumping", 
            description: "160m jump", 
            gradient: "from-red-500 to-red-600",
            image: "/assets/advanture/bungee-jumping.webp"
        },
        { 
            icon: "🧗", 
            name: "Rock Climbing", 
            description: "Scale new heights", 
            gradient: "from-gray-600 to-gray-700",
            image: "/assets/advanture/rock-climbing.webp"
        },
        { 
            icon: "🚵", 
            name: "Mountain Biking", 
            description: "Off-road trails", 
            gradient: "from-green-500 to-green-600",
            image: "/assets/advanture/mountain-biking.webp"
        },
        { 
            icon: "🐘", 
            name: "Jungle Safari", 
            description: "Wildlife encounters", 
            gradient: "from-yellow-600 to-yellow-700",
            image: "/assets/advanture/jungle-safari.webp"
        },
        { 
            icon: "🚁", 
            name: "Helicopter Tours", 
            description: "Aerial mountain views", 
            gradient: "from-purple-500 to-purple-600",
            image: "/assets/advanture/helicopter-tours.webp"
        },
        { 
            icon: "🎈", 
            name: "Hot Air Ballooning", 
            description: "Serene sky views", 
            gradient: "from-pink-500 to-pink-600",
            image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        { 
            icon: "🦅", 
            name: "Zip Lining", 
            description: "World's steepest zip line", 
            gradient: "from-indigo-500 to-indigo-600",
            image: "/assets/advanture/zip-line.webp"
        },
        { 
            icon: "🌄", 
            name: "Canyoning", 
            description: "Waterfall descents", 
            gradient: "from-teal-500 to-teal-600",
            image: "/assets/advanture/canyoning.webp"
        },
        { 
            icon: "🙏", 
            name: "Yoga Retreats", 
            description: "Spiritual rejuvenation", 
            gradient: "from-orange-500 to-orange-600",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        { 
            icon: "🍯", 
            name: "Honey Hunting", 
            description: "Traditional cliff harvesting", 
            gradient: "from-amber-500 to-amber-600",
            image: "/assets/advanture/honey-hunting.webp"
        },
        { 
            icon: "🏛️", 
            name: "Cultural Tours", 
            description: "UNESCO heritage sites", 
            gradient: "from-rose-500 to-rose-600",
            image: "/assets/advanture/cultural-tour.webp"
        },
        { 
            icon: "🎪", 
            name: "Festival Experiences", 
            description: "Cultural celebrations", 
            gradient: "from-violet-500 to-violet-600",
            image: "/assets/advanture/festival.webp"
        }
    ];

    return (
        <section ref={activitiesRef} className="relative py-24 px-6 bg-white overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcd00e]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#143a31]/10 rounded-full blur-3xl"></div>
            
            {/* Hover Image Display */}
            {hoveredActivity !== null && (
                <div 
                    className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-300"
                    style={{
                        opacity: hoveredActivity !== null ? 1 : 0,
                    }}
                >
                    <div 
                        className="absolute w-80 h-56 lg:h-80 lg:w-120 rounded-2xl overflow-hidden shadow-2xl transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: mousePosition.x,
                            top: mousePosition.y,
                        }}
                    >
                        <img 
                            src={activities[hoveredActivity].image} 
                            alt={activities[hoveredActivity].name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold">{activities[hoveredActivity].name}</h3>
                            <p className="text-sm">{activities[hoveredActivity].description}</p>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#143a31]/10 rounded-full px-4 py-2 mb-6">
                        <span className="text-[#143a31] font-medium text-sm">NEPAL ADVENTURES</span>
                    </div>
                    <h2 className="text-5xl font-bold text-[#143a31] mb-6">Authentic Nepal Experiences</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the incredible range of activities that make Nepal a premier adventure destination, from Himalayan treks to cultural immersions
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {activities.map((activity, index) => (
                        <div 
                            key={index} 
                            className="group relative"
                            onMouseEnter={() => setHoveredActivity(index)}
                            onMouseLeave={() => setHoveredActivity(null)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${activity.gradient})` }}></div>
                            <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-55 h-46">
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{activity.icon}</div>
                                <h3 className="text-lg font-bold text-[#143a31] mb-2 text-center">{activity.name}</h3>
                                <p className="text-sm text-gray-600 text-center">{activity.description}</p>
                                <div className="mt-4 w-full h-1 bg-gradient-to-r rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${activity.gradient})` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Additional Information */}
                <div className="mt-20 bg-gradient-to-r from-[#143a31] to-[#0f2821] rounded-3xl p-8 md:p-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">Why Nepal for Adventure?</h3>
                            <p className="text-lg mb-6">
                                Nepal offers some of the world's most diverse adventure opportunities, from the highest mountains to lush jungles. 
                                The country's unique geography provides the perfect playground for adrenaline seekers and cultural explorers alike.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-[#fcd00e] rounded-full mr-3"></span>
                                    <span>Home to 8 of the world's 14 highest peaks including Everest</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-[#fcd00e] rounded-full mr-3"></span>
                                    <span>Diverse landscapes from Himalayas to tropical jungles</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-[#fcd00e] rounded-full mr-3"></span>
                                    <span>Rich cultural heritage with 7 UNESCO World Heritage Sites</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-[#fcd00e] rounded-full mr-3"></span>
                                    <span>Experienced guides and tour operators with deep local knowledge</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-[#fcd00e]">100+</div>
                                <div className="text-sm">Trekking Routes</div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-[#fcd00e]">12</div>
                                <div className="text-sm">National Parks</div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-[#fcd00e]">6000+</div>
                                <div className="text-sm">Rivers & Streams</div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-[#fcd00e]">125</div>
                                <div className="text-sm">Ethnic Groups</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;