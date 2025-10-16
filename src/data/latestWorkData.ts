export interface ILatestWork {
    id: number;
    title: string;
    description: string;
    image: string;
    detailImages?: { image: string; text: string; }[];
    year: string;
    slug?: string;
    type: "MICE" | "Tour";
}

export const latestWorks: ILatestWork[] = [
    {
        id: 1,
        title: "TMC in Everest Women's Volleyball League",
        description: "The MICE Connection proudly supported the Lalitpur Queens in the historic Everest Women's Volleyball League - South Asia's first women's volleyball league. Our partnership demonstrated our commitment to advancing gender equality and empowering women in sports. We celebrated the athletes' exceptional skill, determination, and leadership, contributing to a groundbreaking movement that inspires women to break barriers and achieve excellence both on and off the court.",
        image: "/assets/works/wo.jpg",
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
        image: "/assets/works/chi.jpg",
        year: "2023",
        slug: "honoring-chinese-paraglider",
        type: "MICE",
        detailImages: [
            {
                image: "/assets/events/Li Shengtao.jpg",
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
        image: "/assets/works/sem.jpg",
        year: "2023",
        slug: "seminar-economic-challenges-opportunities",
        type: "MICE",
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
        image: "/assets/works/Unsilenced.jpg",
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
        title: "Launch Event of The Himalayan Guardian Nepal",
        description: "The MICE Connection expertly managed the successful launch event of The Himalayan Guardian Nepal, providing end-to-end event solutions including strategic planning, logistical coordination, and on-site execution. Our professional approach ensured a seamless and impactful launch that effectively introduced the publication to its target audience and stakeholders.",
        image: "/assets/works/hgn3.webp",
        year: "2025",
        slug: "the-himalayan-guardian-nepal",
        type: "MICE",
        detailImages: [
            {
                image: "/assets/events/hgn1.jpg",
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
                image: "/assets/events/topCharming.jpg",
                text: "Elegant venue setup for the 'Charming Guangzhou Meets Nepal' city image showcase organized by The MICE Connection, to promote friendship and cultural exchange between Nepal and China."
            },
            {
                image: "/assets/events/danceCharming.jpg",
                text: "A vibrant cultural performance showcasing the rich culture of Guangzhou. The event highlighted the city’s culture, charm, and artistic spirit."
            }
        ]
    },
    {
        id: 7,
        title: "Everest Summiteers Summit",
        description: "The MICE Connection organized the prestigious Everest Summiteers Summit, bringing together accomplished mountaineers and adventure enthusiasts. Our professional event management encompassed all aspects from conceptualization to execution, creating a platform for knowledge sharing, networking, and celebrating extraordinary achievements in mountaineering.",
        image: "/assets/events/summiteersMain.jpeg",
        year: "2025",
        slug: "everest-summiteers-summit",
        type: "MICE",
        detailImages: [
            {
                image: "/assets/events/summiteersinner.jpeg",
                text: "The event was graced by Honorable Tourism Minister Mr. Badri Pandey, celebrating the Everest Summiteers Summit 2025, a historic gathering honoring mountaineering legends and inspiring future climbers, with The MICE Connection as the event planner."
            }
        ]
    },

    // Tour Projects
    {
        id: 8,
        title: "Bangkok Trip",
        description: "An unforgettable journey through the vibrant city of Bangkok, experiencing its rich culture, bustling markets, and exquisite cuisine. Our meticulously planned tour ensured a seamless and enriching experience for all participants.",
        image: "/assets/works/bangkokTrip.webp",
        year: "2024",
        slug: "bangkok-trip",
        type: "Tour",
        detailImages: [
            {
                image: "/assets/works/bangkokTrip2.jpg",
                text: "A truly happy moment, filled with joy and unforgettable memories in Bangkok."
            },
        ]
    },
    {
        id: 9,
        title: "Japanese Guest Tour",
        description: "A specially curated tour for our esteemed Japanese guests, showcasing the best of Nepal's cultural heritage and natural beauty. The tour included visits to ancient temples, scenic landscapes, and immersive cultural experiences.",
        image: "/assets/works/japaneseGuestTour.webp",
        year: "2024",
        slug: "japanese-guest-tour",
        type: "Tour",
        detailImages: [
            {
                image: "/assets/works/japaneseGuest.jpg",
                text: "Had a beautiful moment sharing laughter and stories with our Japanese guests."
            },
        ]
    },
    {
        id: 10,
        title: "Ladies Group Tour",
        description: "An empowering and adventurous tour designed exclusively for women, focusing on safety, wellness, and authentic local experiences. The group explored diverse regions, engaged with local communities, and indulged in rejuvenating activities.",
        image: "/assets/women/women-culture.webp",
        year: "2023",
        slug: "ladies-group-tour",
        type: "Tour",
        detailImages: [
            {
                image: "/assets/gallery/lades1.webp",
                text: "A spiritual moment for the ladies’ group at Pashupatinath Temple, filled with peace, reflection, and togetherness."
            },
            {
                image: "/assets/gallery/lades2.webp",
                text: "A small gift from The MICE Connection, shared with love and happiness to make the moment special for everyone."
            },
        ]
    },
    {
        id: 11,
        title: "Mr. Manas's Custom Tour",
        description: "A personalized tour meticulously crafted for Mr. Manas, fulfilling his specific interests in adventure and cultural immersion. The itinerary included thrilling treks, spiritual retreats, and exclusive cultural interactions.",
        image: "/assets/gallery/mr-nana.webp",
        year: "2023",
        slug: "mr-manas-custom-tour",
        type: "Tour",
        detailImages: [
            {
                image: "/assets/gallery/mr-nana.webp",
                text: "Mr. Manas enjoying a panoramic view during his custom trek."
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
                image: "/assets/works/mrNamdeo2.jpg",
                text: "The MICE Connection gift card, accompanied by a heartfelt message and a beautiful photo, makes for a truly special and memorable gift."
            }
        ]
    },
    {
        id: 13,
        title: "Mr. Suresh Explores The Magic of Nepal's Golden Triangle",
        description: "Mr. Suresh's family explores the magic of Nepal's Golden Triangle. The journey takes him through Nepal's most iconic destinations: Kathmandu, Pokhara, and Chitwan. It offered a perfect blend of culture, heritage, and natural beauty. Every stop reveals the unique spirit and charm of this incredible region.",
        image: "/assets/gallery/mr-suresh2.webp",
        year: "2025",
        slug: "mr-suresh-explores-golden-triangle",
        type: "Tour",
        detailImages: [
            {
                image: "/assets/works/mrSuresh.jpg",
                text: "On the final day, our MD, Ms. Chhetri, personally bid them farewell, handing over souvenirs as a token of appreciation and fond memories from their journey."
            }
        ]
    },
];