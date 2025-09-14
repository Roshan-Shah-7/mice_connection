import React from 'react';
import HeroSection from '../components/AboutNepal/HeroSection';
import IntroductionSection from '../components/AboutNepal/IntroductionSection';
import StatsSection from '../components/AboutNepal/StatsSection';
import DestinationsSection from '../components/AboutNepal/DestinationsSection';
import CultureSection from '../components/AboutNepal/CultureSection';
import ActivitiesSection from '../components/AboutNepal/ActivitiesSection';
import UniqueToNepalSection from '../components/AboutNepal/UniqueToNepalSection';
import EventsSection from '../components/AboutNepal/EventsSection';
import CallToActionSection from '../components/AboutNepal/CallToActionSection';

const AboutNepal: React.FC = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <IntroductionSection />
            <StatsSection />
            <DestinationsSection />
            <CultureSection />
            <ActivitiesSection />
            <UniqueToNepalSection />
            <EventsSection />
            <CallToActionSection />
        </div>
    );
};

export default AboutNepal;