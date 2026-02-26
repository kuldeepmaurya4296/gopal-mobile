import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import SEO from "@/components/SEO";

const Contact = () => (
  <Layout>
    <SEO
      title="Contact Us"
      description="Visit Gopal Mobile at Shop No. 35, Zone-II, M.P. Nagar, Bhopal. Call us for queries about smartphones, repairs, and accessories. Open Mon-Sat 10AM-9PM, Sun 11AM-7PM."
      keywords="Gopal Mobile address, mobile shop MP Nagar Bhopal, phone repair near me Bhopal, contact Gopal Mobile, mobile store Bhopal location"
    />
    {/* Hero */}
    <section className="bg-gradient-hero">
      <div className="container py-12 sm:py-16 md:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-sm sm:text-base text-primary-foreground/80 max-w-lg mx-auto">
          Visit our store or reach out — we're always happy to help!
        </p>
      </div>
    </section>

    <section className="container py-12 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Store Address</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Shop no 35, opp. Hongkong Restaurant & Rose Beauty Parlour, Zone-II, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:09755533333" className="text-sm text-muted-foreground hover:text-primary transition-colors">097555 33333</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
                <div className="flex gap-3 mt-1">
                  <a href="https://www.instagram.com/gopalmobile/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                  <a href="https://www.facebook.com/GopalMobile" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                  <a href="https://www.youtube.com/@gopalmobilebhopal" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">YouTube</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                <p className="text-sm text-muted-foreground">Monday - Saturday: 10:00 AM - 9:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: 11:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Gopal+Mobile+MP+Nagar+Bhopal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-semibold hover:scale-105 transition-transform"
          >
            <Navigation className="h-4 w-4" /> Open in Google Maps
          </a>
        </div>

        {/* Map Embed */}
        <div className="rounded-2xl overflow-hidden shadow-elevated border border-border h-[300px] sm:h-[400px] md:h-[500px]">
          <iframe
            title="Gopal Mobile Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2!2d77.43!3d23.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzQ4LjAiTiA3N8KwMjUnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
