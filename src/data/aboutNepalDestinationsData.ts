export interface Destination {
    name: string;
    description: string;
    image: string;
    highlights: string[];
    relatedTourPackageSlug?: string;
    descriptionDetail?: string; // Added for more detailed descriptions
}

export const aboutNepalDestinations: Destination[] = [
    {
        name: "Kathmandu Valley",
        description: "Cultural heart with ancient temples and vibrant markets",
        descriptionDetail: "Kathmandu Valley, a UNESCO World Heritage Site, is the historical and cultural heart of Nepal. It's an open-air museum of ancient temples, stupas, and palaces, showcasing exquisite Newari architecture and artistry. Explore the bustling streets of Thamel, the spiritual ambiance of Pashupatinath, the colossal Boudhanath Stupa, and the medieval squares of Patan and Bhaktapur. The valley is a living testament to Nepal's rich religious harmony between Hinduism and Buddhism.",
        image: "/assets/nepal/kathmandu.webp",
        highlights: ["7 UNESCO Sites", "Ancient Palaces", "Traditional Crafts", "Vibrant Markets", "Newari Culture"],
        relatedTourPackageSlug: "kathmandu-valley-cultural-tour"
    },
    {
        name: "Pokhara",
        description: "City of Lakes with stunning mountain views",
        descriptionDetail: "Nestled in a tranquil valley, Pokhara is renowned for its serene lakes and breathtaking panoramic views of the Annapurna mountain range, including Machhapuchhre (Fishtail Peak). It's a hub for adventure activities like paragliding, zip-lining, and boating on Phewa Lake. The city offers a relaxed atmosphere, beautiful natural landscapes, and access to popular trekking routes like the Annapurna Base Camp and Poon Hill.",
        image: "/assets/nepal/pokhara.webp",
        highlights: ["Fewa Lake", "Paragliding", "Peace Pagoda", "Sarangkot Sunrise", "Boating"],
        relatedTourPackageSlug: "pokhara-adventure-package"
    },
    {
        name: "Chitwan National Park",
        description: "UNESCO World Heritage wildlife sanctuary",
        descriptionDetail: "Chitwan National Park is a lush wildlife sanctuary in the Terai lowlands, famous for its conservation efforts of endangered species. It's one of the best places in Asia to spot the one-horned rhinoceros and Bengal tigers in their natural habitat. Activities include jungle safaris (jeep or elephant back), canoe rides on the Rapti River, bird watching, and cultural tours to Tharu villages, offering a unique blend of adventure and cultural immersion.",
        image: "/assets/nepal/chitwan.webp",
        highlights: ["Rhino Safari", "Elephant Breeding Center", "Tharu Cultural Show", "Canoeing", "Bird Watching"],
        relatedTourPackageSlug: "chitwan-jungle-safari"
    },
    {
        name: "Lumbini",
        description: "Birthplace of Lord Buddha",
        descriptionDetail: "Lumbini, a UNESCO World Heritage Site, is the sacred birthplace of Siddhartha Gautama, the Lord Buddha. It is a profound pilgrimage site for Buddhists worldwide, offering a serene and spiritual atmosphere. Key attractions include the Maya Devi Temple, the Ashoka Pillar, and numerous monasteries built by various Buddhist countries, each showcasing unique architectural styles. It's a place of peace, reflection, and historical significance.",
        image: "/assets/nepal/lumbini.webp",
        highlights: ["Maya Devi Temple", "Monastic Zone", "Peace Pagoda", "Ashoka Pillar", "Lumbini Museum"],
        relatedTourPackageSlug: "lumbini-spiritual-journey"
    },
    {
        name: "Annapurna Region",
        description: "World-renowned trekking paradise",
        descriptionDetail: "The Annapurna Region is a trekking paradise, offering some of the most spectacular and diverse trekking routes in the world. From the classic Annapurna Circuit to the shorter Poon Hill trek, the region boasts stunning mountain vistas, diverse landscapes ranging from subtropical forests to alpine deserts, and a rich cultural tapestry of Gurung and Manangi villages. The majestic peaks of Annapurna, Dhaulagiri, and Machhapuchhre dominate the skyline, providing an unforgettable backdrop for your adventure.",
        image: "/assets/nepal/AnnapurnaRegion.webp",
        highlights: ["Annapurna Circuit", "Poon Hill", "Thorong La Pass", "Manang Village", "Himalayan Views"],
        relatedTourPackageSlug: "annapurna-circuit-trek"
    },
    {
        name: "Everest Base Camp",
        description: "Iconic journey to the roof of the world",
        descriptionDetail: "The Everest Base Camp trek is an iconic adventure leading to the foot of Mount Everest, the world's highest peak. This challenging trek takes you through the heart of the Khumbu region, offering unparalleled views of Everest, Lhotse, Nuptse, and Ama Dablam. You'll experience the unique Sherpa culture, visit ancient monasteries like Tengboche, and trek through picturesque villages. The journey culminates with reaching Everest Base Camp and ascending Kala Patthar for a panoramic sunrise view of Everest.",
        image: "/assets/nepal/everest.webp",
        highlights: ["Kala Patthar", "Tengboche Monastery", "Sherpa Culture", "Everest Base Camp", "Namche Bazaar"],
        relatedTourPackageSlug: "everest-base-camp-trek"
    }
];