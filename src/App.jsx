import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reservations from "./components/Reservations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [toast, setToast] = useState({
    show: false,
    title: "",
    message: "",
    type: "success",
  });

  const showToast = (title, message, type = "success") => {
    setToast({ show: true, title, message, type });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(hideToast, 5500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // Setup Scroll Reveal Animations
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-brand-black antialiased relative">
      <Navbar showToast={showToast} />

      <main>
        <Hero showToast={showToast} />
        <About showToast={showToast} />
        <Menu showToast={showToast} />
        <Gallery showToast={showToast} />
        <Reservations showToast={showToast} />
        <Testimonials showToast={showToast} />
        <Contact showToast={showToast} />
      </main>

      <Footer showToast={showToast} />

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 max-w-md w-[90%] sm:w-auto"
          >
            <div className="glass-dark text-brand-cream px-6 py-4 rounded-xl shadow-2xl border-l-4 border-brand-gold flex items-center space-x-4">
              <div className="text-brand-gold text-2xl flex-shrink-0">
                {toast.type === "success" ? (
                  <i className="fa-solid fa-circle-check"></i>
                ) : (
                  <i className="fa-solid fa-circle-info"></i>
                )}
              </div>
              <div className="flex-grow">
                <h4 className="font-serif font-bold text-sm tracking-wide text-brand-gold">
                  {toast.title}
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={hideToast}
                className="text-neutral-400 hover:text-brand-gold transition-colors"
                aria-label="Cerrar notificación"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
