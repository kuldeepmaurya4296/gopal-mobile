import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const Contact = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-gradient-hero">
      <div className="container py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80 max-w-lg mx-auto">
          Visit our store or reach out — we're always happy to help!
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-10">
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
                <p className="text-sm text-muted-foreground">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">gopalmobile@email.com</p>
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
        <div className="rounded-2xl overflow-hidden shadow-elevated border border-border h-[500px]">
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
