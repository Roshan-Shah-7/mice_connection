import { useState, useEffect, Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Loader from './components/common/Loader';
import ScrollToTop from './components/common/ScrollToTop';

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import('./pages/About'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const AboutNepal = lazy(() => import('./pages/AboutNepal'));
const TourPackages = lazy(() => import('./pages/TourPackages'));
const TourPackageDetail = lazy(() => import('./pages/TourPackageDetail'));
const DetailDestination = lazy(() => import('./pages/DetailDestination'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const ContactPage = lazy(() => import('./pages/Contact'));
const MeetingPage = lazy(() => import('./pages/Meeting'));
const IncentivesPage = lazy(() => import('./pages/Incentives'));
const ConferencesPage = lazy(() => import('./pages/Conferences'));
const ExhibitionsPage = lazy(() => import('./pages/Exhibitions'));
const PrivacyPage = lazy(() => import('./pages/Privacy'));
const TermsOfServicePage = lazy(() => import('./pages/Term'));
const EventsPage = lazy(() => import('./pages/Events'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
// const InternationalTours = lazy(() => import('./pages/InternationalTours'));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [loaderAnimationComplete, setLoaderAnimationComplete] = useState(false);

  useEffect(() => {
    // This effect ensures the main content fades in after the loader is gone.
    if (!loading && loaderAnimationComplete) {
      // Short delay to ensure loader is fully faded out before content fades in
      const timer = setTimeout(() => setContentVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loading, loaderAnimationComplete]);

  return (
    <Router>
      <ScrollToTop />
      {loading && <Loader onLoaded={() => setLoading(false)} onAnimationComplete={() => setLoaderAnimationComplete(true)} />}
      <main className={`transition-opacity duration-700 ${contentVisible ? 'opacity-100 block' : 'opacity-0 overflow-hidden hidden'}`}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={loaderAnimationComplete ? <Home /> : null} />
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
        </Suspense>
        <Footer />
      </main>
    </Router>
  )
}

export default App


App


