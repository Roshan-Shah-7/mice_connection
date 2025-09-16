import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { aboutNepalDestinations, type Destination } from '../data/aboutNepalDestinationsData';
import { tourPackages } from '../data/tourPackagesData';
import {
    FaArrowLeft, FaMapMarkerAlt, FaClock, FaCalendarAlt,
    FaMoneyBillWave, FaHiking, FaHotel, FaUtensils,
    FaLeaf, FaHistory,
    FaHeart, FaShare, FaMap, FaGlobe, FaUsers, FaStar,
    FaUmbrellaBeach, FaTree, FaMonument, FaMountain
} from 'react-icons/fa';


const DetailDestination: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isFavorite, setIsFavorite] = useState(false);

    const destination: Destination | undefined = aboutNepalDestinations.find(dest =>
        (dest.relatedTourPackageSlug === slug) ||
        (dest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '') === slug)
    );

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        if (!destination) {
            navigate('/404');
        }
    }, [destination, navigate]);

    if (!destination) {
        return null;
    }

    const relatedPackages = tourPackages.filter(pkg => pkg.slug === destination.relatedTourPackageSlug);

    // Enhanced destination details with comprehensive information
    const destinationDetails = {
        history: destination.name === "Kathmandu Valley"
            ? "Kathmandu Valley has a history spanning over 2000 years, with evidence of civilization since at least the 6th century BC. It was the confluence of Himalayan and Indo-Gangetic cultures, becoming a major hub of Buddhism and Hinduism. The three ancient cities of Kathmandu, Patan, and Bhaktapur were independent kingdoms until the 18th century when they were unified by King Prithvi Narayan Shah. The valley has witnessed the rise and fall of dynasties, the spread of religions, and the development of unique architectural styles that blend indigenous Newari craftsmanship with influences from India and Tibet."
            : destination.name === "Pokhara"
                ? "Pokhara's history is deeply connected to its strategic location on the trade route between India and Tibet. It was part of the Kaski Kingdom, one of the 24 principalities in the Gandaki region. In the 17th century, it became an important trading post for Tibetan wool, salt, and spices. The city saw significant growth after the 1950s when it became a hub for tourists heading to the Annapurna region. The settlement of Tibetan refugees in the area after 1959 added to its cultural diversity. Today, Pokhara blends ancient traditions with modern tourism infrastructure."
                : "This destination has a rich historical background that reflects Nepal's diverse cultural heritage.",

        significance: destination.name === "Kathmandu Valley"
            ? "The Kathmandu Valley is considered the cultural heart of Nepal and a living museum of medieval art, architecture, and culture. It houses 7 UNESCO World Heritage Sites within a small radius, making it one of the most concentrated areas of cultural heritage in the world. The valley is significant for both Hindus and Buddhists, with important pilgrimage sites like Pashupatinath Temple (one of the most sacred Shiva temples) and Boudhanath Stupa (one of the largest spherical stupas in Nepal). The unique Newari culture, with its intricate wood and metal craftsmanship, festivals, and cuisine, has been preserved for centuries."
            : destination.name === "Pokhara"
                ? "Pokhara is Nepal's adventure capital and the gateway to the Annapurna Circuit, one of the world's best trekking routes. It's renowned for its stunning natural beauty with the serene Phewa Lake reflecting the majestic Annapurna mountain range. The city offers a unique blend of natural attractions and adventure activities. It's also significant for its peaceful environment and as a center for yoga and meditation retreats. The nearby World Peace Pagoda built by Japanese Buddhists symbolizes peace and attracts visitors from around the world."
                : "This destination holds significant cultural, historical, and natural importance in Nepal.",

        uniqueAspects: destination.name === "Kathmandu Valley"
            ? [
                "Living Heritage: Unlike many historical sites that are mere relics, Kathmandu Valley's heritage sites are actively used in daily worship and rituals.",
                "Architectural Marvel: The pagoda-style temples, intricate wood carvings, and metalwork represent a unique fusion of styles not found elsewhere.",
                "Cultural Syncretism: The harmonious coexistence of Hinduism and Buddhism is visible in shared sacred spaces and festivals.",
                "Festival Calendar: The valley celebrates more festivals than there are days in the year, each with unique rituals and celebrations.",
                "Newari Cuisine: A distinct culinary tradition with unique dishes like yomari, bara, and chatamari."
            ]
            : destination.name === "Pokhara"
                ? [
                    "Natural Amphitheater: Pokhara offers one of the most accessible close-up views of the Himalayas, with the mountains seeming almost within reach.",
                    "Underground Caves: The area features unique limestone caves like Gupteshwor Mahadev with underground temples and formations.",
                    "Microclimates: The region has varied microclimates allowing diverse agriculture from tropical fruits to temperate vegetables.",
                    "Adventure Hub: It's one of the few places where you can paraglide with Himalayan vultures and eagles soaring alongside.",
                    "Lake City: Unlike other Himalayan foothill towns, Pokhara is built around a beautiful lake that reflects the mountains."
                ]
                : ["This destination offers unique experiences not found elsewhere in Nepal or the world."],

        bestTime: destination.bestTime || "October to March",
        idealDuration: "3-5 days",
        budget: "$$ (Moderate)",
        difficulty: "Moderate",
        accommodation: "Various options available from budget guesthouses to luxury resorts",
        food: "Local cuisine featuring traditional dishes alongside international options"
    };

    // Function to handle share
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Visit ${destination.name} - Nepal`,
                    text: `Check out ${destination.name} in Nepal: ${destination.description}`,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section with Parallax Effect */}
            <div className="relative h-screen/75 md:h-screen/60 lg:h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#10362e]/90 to-[#10362e]/40 z-10"></div>
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-10000"
                    style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-start mb-6">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-white hover:text-[#fcd10b] transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
                            >
                                <FaArrowLeft /> Back to Destinations
                            </button>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:text-[#fcd10b] transition-colors"
                                >
                                    <FaHeart className={isFavorite ? "text-[#fcd10b]" : ""} />
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:text-[#fcd10b] transition-colors"
                                >
                                    <FaShare />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                {destination.name}
                            </h1>
                            <div className="w-24 h-1 bg-[#fcd10b] mb-6"></div>
                            <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
                                {destination.description}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-6">
                                <div className="flex items-center gap-2 text-white bg-[#10362e]/70 px-3 py-1 rounded-full">
                                    <FaMapMarkerAlt className="text-[#fcd10b]" />
                                    <span>{destination.category}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white bg-[#10362e]/70 px-3 py-1 rounded-full">
                                    <FaClock className="text-[#fcd10b]" />
                                    <span>Best Time: {destinationDetails.bestTime}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white bg-[#10362e]/70 px-3 py-1 rounded-full">
                                    <FaCalendarAlt className="text-[#fcd10b]" />
                                    <span>Ideal Duration: {destinationDetails.idealDuration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 -mt-20 relative z-30">
                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Navigation Tabs */}
                    <div className="border-b border-gray-200 bg-gray-50">
                        <div className="flex flex-wrap gap-2 px-6 pt-6">
                            {[
                                { id: 'overview', label: 'Overview', icon: <FaGlobe /> },
                                { id: 'highlights', label: 'Highlights', icon: <FaStar /> },
                                { id: 'history', label: 'History', icon: <FaHistory /> },
                                { id: 'significance', label: 'Significance', icon: <FaMonument /> },
                                { id: 'travelinfo', label: 'Travel Info', icon: <FaUmbrellaBeach /> },
                                // { id: 'gallery', label: 'Gallery', icon: <FaPhotoVideo /> },
                                { id: 'packages', label: 'Packages', icon: <FaUsers /> }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`flex items-center gap-2 px-4 py-3 font-medium rounded-t-lg transition-colors ${activeTab === tab.id ? 'bg-[#10362e] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 md:p-8">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#10362e] mb-6">Discover {destination.name}</h2>
                                <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                                    <p className="leading-relaxed mb-6 text-lg">
                                        {destination.descriptionDetail || destination.description}
                                    </p>
                                    <p className="leading-relaxed text-lg">
                                        {destination.name} offers a perfect blend of natural beauty, cultural richness, and unique experiences that make it a must-visit destination in Nepal. From ancient traditions to breathtaking landscapes, this destination provides an unforgettable journey into the heart of Himalayan culture and nature.
                                    </p>
                                </div>

                                {/* Key Information Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    <div className="bg-gradient-to-br from-[#10362e] to-[#1a4f44] text-white p-5 rounded-xl shadow-md">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaMoneyBillWave className="text-[#fcd10b]" />
                                            <h3 className="font-semibold">Budget</h3>
                                        </div>
                                        <p>{destinationDetails.budget}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#10362e] to-[#1a4f44] text-white p-5 rounded-xl shadow-md">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaHiking className="text-[#fcd10b]" />
                                            <h3 className="font-semibold">Difficulty</h3>
                                        </div>
                                        <p>{destinationDetails.difficulty}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#10362e] to-[#1a4f44] text-white p-5 rounded-xl shadow-md">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaHotel className="text-[#fcd10b]" />
                                            <h3 className="font-semibold">Accommodation</h3>
                                        </div>
                                        <p>{destinationDetails.accommodation}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#10362e] to-[#1a4f44] text-white p-5 rounded-xl shadow-md">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaUtensils className="text-[#fcd10b]" />
                                            <h3 className="font-semibold">Food</h3>
                                        </div>
                                        <p>{destinationDetails.food}</p>
                                    </div>
                                </div>

                                {/* Unique Aspects */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-[#10362e] mb-4 flex items-center gap-2">
                                        <FaLeaf className="text-[#fcd10b]" /> What Makes {destination.name} Unique
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {destinationDetails.uniqueAspects.map((aspect, index) => (
                                            <div key={index} className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                                <p className="text-gray-800">{aspect}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Highlights Tab */}
                        {activeTab === 'highlights' && destination.highlights && destination.highlights.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#10362e] mb-8">Key Highlights of {destination.name}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {destination.highlights.map((highlight, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start p-4 bg-gradient-to-r from-[#10362e]/5 to-transparent rounded-xl border-l-4 border-[#fcd10b] hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="bg-[#fcd10b] rounded-full p-2 mr-4 flex-shrink-0">
                                                <svg className="w-6 h-6 text-[#10362e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <p className="text-gray-700 text-lg">{highlight}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* History Tab */}
                        {activeTab === 'history' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#10362e] mb-8">History of {destination.name}</h2>
                                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {destinationDetails.history}
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-[#10362e] mb-4">Historical Timeline</h3>
                                <div className="relative border-l-2 border-[#10362e] ml-4 pl-6 pb-6">
                                    <div className="absolute w-4 h-4 bg-[#10362e] rounded-full -left-2"></div>
                                    <h4 className="text-xl font-semibold text-[#10362e]">Ancient Period</h4>
                                    <p className="text-gray-600 mb-4">6th Century BC - 8th Century AD</p>
                                    <p className="text-gray-700">Early settlements and development of trade routes</p>

                                    <div className="absolute w-4 h-4 bg-[#10362e] rounded-full -left-2 mt-6"></div>
                                    <h4 className="text-xl font-semibold text-[#10362e] mt-6">Medieval Period</h4>
                                    <p className="text-gray-600 mb-4">8th Century - 18th Century</p>
                                    <p className="text-gray-700">Kingdom formations, architectural development, and cultural flourishing</p>

                                    <div className="absolute w-4 h-4 bg-[#10362e] rounded-full -left-2 mt-6"></div>
                                    <h4 className="text-xl font-semibold text-[#10362e] mt-6">Modern Period</h4>
                                    <p className="text-gray-600 mb-4">18th Century - Present</p>
                                    <p className="text-gray-700">Unification, modernization, and tourism development</p>
                                </div>
                            </div>
                        )}

                        {/* Significance Tab */}
                        {activeTab === 'significance' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#10362e] mb-8">Cultural and Historical Significance</h2>
                                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {destinationDetails.significance}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-[#10362e] text-white p-6 rounded-xl">
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            <FaTree className="text-[#fcd10b]" /> Cultural Importance
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Center of traditional arts and craftsmanship</li>
                                            <li>Living heritage with daily rituals and practices</li>
                                            <li>Home to unique ethnic communities and their traditions</li>
                                            <li>Preservation of ancient festivals and celebrations</li>
                                        </ul>
                                    </div>

                                    <div className="bg-[#10362e] text-white p-6 rounded-xl">
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            <FaMountain className="text-[#fcd10b]" /> Historical Importance
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Ancient trade routes and economic centers</li>
                                            <li>Architectural evolution over centuries</li>
                                            <li>Influence on regional politics and culture</li>
                                            <li>Testimony to Nepal's rich historical tapestry</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Travel Info Tab */}
                        {activeTab === 'travelinfo' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#10362e] mb-8">Travel Information</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    {/* Best Time to Visit */}
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <h3 className="text-2xl font-bold text-[#10362e] mb-4 flex items-center gap-2">
                                            <FaCalendarAlt className="text-[#fcd10b]" /> Best Time to Visit
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            The ideal time to visit is between {destinationDetails.bestTime}. During this period, the weather is pleasant with clear skies, making it perfect for sightseeing and outdoor activities.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 pl-4 space-y-2">
                                            <li><strong>Spring (March-May):</strong> Blooming flowers and moderate temperatures</li>
                                            <li><strong>Autumn (September-November):</strong> Clear skies and festival season</li>
                                            <li><strong>Winter (December-February):</strong> Cool weather but fewer crowds</li>
                                            <li><strong>Monsoon (June-August):</strong> Lush greenery but possible rainfall</li>
                                        </ul>
                                    </div>

                                    {/* How to Get There */}
                                    <div className="bg-green-50 p-6 rounded-xl">
                                        <h3 className="text-2xl font-bold text-[#10362e] mb-4 flex items-center gap-2">
                                            <FaMap className="text-[#fcd10b]" /> How to Get There
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            {destination.name} is accessible by various means of transportation depending on your starting point.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 pl-4 space-y-2">
                                            <li><strong>By Air:</strong> Nearest airport is Tribhuvan International Airport in Kathmandu</li>
                                            <li><strong>By Road:</strong> Well-connected by bus and private vehicles from major cities</li>
                                            <li><strong>By Trek:</strong> Some destinations require trekking with proper guides</li>
                                            <li><strong>Local Transport:</strong> Taxis, local buses, and rental options available</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Travel Tips */}
                                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                                    <h3 className="text-2xl font-bold text-[#10362e] mb-4 flex items-center gap-2">
                                        <FaLeaf className="text-[#fcd10b]" /> Essential Travel Tips
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Carry appropriate clothing for varying temperatures</li>
                                            <li>Stay hydrated and protect yourself from the sun at high altitudes</li>
                                            <li>Respect local customs and traditions</li>
                                            <li>Carry necessary permits for restricted areas</li>
                                        </ul>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Learn a few basic phrases in the local language</li>
                                            <li>Carry cash as ATMs might not be readily available in remote areas</li>
                                            <li>Try local cuisine but be mindful of food safety</li>
                                            <li>Purchase travel insurance that covers adventure activities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Gallery Tab */}
                        {/* {activeTab === 'gallery' && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#10362e] mb-8 flex items-center gap-2">
                                    <FaPhotoVideo className="text-[#fcd10b]" /> Photo Gallery
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="md:col-span-2 lg:col-span-3 aspect-video overflow-hidden rounded-xl">
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <div key={item} className="aspect-square overflow-hidden rounded-xl">
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                <span className="text-gray-500">Image {item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )} */}

                        {/* Packages Tab */}
                        {activeTab === 'packages' && relatedPackages.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-bold text-[#10362e] mb-8">Available Tour Packages</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {relatedPackages.map(pkg => (
                                        <div
                                            key={pkg.id}
                                            className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-[#fcd10b]"
                                        >
                                            <div className="relative h-56 overflow-hidden">
                                                <img
                                                    src={pkg.image}
                                                    alt={pkg.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 right-4 bg-[#fcd10b] text-[#10362e] font-bold py-1 px-3 rounded-full text-sm z-10">
                                                    {pkg.duration}
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-[#10362e] mb-3 group-hover:text-[#fcd10b] transition-colors duration-300">
                                                    {pkg.title}
                                                </h3>
                                                <p className="text-gray-600 mb-5 line-clamp-2">
                                                    {pkg.description.substring(0, 100)}...
                                                </p>
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-2xl font-bold text-[#10362e]">${pkg.priceUSD}</span>
                                                    <span className="flex items-center text-yellow-400">
                                                        {'★'.repeat(5)}
                                                    </span>
                                                </div>
                                                <Link
                                                    to={`/tour-packages/${pkg.slug}`}
                                                    className="block w-full bg-[#10362e] text-white text-center font-semibold py-3 rounded-lg hover:bg-[#fcd10b] hover:text-[#10362e] transition-colors duration-300"
                                                >
                                                    View Package Details
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-[#10362e] to-[#1a4f44] rounded-2xl shadow-xl p-8 md:p-12 text-center text-white mt-12">
                    <h2 className="text-3xl font-bold mb-4">Ready to Explore {destination.name}?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Contact us to plan your perfect trip to this amazing destination. Our travel experts will help you create a customized itinerary that matches your interests and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <button className="bg-[#fcd10b] text-[#10362e] font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors">
                                Contact Us
                            </button>
                        </Link>
                        <Link to="/tour-packages">
                            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#10362e] transition-colors">
                                View All Packages
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDestination;