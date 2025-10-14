export interface Destination {
    name: string;
    description: string;
    image: string;
    highlights: string[];
    relatedTourPackageSlug?: string;
    descriptionDetail?: string;
    category: string;
    rating: string;
    bestTime: string;
}

export const aboutNepalDestinations: Destination[] = [
    {
        name: "Kathmandu Valley",
        description: "Cultural heart with ancient temples, palaces, and vibrant markets in Nepal's capital region.",
        descriptionDetail: "Kathmandu Valley, a UNESCO World Heritage Site, is the historical and cultural heart of Nepal. It's an open air museum of ancient temples, stupas, and palaces, showcasing exquisite Newari architecture and artistry. Explore the bustling streets of Thamel, the spiritual ambiance of Pashupatinath, the colossal Boudhanath Stupa, and the medieval squares of Patan and Bhaktapur. The valley is a living testament to Nepal's rich religious harmony between Hinduism and Buddhism.",
        image: "/assets/nepal/kathmandu.webp",
        highlights: ["7 UNESCO Sites", "Ancient Palaces", "Traditional Crafts", "Vibrant Markets", "Newari Culture", "Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath"],
        relatedTourPackageSlug: "kathmandu-valley-cultural-tour",
        category: "Cultural",
        rating: "4.8/5",
        bestTime: "Oct-Dec"
    },
    {
        name: "Pokhara",
        description: "City of Lakes with stunning mountain views and adventure activities in the Annapurna region.",
        descriptionDetail: "Nestled in a tranquil valley, Pokhara is renowned for its serene lakes and breathtaking panoramic views of the Annapurna mountain range, including Machhapuchhre (Fishtail Peak). It's a hub for adventure activities like paragliding, zip lining, and boating on Phewa Lake. The city offers a relaxed atmosphere, beautiful natural landscapes, and access to popular trekking routes like the Annapurna Base Camp and Poon Hill.",
        image: "/assets/nepal/pokhara.webp",
        highlights: ["Fewa Lake", "Paragliding", "Peace Pagoda", "Sarangkot Sunrise", "Boating", "Annapurna Views", "Adventure Sports", "Caves"],
        relatedTourPackageSlug: "pokhara-adventure-package",
        category: "Adventure",
        rating: "4.7/5",
        bestTime: "Sep-Nov"
    },
    {
        name: "Chitwan National Park",
        description: "UNESCO World Heritage wildlife sanctuary with diverse flora and fauna.",
        descriptionDetail: "Chitwan National Park is a lush wildlife sanctuary in the Terai lowlands, famous for its conservation efforts of endangered species. It's one of the best places in Asia to spot the one horned rhinoceros and Bengal tigers in their natural habitat. Activities include jungle safaris (jeep or elephant back), canoe rides on the Rapti River, bird watching, and cultural tours to Tharu villages, offering a unique blend of adventure and cultural immersion.",
        image: "/assets/nepal/chitwan.webp",
        highlights: ["Rhino Safari", "Elephant Breeding Center", "Tharu Cultural Show", "Canoeing", "Bird Watching", "Jungle Walk", "Wildlife Photography", "Tharu Culture"],
        relatedTourPackageSlug: "chitwan-jungle-safari",
        category: "Nature",
        rating: "4.6/5",
        bestTime: "Oct-Mar"
    },
    {
        name: "Lumbini",
        description: "Birthplace of Lord Buddha and one of the world's most important spiritual sites.",
        descriptionDetail: "Lumbini, a UNESCO World Heritage Site, is the sacred birthplace of Siddhartha Gautama, the Lord Buddha. It is a profound pilgrimage site for Buddhists worldwide, offering a serene and spiritual atmosphere. Key attractions include the Maya Devi Temple, the Ashoka Pillar, and numerous monasteries built by various Buddhist countries, each showcasing unique architectural styles. It's a place of peace, reflection, and historical significance.",
        image: "/assets/nepal/lumbini.webp",
        highlights: ["Maya Devi Temple", "Monastic Zone", "Peace Pagoda", "Ashoka Pillar", "Lumbini Museum", "Pilgrimage", "Meditation", "Buddhist Monasteries"],
        relatedTourPackageSlug: "lumbini-spiritual-journey",
        category: "Spiritual",
        rating: "4.5/5",
        bestTime: "Oct-Mar"
    },
    {
        name: "Annapurna Region",
        description: "World-renowned trekking paradise with spectacular Himalayan landscapes.",
        descriptionDetail: "The Annapurna Region is a trekking paradise, offering some of the most spectacular and diverse trekking routes in the world. From the classic Annapurna Circuit to the shorter Poon Hill trek, the region boasts stunning mountain vistas, diverse landscapes ranging from subtropical forests to alpine deserts, and a rich cultural tapestry of Gurung and Manangi villages. The majestic peaks of Annapurna, Dhaulagiri, and Machhapuchhre dominate the skyline, providing an unforgettable backdrop for your adventure.",
        image: "/assets/nepal/AnnapurnaRegion.webp",
        highlights: ["Annapurna Circuit", "Poon Hill", "Thorong La Pass", "Manang Village", "Himalayan Views", "Trekking", "Mountain Scenery", "Local Culture"],
        relatedTourPackageSlug: "annapurna-circuit-trek",
        category: "Adventure",
        rating: "4.9/5",
        bestTime: "Mar-May, Oct-Nov"
    },
    {
        name: "Everest Base Camp",
        description: "Iconic journey to the roof of the world through Sherpa country.",
        descriptionDetail: "The Everest Base Camp trek is an iconic adventure leading to the foot of Mount Everest, the world's highest peak. This challenging trek takes you through the heart of the Khumbu region, offering unparalleled views of Everest, Lhotse, Nuptse, and Ama Dablam. You'll experience the unique Sherpa culture, visit ancient monasteries like Tengboche, and trek through picturesque villages. The journey culminates with reaching Everest Base Camp and ascending Kala Patthar for a panoramic sunrise view of Everest.",
        image: "/assets/nepal/everest.webp",
        highlights: ["Kala Patthar", "Tengboche Monastery", "Sherpa Culture", "Everest Base Camp", "Namche Bazaar", "High Altitude", "Mountain Flight", "Himalayan Experience"],
        relatedTourPackageSlug: "everest-base-camp-trek",
        category: "Adventure",
        rating: "4.9/5",
        bestTime: "Mar-May, Oct-Nov"
    },
    {
        name: "Bhaktapur Durbar Square",
        description: "Well preserved medieval city with exquisite architecture and traditional crafts.",
        descriptionDetail: "Bhaktapur Durbar Square is a UNESCO World Heritage Site and one of the best preserved medieval cities in Nepal. Located about 12 km from Kathmandu, it showcases magnificent palaces, temples, and courtyards dating back to the 12th-15th centuries. The city is famous for its pottery and weaving traditions, and its streets are lined with beautifully preserved buildings featuring intricate woodcarvings and stunning pagoda style architecture.",
        image: "/assets/nepal/bhaktapur.webp",
        highlights: ["Nyatapola Temple", "55 Window Palace", "Pottery Square", "Traditional Crafts", "Golden Gate", "Medieval Architecture", "Wood Carvings", "Cultural Heritage"],
        category: "Cultural",
        rating: "4.7/5",
        bestTime: "Oct-Mar"
    },
    {
        name: "Nagarkot",
        description: "Scenic hill station offering panoramic Himalayan views including Mount Everest.",
        descriptionDetail: "Nagarkot is a popular hill station located 32 km from Kathmandu, renowned for its spectacular sunrise and sunset views over the Himalayas. On clear days, you can see a panoramic vista that includes Mount Everest and other major peaks. The area offers gentle hiking trails through pine forests and traditional villages, making it an ideal getaway from the city bustle for those seeking natural beauty and tranquility.",
        image: "/assets/nepal/nagarkot.webp",
        highlights: ["Sunrise Views", "Himalayan Panorama", "Hiking Trails", "Mountain Views", "Peaceful Environment", "Photography", "Day Treks", "Everest Viewpoint"],
        category: "Nature",
        rating: "4.5/5",
        bestTime: "Oct-Jun"
    },
    {
        name: "Rara Lake",
        description: "Nepal's largest lake nestled in the remote wilderness of far western Nepal.",
        descriptionDetail: "Rara Lake is the largest lake in Nepal, located in the remote Rara National Park in the far western region. Often called the 'Queen of Lakes', its stunning blue waters are surrounded by pine forests and snow capped mountains, creating a picture perfect landscape. The area is home to diverse wildlife including red pandas, black bears, and numerous bird species. Due to its remote location, it receives fewer visitors, offering a truly pristine natural experience.",
        image: "/assets/nepal/raraLake.webp",
        highlights: ["Largest Lake", "Pristine Nature", "Wildlife Spotting", "Remote Trekking", "Photography", "Bird Watching", "Tranquility", "Alpine Scenery"],
        category: "Nature",
        rating: "4.4/5",
        bestTime: "Apr-Jun, Sep-Oct"
    },
];