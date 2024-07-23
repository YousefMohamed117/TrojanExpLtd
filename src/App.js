import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useIntl } from 'react-intl';

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import ScrollToHashElement from "./components/ScrollToHashElement";
import Home from "./pages/Home";
import About from "./pages/About"; // Example additional page
import Product from "./pages/Product";
import { Footer } from "./components/Footer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.showLoader(); // Show loader on route change
    const timer = setTimeout(() => {
      window.hideLoader(); // Hide loader after a delay
    }, 1000); // Match this with your fade out duration

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [location.pathname]);
  const { locale } = useIntl();
  const isRtl = locale === 'ar'; 
  return (
    <div   className={`app ${isRtl ? 'rtl' : 'ltr'}`}>
      <ScrollTop />
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Example additional route */}
        <Route path="/contact" element={<Contact />} />
        {/* Example additional route */}
        <Route path="/product/:name" element={<Product />} />
        <Route path='*' element={<NotFound />} />
        {/* Example additional route */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
