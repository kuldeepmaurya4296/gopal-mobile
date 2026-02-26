import Layout from "@/components/Layout";
import { Wrench, MonitorSmartphone, Battery, Droplets, Cpu, HardDrive, RefreshCw, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import repairImg from "@/assets/repair-service.jpg";
import secondHandImg from "@/assets/second-hand.jpg";
import SEO from "@/components/SEO";

const repairServices = [
  { icon: MonitorSmartphone, title: "Screen Replacement", desc: "Cracked or broken screen? We replace with OEM-quality displays." },
  { icon: Battery, title: "Battery Replacement", desc: "Restore your phone's battery life with genuine replacement." },
  { icon: Droplets, title: "Water Damage Repair", desc: "Accidental spill? Our experts can recover water-damaged phones." },
  { icon: Cpu, title: "Motherboard Repair", desc: "Advanced chip-level repairs for complex hardware issues." },
  { icon: HardDrive, title: "Software & Data", desc: "OS updates, data recovery, virus removal and more." },
  { icon: Wrench, title: "General Servicing", desc: "Cleaning, button repair, speaker/mic fix and diagnostics." },
];

const Services = () => (
  <Layout>
    <SEO
      title="Services"
      description="Professional mobile repair services in Bhopal — screen replacement, battery change, water damage recovery, motherboard repair. Buy & sell pre-owned phones at Gopal Mobile."
      keywords="mobile repair Bhopal, screen replacement Bhopal, battery replacement Bhopal, water damage repair, second hand phone buy sell Bhopal, Gopal Mobile services"
    />
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={repairImg} alt="Mobile repair" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>
      <div className="relative container py-12 sm:py-16 md:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-background mb-4">Our Services</h1>
        <p className="text-sm sm:text-base text-background/80 max-w-lg mx-auto">
          Professional mobile repair, pre-owned phone trading, and accessories — all under one roof.
        </p>
      </div>
    </section>

    {/* Repair Services */}
    <section className="container py-12 sm:py-16">
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-xs font-semibold text-accent uppercase tracking-widest">Professional Care</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-3">Mobile Repair Services</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">Quick turnaround, genuine parts, and warranty on all repairs.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {repairServices.map((s) => (
          <div key={s.title} className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-hero transition-colors">
              <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Buy & Sell */}
    <section className="bg-muted">
      <div className="container py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-elevated h-60 sm:h-80">
            <img src={secondHandImg} alt="Pre-owned phones" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="h-5 w-5 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">Buy & Sell</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Second Hand Mobiles</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Looking for affordable phones? We offer certified pre-owned devices that are thoroughly tested and verified. Want to sell your old phone? Get instant cash with fair valuation.
            </p>
            <ul className="space-y-2 mb-6">
              {["Thorough quality checks", "Fair price guarantee", "Warranty on select devices", "Instant buy-back"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <ShieldCheck className="h-4 w-4 text-accent" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-accent text-accent-foreground font-semibold hover:scale-105 transition-transform">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
