import Layout from "@/components/Layout";
import { Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const brands = [
  { name: "Apple", tagline: "iPhone series — experience premium innovation", popular: ["iPhone 15", "iPhone 14", "iPhone SE"] },
  { name: "Samsung", tagline: "Galaxy lineup — from flagship to budget-friendly", popular: ["Galaxy S24", "Galaxy A55", "Galaxy M35"] },
  { name: "Realme", tagline: "Performance meets affordability", popular: ["Realme 12 Pro", "Realme Narzo 70", "Realme C67"] },
  { name: "POCO", tagline: "Power-packed devices at unbeatable prices", popular: ["POCO X6 Pro", "POCO M6 Pro", "POCO C65"] },
  { name: "Vivo", tagline: "Camera-centric smartphones for everyone", popular: ["Vivo V30", "Vivo T3", "Vivo Y28"] },
  { name: "OPPO", tagline: "Style and innovation in every phone", popular: ["OPPO Reno 11", "OPPO F25 Pro", "OPPO A79"] },
  { name: "Motorola", tagline: "Pure Android experience with reliability", popular: ["Moto Edge 50", "Moto G85", "Moto G45"] },
  { name: "OnePlus", tagline: "Never settle — flagship performance", popular: ["OnePlus 12", "OnePlus Nord CE4", "OnePlus Nord N30"] },
];

const Products = () => (
  <Layout>
    <SEO
      title="Products & Brands"
      description="Shop the latest smartphones from Apple, Samsung, Realme, POCO, Vivo, OPPO, Motorola, OnePlus and more at Gopal Mobile Bhopal. Authorized dealer with best prices."
      keywords="buy smartphone Bhopal, Apple iPhone Bhopal, Samsung Galaxy Bhopal, Realme POCO Vivo OPPO Motorola OnePlus dealers MP Nagar, mobile phone shop Bhopal"
    />
    {/* Hero */}
    <section className="bg-gradient-hero">
      <div className="container py-12 sm:py-16 md:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Our Brands</h1>
        <p className="text-sm sm:text-base text-primary-foreground/80 max-w-lg mx-auto">
          We stock the latest models from all major smartphone brands. Visit our store to explore, compare and find your perfect phone.
        </p>
      </div>
    </section>

    {/* Brands Grid */}
    <section className="container py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {brands.map((brand, i) => (
          <div
            key={brand.name}
            className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-hero transition-colors">
              <Smartphone className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-1">{brand.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{brand.tagline}</p>
            <div className="space-y-1.5">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Popular Models</p>
              {brand.popular.map((model) => (
                <span key={model} className="inline-block mr-2 mb-1 px-2.5 py-1 rounded-md bg-muted text-xs text-foreground font-medium">
                  {model}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Accessories */}
    <section className="bg-muted">
      <div className="container py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Accessories & More</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-8">
          Cases, screen protectors, chargers, earphones, power banks — we have everything to complement your smartphone.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-semibold hover:scale-105 transition-transform"
        >
          Visit Store for Best Deals <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Products;
