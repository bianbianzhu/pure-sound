import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Sparkles } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import ProductShowcase from "./ProductShowcase";
import CategoryMenu from "./CategoryMenu";
import LifestyleGrid from "./LifestyleGrid";
import FAQ from "./FAQ";
import Footer from "./Footer";

const ProductDemoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Check if this is the first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedDemo");
    if (!hasVisited) {
      setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasVisitedDemo", "true");
      }, 1000); // Show after 1 second delay
    }
  }, []);

  // Auto-scroll animation that loops infinitely
  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const duration = 10000; // 10 seconds for full scroll
      startTimeRef.current = Date.now();
      
      const animate = () => {
        if (!scrollContainerRef.current) return;

        const currentTime = Date.now();
        const elapsed = currentTime - startTimeRef.current;
        
        // Calculate the actual visual height of the content
        // The content is scaled by 0.25, so we need to calculate the scroll limit based on that
        const contentWrapper = container.firstElementChild;
        if (!contentWrapper) return;
        
        const unscaledContentHeight = contentWrapper.scrollHeight;
        const scaledContentHeight = unscaledContentHeight * 0.25;
        const paddingTop = 48; // Matches the paddingTop in styles
        const totalVisualHeight = paddingTop + scaledContentHeight;
        
        // Calculate max scroll distance
        // We want to scroll until the bottom of the visual content meets the bottom of the viewport
        const maxScroll = Math.max(0, totalVisualHeight - container.clientHeight);

        // Calculate progress (0 to 1)
        let progress = (elapsed % duration) / duration;

        // Smooth easing function
        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        container.scrollTop = maxScroll * easeInOutCubic(progress);

        // Reset when reaching the end to create a loop
        if (elapsed >= duration) {
          startTimeRef.current = Date.now();
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isOpen]);

  const handleRestart = () => {
    startTimeRef.current = Date.now();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const handleReopen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating action button - shows when popup is closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReopen}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#D9281C] to-[#FF4436] text-white rounded-full px-6 py-3 shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2 font-bold"
            aria-label="Open product demo"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm">NEW LOOK!</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Demo popup window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#D9281C]"
            style={{
              width: "20vw",
              minWidth: "280px",
              height: "32vw", // Half of the original height
              maxHeight: "45vh",
            }}
          >
            {/* Eye-catching top banner */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#D9281C] to-[#FF4436] p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-white font-bold text-sm tracking-wide">
                  NEW LOOK!
                </span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="bg-white/30 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-semibold"
                >
                  PREVIEW
                </motion.div>
              </div>
              <div className="flex items-center gap-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleRestart}
                  className="bg-white/20 backdrop-blur-sm text-white rounded-full p-1.5 hover:bg-white/30 transition-colors"
                  aria-label="Restart"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="bg-white/20 backdrop-blur-sm text-white rounded-full p-1.5 hover:bg-white/30 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>

            {/* Scrollable content */}
            <div
              ref={scrollContainerRef}
              className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingTop: "48px", // Account for top banner
              }}
            >
              <div
                className="origin-top-left bg-white"
                style={{
                  transform: "scale(0.25)",
                  transformOrigin: "top left",
                  width: "400%",
                  minHeight: "400%",
                }}
              >
                <div className="min-h-screen bg-white text-black">
                  <Header />
                  <main>
                    <Hero />
                    <Manifesto />
                    <ProductShowcase />
                    <div className="w-full h-24 bg-white border-t border-gray-200"></div>
                    <CategoryMenu />
                    <LifestyleGrid />
                    <div className="w-full h-24 bg-white border-t border-gray-200"></div>
                    <FAQ />
                  </main>
                  <Footer />

                </div>
              </div>
            </div>

            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default ProductDemoPopup;
