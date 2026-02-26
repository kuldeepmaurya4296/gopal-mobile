import { Link } from "react-router-dom";
import {
  Smartphone,
  Wrench,
  RefreshCw,
  Shield,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
import Layout from "@/components/Layout";
import ParallaxHero from "@/components/ParallaxHero";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustBadges from "@/components/TrustBadges";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";
import repairImg from "@/assets/repair-service.jpg";
import secondHandImg from "@/assets/second-hand.jpg";

const brands = [
  "Apple",
  "Samsung",
  "Realme",
  "POCO",
  "Vivo",
  "OPPO",
  "Motorola",
  "OnePlus",
];

const services = [
  {
    icon: Smartphone,
    title: "New Mobiles",
    desc: "Latest smartphones from top brands at competitive prices",
  },
  {
    icon: Wrench,
    title: "Expert Repairs",
    desc: "Screen, battery, software — we fix it all with genuine parts",
  },
  {
    icon: RefreshCw,
    title: "Buy & Sell Used",
    desc: "Best value on pre-owned phones, fully tested & verified",
  },
  {
    icon: Shield,
    title: "Accessories",
    desc: "Cases, chargers, tempered glass and more for every model",
  },
];

const Index = () => (
  <Layout>
    <SEO
      title="Home"
      description="Gopal Mobile — Bhopal's most trusted mobile store. Buy new smartphones from Apple, Samsung, OnePlus & more. Expert mobile repair, pre-owned phones, and accessories at M.P. Nagar."
      keywords="mobile shop Bhopal, smartphone store Bhopal, mobile repair Bhopal, second hand phones Bhopal, Gopal Mobile, iPhone Bhopal, Samsung Bhopal, phone accessories MP Nagar"
    />

    {/* Hero with Parallax */}
    <section
      id="hero"
      className="relative overflow-hidden min-h-[70vh] md:min-h-[85vh] flex items-center"
    >
      <ParallaxHero src={heroBg} alt="Gopal Mobile Store" />
      <div className="relative container py-16 sm:py-24 md:py-36">
        <div className="max-w-2xl">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold tracking-wide uppercase mb-5 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            ✦ Trusted Mobile Store in Bhopal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-background leading-[1.1] mb-4 sm:mb-6">
            <span
              className="inline-block animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              Your One-Stop
            </span>
            <br />
            <span
              className="inline-block bg-gradient-accent bg-clip-text text-transparent animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              Mobile Destination
            </span>
          </h1>
          <p
            className="text-background/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg animate-fade-in leading-relaxed"
            style={{ animationDelay: "800ms" }}
          >
            From the latest smartphones to expert repairs and pre-owned deals —
            Gopal Mobile has been serving Bhopal with trust and quality.
          </p>
          <div
            className="flex flex-wrap gap-3 animate-fade-in"
            style={{ animationDelay: "1000ms" }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-accent text-accent-foreground font-semibold text-sm sm:text-base transition-all hover:scale-105 hover:shadow-elevated"
            >
              Explore Brands <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-background/10 text-background border border-background/20 font-semibold text-sm sm:text-base backdrop-blur-sm hover:bg-background/20 transition-colors"
            >
              <Phone className="h-4 w-4" /> Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Trust Badges */}
    <TrustBadges />

    {/* Brands Strip */}
    <section className="bg-card border-b border-border">
      <div className="container py-8">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-5 font-semibold">
          Authorized Dealer For
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {brands.map((b) => (
            <span
              key={b}
              className="text-lg font-display font-semibold text-muted-foreground/60 hover:text-primary transition-colors cursor-default"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="container py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-3">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Everything you need for your mobile — under one roof.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 120}>
            <div className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Stats Counter */}
    <StatsCounter />

    {/* Featured sections */}
    <section className="bg-muted">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <ScrollReveal>
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                Professional Service
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
                Expert Mobile Repairs
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our trained technicians handle everything from cracked screens
                to motherboard issues. We use genuine parts and provide warranty
                on all repairs.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Screen Replacement",
                  "Battery Replacement",
                  "Software Issues",
                  "Water Damage Recovery",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Star className="h-4 w-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={repairImg}
                alt="Mobile repair service at Gopal Mobile Bhopal"
                className="w-full h-80 object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollReveal className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={secondHandImg}
                alt="Pre-owned and second hand mobiles at Gopal Mobile"
                className="w-full h-80 object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} className="order-1 md:order-2">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                Smart Savings
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
                Buy & Sell Used Phones
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Looking to upgrade? Trade in your old phone or browse our
                collection of certified pre-owned devices at unbeatable prices.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <WhyChooseUs />

    {/* Testimonials */}
    <TestimonialsSection />

    {/* FAQ */}
    <FAQSection />

    {/* CTA */}
    <section className="bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container py-20 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto mb-8 text-lg">
            Drop by our store at M.P. Nagar, Bhopal for the best deals on
            smartphones and services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform shadow-elevated"
            >
              Get Directions <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:09755533333"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-primary-foreground border border-white/20 font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
