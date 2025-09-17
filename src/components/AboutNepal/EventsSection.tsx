
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Festival {
  name: string;
  description: string;
  timing: string;
  image: string;
  color: string;
  hoverElement: string;
  details: {
    significance: string;
    traditions: string[];
    duration: string;
    bestPlaces: string[];
  };
}

const EventsSection: React.FC = () => {
  const eventsRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [hoveredFestival, setHoveredFestival] = useState<number | null>(null);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (eventsRef.current) {
      gsap.fromTo(eventsRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: eventsRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const festivals: Festival[] = [
    {
      name: "Dashain",
      description: "Nepal's longest and most significant Hindu festival, celebrating the victory of goddess Durga over the demon Mahishasura. Families reunite, receive blessings from elders, and fly kites across the country.",
      timing: "September-October",
      image: "/assets/festivals/dashain.webp",
      color: "#dc2626",
      hoverElement: "🪁",
      details: {
        significance: "Celebrates the victory of good over evil. It's the longest and most auspicious festival in the Nepalese annual calendar.",
        traditions: [
          "Receiving tika (rice mixture) and blessings from elders",
          "Flying kites from rooftops",
          "Playing card games with family",
          "Swinging on bamboo swings (ping)",
          "Animal sacrifices for goddess Durga"
        ],
        duration: "15 days",
        bestPlaces: ["Kathmandu Valley", "Pokhara", "All major cities and villages"]
      }
    },
    {
      name: "Tihar",
      description: "Known as the Festival of Lights, this five-day celebration honors different animals and the bond between brothers and sisters. Homes are decorated with oil lamps, colorful rangolis, and marigold flowers.",
      timing: "October-November",
      image: "/assets/festivals/tihar.webp",
      color: "#fcd00e",
      hoverElement: "🪔",
      details: {
        significance: "A five-day festival that celebrates the relationship between humans and animals, particularly the bond between brothers and sisters.",
        traditions: [
          "Lighting oil lamps (diyos) around homes",
          "Decorating with rangoli (colorful patterns)",
          "Worshipping crows, dogs, and cows on different days",
          "Sisters applying tika to brothers for long life",
          "Singing Deusi-Bhailo songs door-to-door"
        ],
        duration: "5 days",
        bestPlaces: ["Kathmandu", "Pokhara", "Throughout Nepal"]
      }
    },
    {
      name: "Holi",
      description: "The vibrant Festival of Colors marks the arrival of spring and the victory of good over evil. People play with colored powders, water balloons, and celebrate with music, dance, and traditional sweets.",
      timing: "March",
      image: "/assets/festivals/holi.webp",
      color: "#ff6b6b",
      hoverElement: "🎨",
      details: {
        significance: "Celebrates the arrival of spring and the victory of good over evil. Known as the festival of colors and love.",
        traditions: [
          "Throwing colored powders and water at each other",
          "Singing and dancing in groups",
          "Sharing sweets and traditional foods",
          "Bonfires on the eve of Holi (Holika Dahan)",
          "Consuming bhang (cannabis-based drink) in some regions"
        ],
        duration: "2 days",
        bestPlaces: ["Kathmandu", "Pokhara", "Terai region"]
      }
    },
    {
      name: "Bisket Jatra",
      description: "The Nepali New Year celebration in Bhaktapur features a massive chariot procession of the god Bhairava. This unique festival includes tug-of-war between communities and traditional cultural performances.",
      timing: "April",
      image: "/assets/festivals/bisketJatra.webp",
      color: "#2563eb",
      hoverElement: "🎭",
      details: {
        significance: "Celebrates the Nepalese New Year with ancient rituals that predate the introduction of Hinduism to the valley.",
        traditions: [
          "Pulling massive chariots through the streets",
          "Tug-of-war between different communities",
          "Erecting a ceremonial linga (pole)",
          "Traditional mask dances and performances",
          "Blessings from the living goddess Kumari"
        ],
        duration: "9 days",
        bestPlaces: ["Bhaktapur", "Thimi", "Bode"]
      }
    },
    {
      name: "Teej",
      description: "A women's festival where married women fast for their husbands' longevity and unmarried women for a good husband. Women dress in red saris, sing, dance, and visit temples.",
      timing: "August-September",
      image: "/assets/festivals/teej.webp",
      color: "#e11d48",
      hoverElement: "💃",
      details: {
        significance: "A festival dedicated to Goddess Parvati, celebrating marital bliss, well-being of spouse and children, and purification of own body and soul.",
        traditions: [
          "Women fasting without water for 24 hours",
          "Dancing and singing traditional Teej songs",
          "Wearing red saris and gold jewelry",
          "Swings decorated with flowers",
          "Evening gatherings and feasts"
        ],
        duration: "3 days",
        bestPlaces: ["Pashupatinath Temple", "Kathmandu", "Pokhara"]
      }
    },
    {
      name: "Indra Jatra",
      description: "An eight-day festival honoring Lord Indra, the god of rain. The festival features masked dances, religious ceremonies, and the display of the living goddess Kumari.",
      timing: "September",
      image: "/assets/festivals/indra-jatra.webp",
      color: "#4f46e5",
      hoverElement: "👑",
      details: {
        significance: "Honors Lord Indra, the god of rain and king of heaven. Also commemorates the day when the living goddess Kumari was installed.",
        traditions: [
          "Display of the living goddess Kumari in a chariot procession",
          "Masked dances of deities and demons",
          "Erection of a ceremonial pole (lingo)",
          "Lighting of oil lamps in temples and streets",
          "Worship of Lord Indra and his mother Dagini"
        ],
        duration: "8 days",
        bestPlaces: ["Kathmandu Durbar Square", "Basantapur"]
      }
    },
    {
      name: "Mani Rimdu",
      description: "A Tibetan Buddhist festival celebrated in the Everest region with masked dances, prayers, and ceremonies to bless the local community and ward off evil spirits.",
      timing: "October-November",
      image: "/assets/festivals/maniRimdu.webp",
      color: "#0891b2",
      hoverElement: "🙏",
      details: {
        significance: "A celebration of Buddhism's victory over the ancient Bon religion and a ceremony to bless the community and ward off evil spirits.",
        traditions: [
          "Masked dances representing protective deities",
          "Prayer ceremonies and chanting of mantras",
          "Construction and destruction of a sand mandala",
          "Blessings with sacred substances",
          "Fire ceremony to destroy negative forces"
        ],
        duration: "5 days",
        bestPlaces: ["Tengboche Monastery", "Solukhumbu Region"]
      }
    },
    {
      name: "Lhosar",
      description: "Tibetan New Year celebrated by Sherpa, Tamang, and Gurung communities with family gatherings, traditional dances, special foods, and prayers for prosperity.",
      timing: "February",
      image: "/assets/festivals/loshar.webp",
      color: "#ca8a04",
      hoverElement: "🎉",
      details: {
        significance: "Celebrates the Tibetan New Year and marks the time for family reunions, feasts, and looking forward to prosperity in the coming year.",
        traditions: [
          "Cleaning and decorating homes",
          "Preparing special foods like Guthuk",
          "Performing traditional dances and music",
          "Visiting monasteries for prayers",
          "Exchanging gifts and greetings"
        ],
        duration: "15 days",
        bestPlaces: ["Boudhanath", "Swayambhunath", "Kathmandu Valley"]
      }
    }
  ];

  const openModal = (festival: Festival) => {
    setSelectedFestival(festival);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFestival(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section ref={eventsRef} className="relative py-24 px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#153931]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fcd00e]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#153931] backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-white font-medium text-sm">FESTIVALS & EVENTS</span>
          </div>
          <h2 className="text-5xl font-bold text-[#153931] mb-6">Nepal's Vibrant Celebrations</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Immerse yourself in Nepal's colorful festivals that celebrate its rich cultural heritage and traditions throughout the year
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#153931] to-[#fcd00e]"></div>
          
          <div className="space-y-16">
            {festivals.map((festival, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div 
                  className="w-1/2 px-8 cursor-pointer relative"
                  onClick={() => openModal(festival)}
                  onMouseEnter={() => setHoveredFestival(index)}
                  onMouseLeave={() => setHoveredFestival(null)}
                >
                  <div className="group relative hover:scale-105 transition-transform duration-500">
                    <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-1000 blur rounded-xl" style={{ backgroundColor: festival.color }}></div>
                    
                    {/* Hover element */}
                    {hoveredFestival === index && (
                      <div className="absolute -top-8 -right-8 w-16 h-16 flex items-center justify-center text-3xl bg-white rounded-full shadow-lg z-10 animate-bounce">
                        {festival.hoverElement}
                      </div>
                    )}
                    
                    <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: festival.color }}></div>
                        <h3 className="text-2xl font-bold text-[#153931]">{festival.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{festival.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600 flex items-center">
                          <span className="mr-2">📅</span>
                          {festival.timing}
                        </div>
                        <button 
                          className="text-sm text-[#153931] hover:text-[#fcd00e] transition-colors duration-300 font-medium"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(festival);
                          }}
                        >
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="w-1/2 flex justify-center relative"
                  onMouseEnter={() => setHoveredFestival(index)}
                  onMouseLeave={() => setHoveredFestival(null)}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" style={{ backgroundColor: festival.color }}></div>
                    <img
                      src={festival.image}
                      alt={festival.name}
                      className="relative w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-150 group-hover:z-20 transition-all duration-300"
                    />
                    
                    {/* Timeline point */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white" style={{ backgroundColor: festival.color }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-20 bg-gradient-to-r from-[#153931] to-[#0f2821] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Experience Nepal's Festivals</h3>
              <p className="text-lg mb-6">
                Nepal's festivals are a vibrant expression of its cultural diversity and religious harmony. 
                With more festivals than days in the year, there's always something to celebrate in this Himalayan nation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#fcd00e] rounded-full mr-3"></span>
                  <span>Festivals follow both lunar and solar calendars</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#fcd00e] rounded-full mr-3"></span>
                  <span>Each ethnic community has its own unique celebrations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#fcd00e] rounded-full mr-3"></span>
                  <span>Many festivals are UNESCO-recognized cultural heritage</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#fcd00e] rounded-full mr-3"></span>
                  <span>Visitors are often welcomed to participate in celebrations</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#fcd00e]">50+</div>
                <div className="text-sm">Major Festivals Yearly</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#fcd00e]">125</div>
                <div className="text-sm">Ethnic Communities</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#fcd00e]">2</div>
                <div className="text-sm">Main Religions</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#fcd00e]">365</div>
                <div className="text-sm">Days of Celebration</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Festival Detail Modal */}
      {isModalOpen && selectedFestival && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:text-[#153931] transition-colors"
              >
                &times;
              </button>
              <div 
                className="h-48 w-full bg-cover bg-center rounded-t-2xl"
                style={{ backgroundImage: `url(${selectedFestival.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-2xl"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-3xl font-bold">{selectedFestival.name}</h3>
                  <p className="text-sm">{selectedFestival.timing}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-[#153931] mb-2">Significance</h4>
                <p className="text-gray-700">{selectedFestival.details.significance}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-[#153931] mb-2">Traditions</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {selectedFestival.details.traditions.map((tradition, index) => (
                    <li key={index}>{tradition}</li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-[#153931] mb-2">Duration</h4>
                  <p className="text-gray-700">{selectedFestival.details.duration}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#153931] mb-2">Best Places to Experience</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedFestival.details.bestPlaces.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-xl font-bold text-[#153931] mb-2">Tips for Visitors</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Dress modestly and respect local customs</li>
                  <li>Ask for permission before taking photos of people</li>
                  <li>Try traditional foods associated with the festival</li>
                  <li>Participate respectfully if invited to join celebrations</li>
                  <li>Be prepared for crowded spaces and transportation delays</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;