import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import SkipLink from './components/SkipLink';
import { RequestModalProvider } from './contexts/RequestModalContext';
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
import SkandyPage from './pages/SkandyPage';
import BungalowPage from './pages/BungalowPage';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import ThanksPage from './pages/ThanksPage';

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
      <RequestModalProvider>
        <GoogleAnalytics />
        <SkipLink />
        <ScrollToTop />
        <div className="font-body text-gray-800 bg-white min-h-screen">
          <Header />
          <main id="main-content" className="w-full bg-white" role="main" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/designs" element={<DesignsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/thanks" element={<ThanksPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/admin" element={<AdminAuthProvider><AdminPage /></AdminAuthProvider>} />
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
              <Route path="/skandy" element={<SkandyPage />} />
              <Route path="/bungalow" element={<BungalowPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </RequestModalProvider>
    </Router>
  );
};

export default App;