import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutPage from './pages/About';
import GalleryPage from './pages/Gallery';
import AboutNepal from './pages/AboutNepal';
import TourPackages from './pages/TourPackages';
import TourPackageDetail from './pages/TourPackageDetail';
import DetailDestination from './pages/DetailDestination';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ContactPage from './pages/Contact';
import MeetingPage from './pages/Meeting';
import IncentivesPage from './pages/Incentives';
import ConferencesPage from './pages/Conferences';
import ExhibitionsPage from './pages/Exhibitions';
import PrivacyPage from './pages/Privacy';
import TermsOfServicePage from './pages/Term';
import EventsPage from './pages/Events';
import EventDetail from './pages/EventDetail';

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-nepal" element={<AboutNepal />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/tour-packages/:slug" element={<TourPackageDetail />} />
          <Route path="/detaildestation/:slug" element={<DetailDestination />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event-detail/:slug" element={<EventDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/meetings" element={<MeetingPage />} />
          <Route path="/services/incentives" element={<IncentivesPage />} />
          <Route path="/services/conferences" element={<ConferencesPage />} />
          <Route path="/services/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App