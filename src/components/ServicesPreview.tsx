import { motion } from "framer-motion";
import { Recycle, Scissors, Flame, Truck, Building, Package } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Recycle,
    title: "Scrap Metal Purchases",
    description: "We purchase ferrous and non-ferrous scrap metal, turning your waste into value.",
  },
  {
    icon: Scissors,
    title: "On-Site Cutting & Sorting",
    description: "Professional cutting and sorting services at your location. We bring the equipment to you.",
  },
  {
    icon: Flame,
    title: "Wholesale Charcoal",
    description: "Premium African BBQ charcoal. 100% natural hardwood with minimum 100 bag orders.",
  },
  {
    icon: Truck,
    title: "Logistics & Collection",
    description: "Full fleet of trucks, cranes, and tippers for efficient metal waste collection.",
  },
  {
    icon: Building,
    title: "Demolition Services",
    description: "Complete demolition solutions with responsible metal recovery and recycling.",
  },
  {
    icon: Package,
    title: "Mobile Press Baling",
    description: "On-site baling services to compress metal waste for efficient transport.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Recycling Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From collection to processing, we handle every aspect of scrap metal management across Namibia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-8 shadow-lg card-hover border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
