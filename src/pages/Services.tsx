import { motion } from "framer-motion";
import { Recycle, Scissors, Truck, Building, Package, Scale, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import scrap1 from "@/assets/scrap-1.jpg";
import scrap2 from "@/assets/scrap-2.jpg";

const services = [
  {
    icon: Recycle,
    title: "Scrap Metal Commodity Purchases",
    description: "We purchase ferrous and non-ferrous scrap metal and other commodities destined for the dump. Turn your industrial waste into value with our competitive pricing and efficient collection services.",
    features: ["Ferrous Metals (Iron, Steel)", "Non-Ferrous Metals (Copper, Aluminum, Brass)", "Industrial Waste", "End-of-Life Equipment"],
  },
  {
    icon: Scissors,
    title: "On-Site Cutting & Sorting",
    description: "We provide professional on-site cutting and sorting services to save you time and hassle. Our mobile equipment comes to your location, handling all the work efficiently.",
    features: ["Mobile Cutting Equipment", "Professional Sorting", "Waste Categorization", "Efficient Processing"],
  },
  {
    icon: Truck,
    title: "Logistics & Collection",
    description: "Full fleet of specialized vehicles for efficient metal waste collection. We provide bin placement and regular collection services across Namibia.",
    features: ["Collection Bins Supply", "Trucks & Tippers", "Crane Services", "Scheduled Pickups"],
  },
  {
    icon: Building,
    title: "Demolition Services",
    description: "Complete demolition solutions with responsible metal recovery and recycling. We handle the entire process from demolition to material recovery.",
    features: ["Structural Demolition", "Metal Recovery", "Site Cleanup", "Responsible Disposal"],
  },
  {
    icon: Package,
    title: "Mobile Press Baling",
    description: "On-site baling services to compress metal waste for efficient transport and storage. Our mobile presses reduce volume and handling costs.",
    features: ["On-Site Baling", "Volume Reduction", "Transport Efficiency", "Cost Savings"],
  },
  {
    icon: Scale,
    title: "Fair Pricing & Weighing",
    description: "Accurate weighing and competitive pricing for all metals. We ensure transparent transactions with certified scales and market-based rates.",
    features: ["Certified Scales", "Market Rates", "Transparent Pricing", "Instant Payment"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28">
        {/* Hero */}
        <section className="hero-gradient py-20 lg:py-28 text-primary-foreground">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                Our Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Complete Scrap Metal Solutions
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                From collection to processing, we handle every aspect of scrap metal management. 
                Partner with Namibia's trusted recycling experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="section-container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                See Our Work
              </h2>
              <p className="text-muted-foreground text-lg">
                Quality materials handled with professional care.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={scrap1}
                alt="Scrap metal materials"
                className="rounded-2xl shadow-xl w-full h-80 object-contain bg-muted"
              />
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={scrap2}
                alt="Metal recycling yard"
                className="rounded-2xl shadow-xl w-full h-80 object-contain bg-muted"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 hero-gradient text-primary-foreground">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Need Our Services?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. We service Windhoek, Swakopmund, and Walvis Bay.
              </p>
              <a href="tel:+264830001011" className="btn-accent inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call +264 83 000 1011
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
