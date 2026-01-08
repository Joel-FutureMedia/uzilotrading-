import { motion } from "framer-motion";
import { Target, Eye, Leaf, Users, Award, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.jpg";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to environmental responsibility through proper recycling and waste management.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients are at the heart of everything we do. We build lasting partnerships based on trust.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We maintain the highest standards in all our services and products, from collection to processing.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep roots in Namibia with operations across key cities, understanding local needs.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28">
        {/* Hero */}
        <section className="hero-gradient py-20 lg:py-28 text-primary-foreground">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                  About Us
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Where Vision Meets Value
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Uzilo Trading is Namibia's trusted partner in scrap metal recycling and premium 
                  charcoal wholesale. We transform waste into value while serving communities 
                  across Windhoek, Swakopmund, and Walvis Bay.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-80 md:w-96 bg-background p-10 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    alt="Uzilo Trading Logo"
                    className="w-full h-auto max-h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted rounded-2xl p-10"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide comprehensive scrap metal management solutions and premium products 
                  that turn waste into value, while promoting environmental sustainability and 
                  supporting Namibia's economy through responsible recycling practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-muted rounded-2xl p-10"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading scrap metal recycling and commodity trading company in Namibia, 
                  recognized for excellence in service, environmental stewardship, and our 
                  contribution to the circular economy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Do
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Uzilo Trading offers total recycling solutions in Namibia. We specialize in the 
                logistics, collection, and processing of ferrous and non-ferrous metal waste. 
                Our services include bin placement, collection with trucks, cranes, and tippers, 
                as well as on-site cutting, demolition, and mobile press baling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                In addition to our recycling operations, we are a proud wholesale supplier of 
                premium African BBQ charcoal. Our natural hardwood charcoal is perfect for braais, 
                restaurants, and commercial use, available with a minimum order of 100 bags.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do at Uzilo Trading.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="py-20 lg:py-28 hero-gradient text-primary-foreground">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Associated with Tyrecycle
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Uzilo Trading works in partnership with Tyrecycle (Scrap Salvage), one of 
                Namibia's major scrap metal producers. This association enables us to offer 
                comprehensive recycling solutions and reach across the country.
              </p>
              <a
                href="/contact"
                className="btn-accent inline-flex items-center gap-2"
              >
                Partner With Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
