import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Recycle, Truck, Flame } from "lucide-react";
import slider1 from "@/assets/sliders/slider1.jpg";
import slider4 from "@/assets/sliders/slider4.jpg";
import onsite from "@/assets/sliders/onsite.jpg";

const sliderContent = [
  {
    id: 0,
    title: "Scrap Metal Recycling",
    description: "We purchase scrap metal and other commodities destined for the dump. Turn your waste into value with Namibia's trusted recycling partner.",
    icon: Recycle,
    image: slider4,
  },
  {
    id: 1,
    title: "On-Site Services",
    description: "Professional cutting, sorting, and baling services at your location. Save time and hassle with our mobile equipment.",
    icon: Truck,
    image: onsite,
  },
  {
    id: 2,
    title: "Premium Charcoal",
    description: "African BBQ charcoal wholesale. 100% natural hardwood charcoal for the perfect braai experience. Minimum order: 100 bags.",
    icon: Flame,
    image: slider1,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const currentContent = sliderContent[currentSlide];
  const CurrentIcon = currentContent.icon;

  return (
    <section id="hero" className="relative min-h-screen pt-28 overflow-hidden">
      {/* Full-screen Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.4, 0, 0.2, 1] // Optimized easing for smooth performance
            }}
            className="absolute inset-0 will-change-[opacity]"
          >
            <motion.img
              src={currentContent.image}
              alt={currentContent.title}
              className="w-full h-full object-cover will-change-transform"
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ 
                duration: 10, 
                ease: "linear", 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
            {/* Dark overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-container w-full py-12 lg:py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`badge-${currentSlide}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.1
                }}
                className="mb-8 will-change-[opacity,transform]"
              >
                <span className="inline-block bg-secondary/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold uppercase tracking-wide shadow-lg">
                  Where Vision Meets Value
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Animated Text Content */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="space-y-6 text-white min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col justify-between will-change-[opacity,transform]"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      key={`icon-${currentSlide}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.1
                      }}
                      className="p-4 bg-secondary/90 backdrop-blur-sm rounded-xl shadow-lg will-change-[opacity,transform]"
                    >
                      <CurrentIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </motion.div>
                    <motion.span
                      key={`counter-${currentSlide}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-white/90 font-medium text-lg md:text-xl bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg will-change-opacity"
                    >
                      {String(currentSlide + 1).padStart(2, "0")} / {String(sliderContent.length).padStart(2, "0")}
                    </motion.span>
                  </div>

                  <motion.h1
                    key={`title-${currentSlide}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.15
                    }}
                    className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight drop-shadow-2xl mb-6 will-change-[opacity,transform]"
                    style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.7)" }}
                  >
                    {currentContent.title}
                  </motion.h1>

                  <motion.p
                    key={`description-${currentSlide}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.2
                    }}
                    className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-2xl leading-relaxed drop-shadow-lg will-change-[opacity,transform]"
                    style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}
                  >
                    {currentContent.description}
                  </motion.p>
                </div>

                {/* Progress Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex gap-2 max-w-md mt-6"
                >
                  {sliderContent.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className="relative h-2 flex-1 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      {currentSlide === idx && (
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-secondary"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 6, ease: "linear" }}
                        />
                      )}
                      {currentSlide > idx && (
                        <div className="absolute inset-0 bg-secondary" />
                      )}
                    </button>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4 mt-6"
                >
                  <Link
                    to="/contact"
                    className="btn-accent flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
