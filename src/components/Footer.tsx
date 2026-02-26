import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">G</span>
            </div>
            <span className="font-display font-bold text-xl">Gopal Mobile</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Your one-stop destination for smartphones, accessories, and expert repair services in Bhopal since years of trusted service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Products & Brands</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Shop no 35, opp. Hongkong Restaurant, Zone-II, M.P. Nagar, Bhopal, MP 462011</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+91 XXXXX XXXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>gopalmobile@email.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Mon-Sat: 10AM-9PM | Sun: 11AM-7PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Gopal Mobile. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
