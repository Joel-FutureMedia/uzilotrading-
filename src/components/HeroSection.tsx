import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Recycle, Truck, Flame } from "lucide-react";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";

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

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [video1, video2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 15000);
    return () => clearInterval(videoInterval);
  }, []);

  const CurrentIcon = textContent[currentIndex].icon;

  return (
    // Increased pt for larger header
    <section className="relative min-h-screen pt-28 overflow-hidden hero-gradient">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Video Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="video-box aspect-video bg-foreground/10">
              <video
                key={videos[currentVideo]}
                src={videos[currentVideo]}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              
              {/* Video Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {videos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideo(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentVideo === idx ? "bg-secondary w-6" : "bg-background/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Animated Text Content */}
          <div className="order-1 lg:order-2 text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Namibia's Trusted Partner
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/20 rounded-xl">
                    <CurrentIcon className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="text-secondary font-medium">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(textContent.length).padStart(2, "0")}
                  </span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {textContent[currentIndex].title}
                </h1>

                <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
                  {textContent[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="flex gap-2 my-8">
              {textContent.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="relative h-1 flex-1 bg-primary-foreground/20 rounded-full overflow-hidden"
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
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+264830001011"
                className="btn-accent flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="/services"
                className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground 
                         hover:bg-primary-foreground hover:text-primary font-semibold py-3 px-8 rounded-full 
                         transition-all duration-300 flex items-center gap-2"
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
