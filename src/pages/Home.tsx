import About from "../components/Home/About"
import Hero from "../components/Home/Hero"
import LatestWork from "../components/Home/LatestWork"
import ServicesOverview from "../components/Home/ServicesOverview"
import TourPackageOverview from "../components/Home/TourPackageOverview"
import Testimonials from "../components/Home/Testimonials"

const Home = () => {
    return (
        <section>
            <Hero />
            <About />
            <ServicesOverview />
            <TourPackageOverview />
            <LatestWork />
            <Testimonials />
        </section>
    )
}

export default Home