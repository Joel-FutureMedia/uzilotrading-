import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, Check } from "lucide-react";
import charcoal1 from "@/assets/charcoal-1.jpg";
import charcoal2 from "@/assets/charcoal-2.jpg";
import charcoal3 from "@/assets/charcoal-3.jpg";

const features = [
  "100% Natural Hardwood",
  "Long Burning Time",
  "High Heat Output",
  "Minimum 100 Bag Orders",
  "Bulk Discounts Available",
  "Delivery Across Namibia",
];

const ProductsPreview = () => {
  return (
    <section className="py-20 lg:py-28 charcoal-gradient text-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              African BBQ Charcoal
            </h2>

            <p className="text-background/80 text-lg leading-relaxed mb-8">
              Experience the authentic taste of Africa with our premium hardwood charcoal. 
              Perfect for braais, restaurants, and commercial use. We supply wholesale 
              quantities with reliable delivery across Namibia.
            </p>

            <ul className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-secondary-foreground" />
                  </div>
                  <span className="text-background/90">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/products" className="btn-accent inline-flex items-center gap-2">
              View Products
            </Link>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={charcoal1}
                  alt="African BBQ Charcoal"
                  className="rounded-2xl shadow-2xl w-full h-48 object-contain bg-background/10"
                />
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={charcoal2}
                  alt="Charcoal Products"
                  className="rounded-2xl shadow-2xl w-full h-64 object-contain bg-background/10"
                />
              </div>
              <div className="pt-8">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={charcoal3}
                  alt="African BBQ Charcoal in use"
                  className="rounded-2xl shadow-2xl w-full h-80 object-contain bg-background/10"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
