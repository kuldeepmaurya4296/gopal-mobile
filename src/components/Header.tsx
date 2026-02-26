import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="bg-gradient-hero">
        <div className="container flex items-center justify-between py-2 sm:py-1.5 text-[11px] sm:text-sm text-primary-foreground">
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="tel:09755533333" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" /> 097555 33333
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gopal+Mobile+MP+Nagar+Bhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <MapPin className="h-3 w-3" /> M.P. Nagar, Bhopal
            </a>
          </div>
          <span className="hidden md:block text-xs opacity-80">Mon-Sat: 10AM - 9PM | Sun: 11AM - 7PM</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-9 w-9 sm:h-11 sm:w-11 rounded-lg bg-gradient-hero flex items-center justify-center shadow-lg"
          >
            <span className="text-primary-foreground font-display font-bold text-base sm:text-xl">G</span>
          </motion.div>
          <div>
            <span className="font-display font-bold text-lg sm:text-xl text-foreground block leading-tight">Gopal Mobile</span>
            <span className="block text-[8px] sm:text-[10px] text-muted-foreground tracking-[0.15em] sm:tracking-widest uppercase font-medium">Your Trusted Mobile Store</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 border-b border-border bg-card shadow-2xl md:hidden z-50 max-h-[80vh] overflow-y-auto"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-4 text-sm font-medium border-b border-border last:border-0 transition-colors ${location.pathname === item.path
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="p-6 bg-muted/30">
              <a
                href="tel:09755533333"
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform"
              >
                <Phone className="h-4 w-4" /> Call 097555 33333
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
