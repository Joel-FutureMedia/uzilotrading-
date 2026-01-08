import { motion } from "framer-motion";
import { Flame, Check, Package, Truck, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import charcoal1 from "@/assets/charcoal-1.jpg";
import charcoal2 from "@/assets/charcoal-2.jpg";
import charcoal3 from "@/assets/charcoal-3.jpg";

const features = [
  {
    title: "100% Natural Hardwood",
    description: "Made from premium African hardwood for authentic flavor and consistent burning.",
  },
  {
    title: "Long Burning Time",
    description: "Extended burn duration means less charcoal needed for your braai or cooking.",
  },
  {
    title: "High Heat Output",
    description: "Reaches optimal cooking temperatures quickly and maintains consistent heat.",
  },
  {
    title: "Low Smoke & Ash",
    description: "Clean burning with minimal smoke and residue for a better cooking experience.",
  },
  {
    title: "Easy to Light",
    description: "Lights quickly and evenly, getting you cooking faster.",
  },
  {
    title: "Eco-Friendly",
    description: "Sustainably sourced and carbon-neutral production process.",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28">
        {/* Hero */}
        <section className="charcoal-gradient py-20 lg:py-28 text-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Flame className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-accent font-semibold uppercase tracking-wide text-sm">
                    Premium Product
                  </span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  African BBQ Charcoal
                </h1>
                <p className="text-xl text-background/80 leading-relaxed mb-8">
                  Experience the authentic taste of Africa with our premium hardwood charcoal. 
                  Perfect for restaurants, caterers, and retailers. Wholesale quantities with 
                  a minimum order of 100 bags.
                </p>
                <a href="tel:+264830001011" className="btn-accent inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Order Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-background/10 rounded-2xl p-4 overflow-hidden"
              >
                <div className="w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src={charcoal3}
                    alt="African BBQ Charcoal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold shadow-lg">
                  Wholesale Only
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Premium Quality Charcoal
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our African BBQ charcoal is produced to the highest standards for consistent quality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Charcoal Products
              </h2>
              <p className="text-muted-foreground text-lg">
                Available in retail stores across Namibia.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl shadow-lg w-full h-64 bg-muted overflow-hidden">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  src={charcoal1}
                  alt="African BBQ Charcoal Display"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl shadow-lg w-full h-64 bg-muted overflow-hidden">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  src={charcoal2}
                  alt="Charcoal Products on Shelf"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl shadow-lg w-full h-64 bg-muted overflow-hidden">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  src={charcoal3}
                  alt="Customer with African BBQ Charcoal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wholesale Info */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Wholesale Orders
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                  We supply charcoal on a wholesale basis with a minimum order of 100 bags. 
                  Perfect for retailers, restaurants, and distributors across Namibia.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-secondary" />
                    <span>Minimum order: 100 bags</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-secondary" />
                    <span>Delivery across Namibia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>Bulk discounts available</span>
                  </li>
                </ul>
                <a href="tel:+264830001011" className="btn-accent inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call to Order
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/10 rounded-2xl p-8"
              >
                <h3 className="font-heading text-xl font-bold mb-4">Contact for Wholesale</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-primary-foreground/70 text-sm mb-1">Phone</p>
                    <a href="tel:+264830001011" className="text-lg font-semibold hover:text-secondary transition-colors">
                      +264 83 000 1011
                    </a>
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm mb-1">Email</p>
                    <a href="mailto:eric.vanzyl@futuremedia.com.na" className="text-lg font-semibold hover:text-secondary transition-colors break-all">
                      eric.vanzyl@futuremedia.com.na
                    </a>
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm mb-1">Location</p>
                    <span className="text-lg font-semibold">Swakopmund, Namibia</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
