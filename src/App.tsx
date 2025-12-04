import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
import DesignYourselfPage from './pages/DesignYourselfPage';
import DesignFormPage from './pages/DesignFormPage';
import TechnologyPage from './pages/TechnologyPage';
import SkandyPage from './pages/SkandyPage';
import MobilePage from './pages/MobilePage';
import BungalowPage from './pages/BungalowPage';

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
      <ScrollToTop />
      <div className="font-body text-gray-800">
        <Header />
        <main>
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
            <Route path="/house/:id" element={<HouseDetailPage />} />
            <Route path="/lounge" element={<LoungePage />} />
            <Route path="/smart" element={<SmartPage />} />
            <Route path="/skandy-nordy" element={<SkandyNordyPage />} />
            <Route path="/modern-b" element={<ModernBPage />} />
            <Route path="/modern" element={<ModernPage />} />
            <Route path="/modular" element={<ModularPage />} />
            <Route path="/design-yourself" element={<DesignYourselfPage />} />
            <Route path="/design-form" element={<DesignFormPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/skandy" element={<SkandyPage />} />
            <Route path="/mobile" element={<MobilePage />} />
            <Route path="/bungalow" element={<BungalowPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;