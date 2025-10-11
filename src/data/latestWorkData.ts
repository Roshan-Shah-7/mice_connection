export interface ILatestWork {
    id: number;
    title: string;
    description: string;
    image: string;
    detailImages?: { image: string; text: string; }[];
    year: string;
    slug?: string;
}

export const latestWorks: ILatestWork[] = [
    {
        id: 1,
        title: "TMC in Everest Women's Volleyball League",
        description: "The MICE Connection proudly supported the Lalitpur Queens in the historic Everest Women's Volleyball League - South Asia's first women's volleyball league. Our partnership demonstrated our commitment to advancing gender equality and empowering women in sports. We celebrated the athletes' exceptional skill, determination, and leadership, contributing to a groundbreaking movement that inspires women to break barriers and achieve excellence both on and off the court.",
        image: "/assets/works/wo.jpg",
        year: "2024",
        slug: "everest-womens-volleyball-league",
        detailImages: [
            {
                image: "/assets/gallery/volly.webp",
                text: "The MICE Connection team actively participating in the Everest Women's Volleyball League, showing our support for women in sports."
            },
            {
                image: "/assets/gallery/volly2.webp",
                text: "Celebrating the spirit of sportsmanship and empowerment at the Everest Women's Volleyball League with the Lalitpur Queens."
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
        detailImages: [
            {
                image: "/assets/gallery/hor2.webp",
                text: "Mr. Li Shengtao, the Chinese paraglider, being honored for his incredible feat of paragliding from Mount Everest."
            },
            {
                image: "/assets/gallery/hor3.webp",
                text: "Government officials and tourism leaders attending the prestigious ceremony, highlighting Nepal's adventure tourism potential."
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
        detailImages: [
            {
                image: "/assets/gallery/ch2.webp",
                text: "Distinguished guests, including the Chinese Ambassador and Nepal's Tourism Minister, at the high-level seminar."
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
        detailImages: [
            {
                image: "/assets/gallery/doc2.webp",
                text: "Behind-the-scenes look at the making of 'The Unsilenced' documentary."
            },
            {
                image: "/assets/gallery/doc3.webp",
                text: "The MICE Connection team at the premiere of 'The Unsilenced' documentary in Nepal."
            }
        ]
    },
    {
        id: 5,
        title: "Launch Event of The Himalayan Guardian Nepal",
        description: "The MICE Connection expertly managed the successful launch event of The Himalayan Guardian Nepal, providing end-to-end event solutions including strategic planning, logistical coordination, and on-site execution. Our professional approach ensured a seamless and impactful launch that effectively introduced the publication to its target audience and stakeholders.",
        image: "/assets/works/hgn3.webp",
        year: "2025",
        slug: "the-himalayan-guardian-nepal",
        detailImages: [
            {
                image: "/assets/works/hgn1.webp",
                text: "The MICE Connection team at the successful launch event of The Himalayan Guardian Nepal."
            },
            {
                image: "/assets/works/hgn2.webp",
                text: "Strategic planning and logistical coordination ensured a seamless and impactful launch."
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
        detailImages: [
            {
                image: "/assets/works/charming2.jpg",
                text: "A vibrant cultural performance showcasing the rich heritage of Guangzhou and Nepal."
            },
            {
                image: "/assets/works/charming3.jpg",
                text: "Delegates from Guangzhou and Nepal engaging in discussions to strengthen cultural and economic ties."
            }
        ]
    },
    {
        id: 7,
        title: "Everest Summiteers Summit",
        description: "The MICE Connection organized the prestigious Everest Summiteers Summit, bringing together accomplished mountaineers and adventure enthusiasts. Our professional event management encompassed all aspects from conceptualization to execution, creating a platform for knowledge sharing, networking, and celebrating extraordinary achievements in mountaineering.",
        image: "/assets/gallery/everest.webp",
        year: "2025",
        slug: "everest-summiteers-summit",
        detailImages: [
            {
                image: "/assets/gallery/everest3.webp",
                text: "Accomplished mountaineers sharing their experiences and insights at the Everest Summiteers Summit."
            }
        ]
    },
    {
        id: 9,
        title: "Bangladesh Sales Mission",
        description: "The MICE Connection actively participated in the Bangladesh Sales Mission, representing Nepal's tourism and events industry. Our engagement included networking with international stakeholders, exploring business opportunities, and promoting Nepal as a premier destination for meetings, incentives, conferences, and exhibitions.",
        image: "/assets/works/participantion in bangladeshSales.webp",
        year: "2025",
        slug: "bangladesh-sales-mission",
        detailImages: [
            {
                image: "/public/assets/works/bang3.jpg",
                text: "The MICE Connection team at the Bangladesh Sales Mission, promoting Nepal's tourism and events industry."
            }
        ]
    },
    {
        id: 10,
        title: "IITM Bangalore Participation",
        description: "The MICE Connection participated in the India International Travel Mart (IITM) Bangalore, strengthening our presence in the South Asian travel market. Our participation focused on building strategic partnerships, showcasing our event management expertise, and exploring new opportunities in the regional tourism and events industry.",
        image: "/assets/works/iitmBangalore.webp",
        year: "2025",
        slug: "iitm-bangalore",
        detailImages: [
            {
                image: "/assets/works/bang1.jpg",
                text: "Our team at the India International Travel Mart (IITM) in Bangalore, building strategic partnerships."
            }
        ]
    },
];