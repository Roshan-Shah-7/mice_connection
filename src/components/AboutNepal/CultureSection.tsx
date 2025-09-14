import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaUtensils, FaPray, 
  FaDharmachakra, FaBook, FaUsers, FaLanguage, 
  FaCalendarAlt, FaPalette, FaDrum, FaSeedling,
  FaLandmark, FaGlobeAsia,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const CultureSection: React.FC = () => {
    const cultureRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (cultureRef.current) {
            gsap.fromTo(cultureRef.current.children,
                { opacity: 0, rotationX: 90 },
                {
                    opacity: 1,
                    rotationX: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: cultureRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }

        // Add hover animations for cards
        cardsRef.current.forEach((card) => {
            if (card) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
                });
            }
        });
    }, []);

    // Add to cards ref array
    const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current[index] = el;
        }
    };

    return (
        <section ref={cultureRef} className="relative py-24 px-6 bg-gradient-to-br from-[#fcd00e]/5 to-white overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-32 h-32 bg-[#143a31]/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#fcd00e]/10 rounded-full blur-xl"></div>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23143a31' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#143a31]/10 rounded-full px-4 py-2 mb-6">
                        <FaGlobeAsia className="text-[#143a31]" />
                        <span className="text-[#143a31] font-medium text-sm">CULTURAL HERITAGE</span>
                    </div>
                    <h2 className="text-5xl font-bold text-[#143a31] mb-6">Nepal's Living Cultural Tapestry</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the rich mosaic of traditions, art, and spirituality that has been preserved for centuries in the heart of the Himalayas
                    </p>
                </div>

                {/* Cultural Aspects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            title: "Religious Harmony",
                            description: "Hinduism and Buddhism coexist peacefully, with shared sacred spaces and festivals",
                            icon: <FaPray className="text-3xl" />,
                            color: "from-[#143a31] to-[#0f2821]",
                            details: "Nepal is the only officially Hindu nation that also embraces Buddhism with equal reverence."
                        },
                        {
                            title: "Ethnic Diversity",
                            description: "Over 125 ethnic groups with distinct languages, customs, and traditions",
                            icon: <FaUsers className="text-3xl" />,
                            color: "from-[#fcd00e] to-yellow-400",
                            details: "From Newars to Sherpas, each community maintains unique cultural practices."
                        },
                        {
                            title: "Architectural Marvels",
                            description: "Ancient temples, palaces, and stupas showcase exquisite craftsmanship",
                            icon: <FaLandmark className="text-3xl" />,
                            color: "from-[#143a31] to-[#0f2821]",
                            details: "Unique pagoda-style architecture with intricate wood carvings and metalwork."
                        },
                        {
                            title: "Living Heritage",
                            description: "Traditions passed down through generations remain vibrant today",
                            icon: <FaBook className="text-3xl" />,
                            color: "from-[#fcd00e] to-yellow-400",
                            details: "Ancient customs are actively maintained in modern daily life."
                        },
                        {
                            title: "Traditional Arts",
                            description: "Exquisite craftsmanship in Thanka paintings, metalwork, and wood carving",
                            icon: <FaPalette className="text-3xl" />,
                            color: "from-[#143a31] to-[#0f2821]",
                            details: "Skills passed down through generations of skilled artisans."
                        },
                        {
                            title: "Festive Celebrations",
                            description: "More festivals than days in the year, each with unique rituals and dances",
                            icon: <FaDrum className="text-3xl" />,
                            color: "from-[#fcd00e] to-yellow-400",
                            details: "Colorful celebrations like Dashain, Tihar, and numerous local festivals."
                        },
                        {
                            title: "Culinary Heritage",
                            description: "Diverse culinary traditions from Newari feasts to Himalayan cuisine",
                            icon: <FaUtensils className="text-3xl" />,
                            color: "from-[#143a31] to-[#0f2821]",
                            details: "Each ethnic community has developed distinct culinary traditions."
                        },
                        {
                            title: "Spiritual Practices",
                            description: "Ancient meditation techniques, yoga traditions, and pilgrimage routes",
                            icon: <FaDharmachakra className="text-3xl" />,
                            color: "from-[#fcd00e] to-yellow-400",
                            details: "Meditation caves, yoga schools, and pilgrimage routes dot the landscape."
                        }
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            ref={el => addToCardsRef(el, index)}
                            className="group relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r opacity-25 group-hover:opacity-75 transition duration-1000 blur rounded-2xl" style={{ background: `linear-gradient(to right, ${item.color})` }}></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                                    <div className="bg-gradient-to-br p-3 rounded-full" style={{ background: `linear-gradient(to right, ${item.color})` }}>
                                        <div className="text-[#143a31]">{item.icon}</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#143a31] mb-4 text-center">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{item.description}</p>
                                <div className="mt-auto">
                                    <div className="w-full h-1 bg-gradient-to-r rounded-full" style={{ background: `linear-gradient(to right, ${item.color})` }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cultural Statistics */}
                <div className="bg-gradient-to-r from-[#143a31] to-[#0f2821] rounded-3xl p-12 text-white mb-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <FaUsers className="absolute top-10 left-10 text-6xl" />
                        <FaLanguage className="absolute top-10 right-10 text-6xl" />
                        <FaCalendarAlt className="absolute bottom-10 left-10 text-6xl" />
                        <FaLandmark className="absolute bottom-10 right-10 text-6xl" />
                    </div>
                    <h3 className="text-3xl font-bold text-center mb-10 text-[#fcd00e] relative z-10">Nepal's Cultural Richness in Numbers</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#fcd00e] mb-2 flex justify-center items-center">
                                <FaUsers className="mr-2" /> 125+
                            </div>
                            <div className="text-sm opacity-90">Ethnic Communities</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#fcd00e] mb-2 flex justify-center items-center">
                                <FaLanguage className="mr-2" /> 123+
                            </div>
                            <div className="text-sm opacity-90">Languages Spoken</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#fcd00e] mb-2 flex justify-center items-center">
                                <FaCalendarAlt className="mr-2" /> 50+
                            </div>
                            <div className="text-sm opacity-90">Major Festivals Yearly</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#fcd00e] mb-2 flex justify-center items-center">
                                <FaLandmark className="mr-2" /> 10
                            </div>
                            <div className="text-sm opacity-90">UNESCO World Heritage Sites</div>
                        </div>
                    </div>
                </div>

                {/* Cultural Heritage Details */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#fcd00e]/10 rounded-full blur-2xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#143a31]/10 rounded-full blur-2xl"></div>
                    <h3 className="text-3xl font-bold text-[#143a31] mb-8 text-center relative z-10">Preserving Ancient Traditions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <h4 className="text-xl font-bold text-[#143a31] mb-4 flex items-center gap-2">
                                <FaBook className="text-[#fcd00e]" /> Cultural Significance
                            </h4>
                            <p className="text-gray-700 mb-6">
                                Nepal's cultural heritage represents one of the world's oldest continuous civilizations, with traditions dating back over 2,000 years. The Kathmandu Valley alone contains seven UNESCO World Heritage Sites within a radius of 20 kilometers, making it one of the most culturally dense regions on Earth.
                            </p>
                            <p className="text-gray-700">
                                What makes Nepal's culture unique is its living nature—ancient rituals, festivals, and artistic traditions are not museum exhibits but active parts of daily life. This seamless blend of the ancient and modern creates a cultural experience found nowhere else.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#143a31] mb-4 flex items-center gap-2">
                                <FaSeedling className="text-[#fcd00e]" /> Cultural Preservation
                            </h4>
                            <p className="text-gray-700 mb-6">
                                Despite modernization, Nepal has successfully preserved its cultural heritage through community efforts, government initiatives, and international recognition. Traditional skills are passed down through generations, and festivals continue to be celebrated with the same fervor as centuries ago.
                            </p>
                            <p className="text-gray-700">
                                The 2015 earthquake damaged many heritage sites, but extensive restoration efforts have not only repaired the physical structures but also revived associated cultural practices, demonstrating Nepal's commitment to preserving its unique identity.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CultureSection;