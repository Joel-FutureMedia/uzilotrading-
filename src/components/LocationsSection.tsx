import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    city: "Windhoek",
    region: "Central Namibia",
    description: "Capital city operations serving the central region with full scrap metal services.",
  },
  {
    city: "Swakopmund",
    region: "Coastal Region",
    description: "Our headquarters on the coast. Complete recycling and charcoal wholesale services.",
  },
  {
    city: "Walvis Bay",
    region: "Coastal Region",
    description: "Port city operations with access to export logistics and industrial clients.",
  },
];

const LocationsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            Our Presence
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Serving All of Namibia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            With operations in key cities across Namibia, we bring our services closer to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full card-hover">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {location.city}
                </h3>
                <span className="text-secondary font-medium text-sm">{location.region}</span>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {location.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-primary rounded-2xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-primary-foreground/70 text-sm">Call Us</p>
                <a href="tel:+264830001011" className="text-primary-foreground font-bold text-lg hover:text-secondary transition-colors">
                  +264 83 000 1011
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-primary-foreground/70 text-sm">Working Hours</p>
                <span className="text-primary-foreground font-bold text-lg">Monday - Friday</span>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <a
                href="/contact"
                className="bg-secondary text-secondary-foreground font-semibold py-3 px-8 rounded-full hover:bg-secondary/90 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
