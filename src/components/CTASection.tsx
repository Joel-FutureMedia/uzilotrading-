import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Turn Your Scrap Into Value?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Whether you have scrap metal to sell or need premium charcoal for your business, 
            we are here to help. Contact us today for a free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+264830001011"
              className="btn-accent flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +264 83 000 1011
            </a>
            <a
              href="/contact"
              className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground 
                       hover:bg-primary-foreground hover:text-primary font-semibold py-3 px-8 rounded-full 
                       transition-all duration-300 flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
