export interface ILatestWork {
    id: number;
    title: string;
    description: string;
    image: string;
    detailImages?: { image: string; text: string; }[];
    year: string;
    slug?: string;
    type: "MICE" | "Tour";
    keyHighlights?: string[];
}

export const latestWorks: ILatestWork[] = [
    {
        id: 1,
        title: "TMC in Everest Women's Volleyball League",
        description: "The MICE Connection proudly supported the Lalitpur Queens in the historic Everest Women's Volleyball League - South Asia's first women's volleyball league. Our partnership demonstrated our commitment to advancing gender equality and empowering women in sports. We celebrated the athletes' exceptional skill, determination, and leadership, contributing to a groundbreaking movement that inspires women to break barriers and achieve excellence both on and off the court.",
        image: "/assets/works/wo.webp",
        year: "2024",
        slug: "everest-womens-volleyball-league",
        type: "MICE",
        detailImages: [
            {
                image: "/assets/gallery/volly.webp",
                text: "Celebrating a moment with the winning team, Lalitpur Queensin."
            },
            {
                image: "/assets/gallery/volly2.webp",
                text: "A spiritual moment with Lalitpur Queens in Pashupatinath Temple."
            }
        ]
    },
    {
        id: 2,
        title: "Honoring Chinese Paraglider in Nepal",
        description: "The MICE Connection collaborated with Babu Adventure Paragliding, Seven Summit Treks Pvt. Ltd., and Nepal Big Mountain Travels to honor Chinese paraglider Mr. Li Shengtao for his extraordinary achievement of paragliding from Mount Everest at 8,000 meters. This prestigious ceremony, attended by government officials and tourism leaders, highlighted Nepal's growing adventure tourism potential. Mr. Li's remarkable feat, culminating from years of training and dedication, showcases Nepal's position as a premier destination for extreme sports and adventure tourism.",
        image: "/assets/works/chi.webp",
        year: "2023",
        slug: "honoring-chinese-paraglider",
        type: "MICE",
        keyHighlights: [
            "Empowered women in sports through partnership with Lalitpur Queens.",
            "Celebrated exceptional skill and leadership of female athletes."
        ],
        detailImages: [
            {
                image: "/assets/events/Li Shengtao.webp",
                text: "Mr. Li Shengtao, the Chinese paraglider, being honored for his incredible feat of paragliding from Mount Everest."
            },
            {
                image: "/assets/gallery/hor3.webp",
                text: "A memorable group photo with Mr. Li Shengtao, the Chinese paraglider, and other amazing guests, capturing the joy and camaraderie of the moment."
            }
        ]
    },
    {
        id: 3,
        title: "Seminar on Economic Challenges and Opportunities & Cultural Exchange Event",
        description: "The MICE Connection successfully organized a high-level seminar featuring distinguished guests including the Chinese Ambassador, renowned economist Mr. Wu Xiabo, and Nepal's Tourism Minister Hit Bahadur Tamang. This landmark event facilitated meaningful dialogue on economic collaboration and tourism development between Nepal and China. The comprehensive program included insightful discussions, cultural performances, sightseeing tours, and networking events, strengthening bilateral relations and attracting over eighty international participants to Nepal.",
        image: "/assets/works/sem.webp",
        year: "2023",
        slug: "seminar-economic-challenges-opportunities",
        type: "MICE",
        keyHighlights: [
            "Honored Chinese paraglider Mr. Li Shengtao for his Everest achievement.",
            "Highlighted Nepal as a premier destination for extreme sports.",
        ],
        detailImages: [
            {
                image: "/assets/gallery/ch2.webp",
                text: "The MICE Connection hosted a high-level seminar with distinguished guests, including the Chinese Ambassador, economist Mr. Wu Xiabo, and Nepal’s Tourism Minister Hit Bahadur Tamang, fostering dialogue on economic collaboration and tourism development while welcoming more than eighty participants."
            },
        ]
    },
    {
        id: 4,
        title: "The Unsilenced Documentary - Powered by The MICE Connection",
        description: "The MICE Connection played a pivotal role in the award-winning documentary 'The Unsilenced,' showcasing the powerful stories of four remarkable women. Our comprehensive services included digital marketing strategy, media mobilization, public relations, and event management. The documentary has received international acclaim and multiple awards, with premieres held in Nepal and scheduled screenings in Australia and the United States, amplifying important voices and stories globally.",
        image: "/assets/works/Unsilenced.webp",
        year: "2023",
        slug: "the-unsilenced-documentary",
        type: "MICE",
        detailImages: [
            {
                image: "/assets/gallery/doc2.webp",
                text: "A moment of pride and joy celebrating the award-winning documentary ‘The Unsilenced,’ honoring the inspiring stories of four extraordinary women and their powerful journeys."
            },
        ]
    },
    {
        id: 5,
        title: "Himalayan Guardian Nepal",
        description: `The Plaza hosted the grand launch of Himalayan Guardian Nepal, a pioneering initiative designed to make travel and trekking in Nepal safer than ever. On this launch event, Himalayan Guardian Nepal introduces a Comprehensive Tourism Guard for Travelers, integrating smart safety devices, insurance coverage, and 24/7 rescue services for trekkers and travelers across the country. MICE Connection proudly served as the event planner, arranging a seamless and impactful launch experience for HGN.
The launch event brought together industry leaders, travel companies, travel enthusiasts, and media representatives to witness the unveiling of this innovative safety program. Guests had the opportunity to learn about the features and benefits of the program, interact with the team behind the initiative, and explore live demonstrations of the safety devices.
`,
        image: "/assets/works/hgn3.webp",
        year: "2025",
        slug: "the-himalayan-guardian-nepal",
        type: "MICE",
        keyHighlights: [
            'Grand launch at The Plaza with distinguished guests and media coverage.',
            'Introduction of the Comprehensive Tourism Guard for Travelers.',
            'Demonstrations of smart safety devices and 24/7 rescue services.',
            'Insightful presentations on travel insurance and safety measures.',
            'Networking opportunities for travel professionals and industry stakeholders.',
            'Organized and managed professionally by MICE Connection.'
        ],
        detailImages: [
            {
                image: "/assets/events/hgn1.webp",
                text: "The ribbon cutting ceremony marked the official launch of Himalayan Guardian Nepal, attended by distinguished delegates from Nepal and China. The event celebrated a new initiative dedicated to enhancing the safety and wellbeing of travelers in Nepal, symbolizing a strong step toward responsible and secure tourism."
            },
            {
                image: "/assets/works/hgn2.webp",
                text: "A warm welcome ceremony organized by The MICE Connection for Himalayan Guardian Nepal, where delegates were greeted with traditional khada  symbolizing respect and goodwill."
            }
        ]
    },
    {
        id: 6,
        title: "Charming Guangzhou Meets Nepal City Image Showcase",
        description: "The MICE Connection facilitated the successful 'Charming Guangzhou Meets Nepal' city image showcase, strengthening cultural and economic ties between the two regions. Our comprehensive event management services included program planning, venue coordination, and stakeholder engagement, creating an immersive experience that highlighted the unique characteristics of both cities.",
        image: "/assets/gallery/event.webp",
        year: "2025",
        slug: "charmimg-guangzhou-meets-nepal",
        type: "MICE",
        detailImages: [
            {
                image: "/assets/events/topCharming.webp",
                text: "Elegant venue setup for the 'Charming Guangzhou Meets Nepal' city image showcase organized by The MICE Connection, to promote friendship and cultural exchange between Nepal and China."
            },
            {
                image: "/assets/events/danceCharming.webp",
                text: "A vibrant cultural performance showcasing the rich culture of Guangzhou. The event highlighted the city’s culture, charm, and artistic spirit."
            }
        ]
    },
    {
        id: 7,
        title: "Everest Summiteers Summit",
        description: "The MICE Connection organized the prestigious Everest Summiteers Summit, bringing together accomplished mountaineers and adventure enthusiasts. Our professional event management encompassed all aspects from conceptualization to execution, creating a platform for knowledge sharing, networking, and celebrating extraordinary achievements in mountaineering.",
        image: "/assets/events/summiteersMain.webp",
        year: "2025",
        slug: "everest-summiteers-summit",
        type: "MICE",
        detailImages: [
            {
                image: "/assets/events/summiteersinner.webp",
                text: "The event was graced by Honorable Tourism Minister Mr. Badri Pandey, celebrating the Everest Summiteers Summit 2025, a historic gathering honoring mountaineering legends and inspiring future climbers, with The MICE Connection as the event planner."
            }
        ]
    },

    // Tour Projects
    {
        id: 8,
        title: "Thailand Trip",
        description: `The MICE Connection, in collaboration with Bangkok Corporate Training (CTB) Thailand & Thai Seva, successfully organized a 10-day training program on Advanced Construction and Project Management for Trishuli Jal Vidyut Company Limited.
        The program focused on enhancing technical, managerial, and operational skills through expert led sessions, corporate visits, and practical exposure. Participants were also able to enjoy city tours of Bangkok, Pattaya, and Phuket, experiencing Thailand’s culture and hospitality alongside professional learning.`,
        image: "/assets/works/bangkokTrip.webp",
        year: "2024",
        slug: "bangkok-trip",
        type: "Tour",
        keyHighlights: [
            "10-day professional training in Bangkok, Thailand.",
            "Organized by MICE Connection, CTB Thailand and Thai Seva.",
            "Tailored for Trishuli Jal Vidyut Company Limited.",
            "Focus on Advanced Construction and Project Management.",
            "Included interactive sessions, case studies, and field exposure.",
            "City tours in Bangkok, Pattaya, and Phuket for cultural learning."
        ],
        detailImages: [
            {
                image: "/assets/works/bangkokTrip2.webp",
                text: `Participants from Trishuli Jal Vidyut Company Limited proudly received their certificates from the Thai trainer on the final day of the training session on Advanced Construction and Project Management Program.`
            },
        ]
    },
    {
        id: 9,
        title: "Japanese Guest Tour",
        description: `Nepal’s majestic Himalayas have long captured the hearts of travelers and adventurers from around the world. Recently, a Japanese guest, accompanied by the MICE Connection team, completed a remarkable 12-day trek to the Everest Base Camp. Organized by MICE Connection, this journey combined breathtaking mountain vistas, immersive cultural experiences, and the thrill of reaching one of the world’s most iconic destinations.`,
        image: "/assets/works/japaneseGuestTour.webp",
        year: "2024",
        slug: "japanese-guest-tour",
        type: "Tour",
        keyHighlights: [
            "Scenic trekking to Everest Base Camp with panoramic mountain views.",
            "Visiting the Sherpa villages and Namche Bazaar for authentic cultural experiences.",
            "Stunning flights over Everest and surrounding peaks.",
            "Flight experience on one of the world’s most challenging runways",
            "Opportunities to enjoy traditional Nepali cuisine and hospitality",
            "Photography and nature exploration in some of the world’s most dramatic landscapes.",
        ],
        detailImages: [
            {
                image: "/assets/works/japaneseGuest.webp",
                text: "Our Japanese guest, accompanied by the MICE Connection team, enjoyed a truly memorable trek, embracing the spirit of adventure and achievement."
            },
        ]
    },
    {
        id: 10,
        title: "Ladies Group Tour",
        description: `A group of ladies embarked on a 14-day journey across Nepal, organized by MICE Connection, discovering the Nepal’s rich culture, religion, history, and natural beauty. The Trip starting from Gorakhpur and concluding in Darbhanga, offered a perfect blend of exploration, relaxation, and cultural immersion tailored specifically for women travelers by The MICE Connection.`,
        image: "/assets/women/women-culture.webp",
        year: "2023",
        slug: "ladies-group-tour",
        type: "Tour",
        keyHighlights: [
            "Exploring historic, religious and cultural landmarks of Nepal.",
            "Immersive experiences in local villages and markets.",
            "Scenic drives and sightseeing from Gorakhpur to Darbhanga.",
            "Enjoying traditional Nepali cuisine and hospitality.",
            "Enjoyed group activities and bonding among participants."
        ],
        detailImages: [
            {
                image: "/assets/gallery/lades1.webp",
                text: "A spiritual moment for the ladies’ group at Pashupatinath Temple, filled with peace, reflection, and togetherness."
            },
            {
                image: "/assets/gallery/lades2.webp",
                text: "Celebrating friendship, spiritual, and unforgettable memories; the ladies group enjoying their 14-day Nepal journey with the MICE Connection team"
            },
        ]
    },
    {
        id: 11,
        title: "Mr. Manas's Custom Tour",
        description: "A personalized family tour carefully crafted for Mr. Manas, tailored to his interests in cultural experiences and memorable family moments. The itinerary included visits to heritage sites, local experiences, and special activities for the whole family to enjoy together.",
        image: "/assets/gallery/mr-nana.webp",
        year: "2023",
        slug: "mr-manas-custom-tour",
        type: "Tour",
        detailImages: [
            {
                image: "/assets/gallery/mr-nana.webp",
                text: "A happy family photo capturing joyful moments, laughter, and togetherness during their memorable and special tour."
            }
        ]
    },
    {
        id: 12,
        title: "Mr. Namdeo's Cultural Expedition",
        description: "An enriching cultural expedition designed for Mr. Namdeo, delving deep into Nepal's ancient traditions, historical sites, and vibrant festivals. The tour offered an authentic glimpse into the heart of Nepalese heritage.",
        image: "/assets/gallery/mr-namdoe.webp",
        year: "2024",
        slug: "mr-namdeo-cultural-expedition",
        type: "Tour",
        detailImages: [
            {
                image: "/assets/works/mrNamdeo2.webp",
                text: "The MICE Connection gift card, accompanied by a heartfelt message and a beautiful photo, makes for a truly special and memorable gift."
            }
        ]
    },
    {
        id: 13,
        title: "Family and Friends Gateway: Exploring Pokhara, Chitwan & Kathmandu",
        description: `Mr. Suresh, along with his family and friends, enjoyed a memorable holiday across three of Nepal’s most captivating destinations: Pokhara, Chitwan, and Kathmandu. Organized by MICE Connection, the journey beautifully blended adventure, nature, culture, and relaxation, offering the group an authentic taste of Nepal’s diverse experiences.`,
        image: "/assets/gallery/mr-suresh2.webp",
        year: "2025",
        slug: "mr-suresh-explores-golden-triangle",
        type: "Tour",
        keyHighlights: [
            'Serene boat rides and sightseeing in Pokhara with views of the Annapurna range.',
            'Jungle safari and Tharu cultural show experiences in Chitwan National Park.',
            'Exploration of Kathmandu’s UNESCO World Heritage Sites.',
            'Authentic Nepali cuisine and local hospitality throughout the trip.',
            'Family & friendly adventure and bonding moments in beautiful settings.',
            'Organized and coordinated by MICE Connection for a seamless experience.'
        ],
        detailImages: [
            {
                image: "/assets/works/mrSuresh.webp",
                text: "On the final day, Mr. Suresh and his family & friends celebrated their memorable journey through Pokhara, Chitwan, and Kathmandu with the MICE Connection team, proudly holding the banner and souvenirs."
            }
        ]
    },
];