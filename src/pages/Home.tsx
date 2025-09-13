import About from "../components/Home/About"
import Hero from "../components/Home/Hero"
import LatestWork from "../components/Home/LatestWork"
// import ServicesOverview from "../components/Home/ServicesOverview"
import TourPackageOverview from "../components/Home/TourPackageOverview"
import Testimonials from "../components/Home/Testimonials"

const Home = () => {
    return (
        <section>
            <Hero />
            <About />
            {/* <ServicesOverview /> */}
            <TourPackageOverview />
            <LatestWork />
            <Testimonials />
            {/* SEO: Additional structured data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "The MICE Connection Pvt. Ltd.",
                    "url": "https://www.themiceconnection.com",
                    "logo": "https://www.themiceconnection.com/logo.png",
                    "description": "The MICE Connection Pvt. Ltd. is a premium event management and tourism company based in Nepal, specializing in Meetings, Incentives, Conferences, and Exhibitions (MICE). With over a decade of experience, we craft world-class event experiences that blend Nepalese warmth with global precision.",
                    "serviceType": "MICE Event Management and Tourism Services",
                    "knowsAbout": [
                        "Event Planning",
                        "Conference Management",
                        "Incentive Travel Programs",
                        "Exhibition & Trade Show Management",
                        "Corporate Retreats",
                        "Destination Management",
                        "Tourism Promotion",
                        "Cross-Cultural Exchange"
                    ]
                })}
            </script>
        </section>
    )
}

export default Home
