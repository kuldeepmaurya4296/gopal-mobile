import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "How long does a screen replacement take?", a: "Most screen replacements are completed within 1-2 hours depending on the model. For rare models, it may take up to 24 hours if parts need to be arranged." },
  { q: "Do you provide warranty on repairs?", a: "Yes! We provide a 30-day warranty on all repairs covering the same issue. For battery replacements, we offer up to 3 months warranty." },
  { q: "What brands do you repair?", a: "We repair all major brands including Apple, Samsung, Realme, POCO, Vivo, OPPO, Motorola, OnePlus, Xiaomi, and more." },
  { q: "How is the price decided for second-hand phones?", a: "We evaluate the phone's condition, age, battery health, and market value. You get an instant transparent quote with no hidden deductions." },
  { q: "Do you sell accessories for all phone models?", a: "Yes, we stock cases, tempered glass, chargers, earphones, and power banks for almost all popular models. Custom orders are also available." },
  { q: "What are your payment options?", a: "We accept Cash, UPI (GPay, PhonePe, Paytm), Debit/Credit Cards, and EMI options on select purchases." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container py-16 md:py-24">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Quick answers about our services, pricing, and policies.</p>
        </div>
      </ScrollReveal>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:bg-muted/50 transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
