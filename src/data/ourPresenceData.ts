export interface IPresence {
    id: number;
    title: string;
    description: string;
    image: string;
    year: string;
    slug: string;
    detailImages?: { image: string; text: string; }[];
}

export const ourPresenceData: IPresence[] = [
    {
        id: 1,
        title: "IITM Bangalore",
        description: "The MICE Connection participated in the India International Travel Mart (IITM) Bangalore, strengthening our presence in the South Asian travel market. Our participation focused on building strategic partnerships, showcasing our event management expertise, and exploring new opportunities in the regional tourism and events industry.",
        image: "/assets/works/iitmBangalore.webp",
        year: "2025",
        slug: "iitm-bangalore",
        detailImages: [
            {
                image: "/assets/works/bang1.jpg",
                text: "Our team at the India International Travel Mart (IITM) in Bangalore."
            }
        ]
    },
    {
        id: 2,
        title: "Bangladesh Sales Mission",
        description: "The MICE Connection actively participated in the Bangladesh Sales Mission, representing Nepal's tourism and events industry. Our engagement included networking with international stakeholders, exploring business opportunities, and promoting Nepal as a premier destination for meetings, incentives, conferences, and exhibitions.",
        image: "/assets/works/participantion in bangladeshSales.webp",
        year: "2025",
        slug: "bangladesh-sales-mission",
        detailImages: [
            {
                image: "/assets/works/bang3.jpg",
                text: "The MICE Connection team at the Bangladesh Sales Mission, promoting Nepal's tourism and main highlights of Nepal."
            }
        ]
    },
    {
        id: 3,
        title: "ITE Hong Kong",
        description: "The MICE Connection proudly represented Nepal at the International Travel Expo (ITE) Hong Kong, a premier travel trade fair. Our participation aimed to promote Nepal as an emerging MICE and tourism destination, fostering international collaborations and attracting new visitors to the country.",
        image: "/assets/works/iteHongKong.webp",
        year: "2024",
        slug: "ite-hong-kong",
        detailImages: [
            {
                image: "/assets/works/iteHongKong.webp",
                text: "Our booth at ITE Hong Kong, showcasing Nepal's unique offerings."
            }
        ]
    },
    {
        id: 4,
        title: "ITE Bangalore",
        description: "The MICE Connection participated in the India International Travel Exhibition (ITE) Bangalore in 2024, further solidifying our presence in the Indian travel market. Our engagement focused on building strategic partnerships, showcasing our event management expertise, and exploring new opportunities in the regional tourism and events industry.",
        image: "/assets/works/iteBanglore1.jpg",
        year: "2024",
        slug: "ite-bangalore-2024",
        detailImages: [
            {
                image: "/assets/works/iteBanglore.jpg",
                text: "At the India International Travel Exhibition (ITE) in Bangalore, forging meaningful partnerships for future growth."
            }
        ]
    },
    {
        id: 5,
        title: "IITM Pune Participation",
        description: "The MICE Connection expanded its footprint by participating in the India International Travel Mart (IITM) Pune in 2024. This event provided an excellent platform to connect with travel professionals, promote Nepal as a prime MICE destination, and explore new avenues for collaboration in Western India.",
        image: "/assets/works/iitmPune.jpg",
        year: "2024",
        slug: "iitm-pune-2024",
        detailImages: [
            {
                image: "/assets/works/iitmPune2.jpg",
                text: "Networking with travel professionals at IITM Pune, exploring new opportunities."
            }
        ]
    }
];