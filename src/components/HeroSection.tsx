import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Recycle, Truck, Flame } from "lucide-react";
import slider1 from "@/assets/sliders/slider1.jpg";
import slider2 from "@/assets/sliders/slider2.jpg";
import slider3 from "@/assets/sliders/slider3.jpg";
import slider4 from "@/assets/sliders/slider4.jpg";

const textContent = [
  {
    title: "Scrap Metal Recycling",
    description: "We purchase scrap metal and other commodities destined for the dump. Turn your waste into value with Namibia's trusted recycling partner.",
    icon: Recycle,
  },
  {
    title: "On-Site Services",
    description: "Professional cutting, sorting, and baling services at your location. Save time and hassle with our mobile equipment.",
    icon: Truck,
  },
  {
    title: "Premium Charcoal",
    description: "African BBQ charcoal wholesale. 100% natural hardwood charcoal for the perfect braai experience. Minimum order: 100 bags.",
    icon: Flame,
  },
];

const sliderImages = [slider1, slider2, slider3, slider4];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  const CurrentIcon = textContent[currentIndex].icon;

  return (
    <section className="relative min-h-screen pt-28 overflow-hidden">
      {/* Full-screen Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {sliderImages.map((image, idx) => {
            if (idx !== currentSlide) return null;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <motion.img
                  src={image}
                  alt={`Slider ${idx + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 8, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                />
                {/* Dark overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-container w-full py-12 lg:py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block bg-secondary/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold uppercase tracking-wide shadow-lg">
                Where Vision Meets Value
              </span>
            </motion.div>

            {/* Animated Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -30, x: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6 text-white"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-4 bg-secondary/90 backdrop-blur-sm rounded-xl shadow-lg"
                  >
                    <CurrentIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </motion.div>
                  <span className="text-white/90 font-medium text-lg md:text-xl bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(textContent.length).padStart(2, "0")}
                  </span>
                </div>

                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight drop-shadow-2xl"
                  style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
                >
                  {textContent[currentIndex].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-2xl leading-relaxed drop-shadow-lg"
                  style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
                >
                  {textContent[currentIndex].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-2 my-10 max-w-md"
            >
              {textContent.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="relative h-2 flex-1 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden hover:bg-white/30 transition-colors"
                >
                  {currentIndex === idx && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-secondary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}
                  {currentIndex > idx && (
                    <div className="absolute inset-0 bg-secondary" />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Image Slider Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-3 mb-8"
            >
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative h-1 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "bg-secondary w-12" : "bg-white/40 w-8 hover:bg-white/60"
                  }`}
                />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+264830001011"
                className="btn-accent flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="/services"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white 
                         hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-full 
                         transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
