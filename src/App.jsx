import './App.css'
import { useEffect } from 'react'
import { FaWhatsapp  } from 'react-icons/fa'
import { Route, Routes, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import ExclusiveProducts from './components/ExclusiveProducts.jsx'
import Hero from './components/Hero.jsx'
import Industries from './components/Industries.jsx'
import Navbar from './components/Navbar.jsx'
import Services from './components/Services.jsx'
import Specialization from './components/Specialization.jsx'
import Brands from './components/BrandsAbout.jsx'
import Contact from './components/Contact.jsx'
import Info from './components/Info.jsx'
import Footer from './components/Footer.jsx'
import MouseGlow from './components/MouseGlow.jsx'
import AboutPage from './pages/AboutPage.jsx'

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');
    const target = document.getElementById(id);

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location]);

  return null;
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Brands />
      <ExclusiveProducts />
      <Services />
      <Specialization />
      <Industries />
      <Contact />
    </main>
  )
}

function App() {
  const location = useLocation();

  return (
    <>
      <MouseGlow />
      <Info />
      <Navbar />
      <ScrollToHash />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <a
        href="https://wa.me/919894571542?text=Hello%20Smartfix%20Automation%2C%20I%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] sm:bottom-18 sm:right-8"
      >
        <FaWhatsapp  size={28} strokeWidth={2.2} />
      </a>
      <Footer />
    </>
  )
}

export default App
