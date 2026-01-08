import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import simplyfoundLogo from "@/assets/simplyfound-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <img src={logo} alt="Uzilo Trading" className="h-28 w-auto bg-background p-3 rounded-lg" />
            <p className="text-background/80 text-sm leading-relaxed">
              Namibia's trusted partner in scrap metal recycling and premium charcoal wholesale.
              Where Vision Meets Value.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Products", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-background/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Scrap Metal Purchases</li>
              <li>On-Site Cutting & Sorting</li>
              <li>Wholesale Charcoal Sales</li>
              <li>Logistics & Collection</li>
              <li>Demolition Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+264830001011" className="text-background/80 hover:text-secondary transition-colors">
                    +264 83 000 1011
                  </a>
                  <br />
                  <a href="tel:+264814001334" className="text-background/80 hover:text-secondary transition-colors">
                    +264 81 400 1334
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a href="mailto:eric.vanzyl@futuremedia.com.na" className="text-background/80 hover:text-secondary transition-colors break-all">
                  eric.vanzyl@futuremedia.com.na
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Swakopmund, Namibia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a 
                  href="https://www.facebook.com/UziloTrading/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Uzilo Trading. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-background text-base font-medium">Powered by</span>
            <a 
              href="https://simplyfound.com.na/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={simplyfoundLogo} 
                alt="SimplyFound" 
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
