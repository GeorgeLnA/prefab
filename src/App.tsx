import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import SkipLink from './components/SkipLink';
import HomePage from './pages/HomePage';
import DesignsPage from './pages/DesignsPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import HouseDetailPage from './pages/HouseDetailPage';
import LoungePage from './pages/LoungePage';
import SmartPage from './pages/SmartPage';
import SkandyNordyPage from './pages/SkandyNordyPage';
import ModernBPage from './pages/ModernBPage';
import ModernPage from './pages/ModernPage';
import ModularPage from './pages/ModularPage';
import DesignFormPage from './pages/DesignFormPage';
import TechnologyPage from './pages/TechnologyPage';
import MobilePage from './pages/MobilePage';
import BungalowPage from './pages/BungalowPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <SkipLink />
      <ScrollToTop />
      <div className="font-body text-gray-800 bg-white min-h-screen">
        <Header />
        <main id="main-content" className="max-w-[1920px] mx-auto bg-white" role="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/house/:slug" element={<HouseDetailPage />} />
            <Route path="/lounge" element={<LoungePage />} />
            <Route path="/smart" element={<SmartPage />} />
            <Route path="/skandy-nordy" element={<SkandyNordyPage />} />
            <Route path="/modern-b" element={<ModernBPage />} />
            <Route path="/modern" element={<ModernPage />} />
            <Route path="/modular" element={<ModularPage />} />
            <Route path="/design-form" element={<DesignFormPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/mobile" element={<MobilePage />} />
            <Route path="/bungalow" element={<BungalowPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;