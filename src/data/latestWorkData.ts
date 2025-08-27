export interface ILatestWork {
    id: number;
    title: string;
    description: string;
    image: string;
    year: string;
    slug?: string;
}

export const latestWorks: ILatestWork[] = [
    {
        id: 1,
        title: "TMC in Everest Women's Volleyball League",
        description: "The MICE Connection is committed to fostering gender equality and empowering women in all fields, including sports. By supporting the Lalitpur Queens in the Everest Women's Volleyball League, we aim to inspire women to break barriers and pursue excellence. This groundbreaking league marks a significant step forward for women's sports in South Asia, and we are proud to stand alongside these talented athletes as they showcase their skill, determination, and leadership.",
        image: "/assets/works/wo.jpg",
        year: "2024",
        slug: "everest-womens-volleyball-league"
    },
    {
        id: 2,
        title: "HONORING CHINESE PARAGLIDER IN NEPAL",
        description: "Chinese paraglider Mr. Li Shengtao received a prestigious accolade for his daring feat of paragliding from the peak of the world's tallest mountain, Mount Everest, at an astonishing altitude of 8,000 meters. The honor was conferred by Babu Adventure Paragliding, Seven Summit Treks Pvt. Ltd., and Nepal Big Mountain Travels, in collaboration with The MICE Connection.",
        image: "/assets/works/chi.jpg",
        year: "2023",
        slug: "honoring-chinese-paraglider"
    },
    {
        id: 3,
        title: "A Seminar on Economic Challenges and Opportunities and A Cultural Exchange Event",
        description: "The MICE Connection is proud to be associated with the successful completion of a highly impactful seminar that brought together distinguished guests, including the esteemed Chinese Ambassador, economist Mr. Wu Xiabo, and Nepal's Tourism Minister, Hit Bahadur Tamang.",
        image: "/assets/works/sem.jpg",
        year: "2023",
        slug: "seminar-economic-challenges-opportunities"
    },
    {
        id: 4,
        title: "The Unsilenced, Documentary - Powered by The MICE Connection",
        description: "The MICE Connection is honored to have played a key role in the documentary The Unsilenced, which tells the powerful stories and struggles of four remarkable women. Our team handled digital marketing, media mobilization, public relations, and event management for the project.",
        image: "/assets/works/Unsilenced.jpg",
        year: "2023",
        slug: "the-unsilenced-documentary"
    },
];