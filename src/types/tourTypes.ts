
export interface TourPackage {
    id: number;
    title: string;
    description: string;
    duration: string;
    priceUSD: string;
    priceNPR: string;
    image: string;
    category: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    highlights: string[];
    includes: string[];
    groupSize: string;
    bestSeason: string;
    itinerary: { day: number; title: string; description: string; }[];
    gallery: string[];
    slug?: string;
}

export type Currency = 'USD' | 'NPR';

export interface AIRecommendation {
    id: number;
    reasoning: string;
}
