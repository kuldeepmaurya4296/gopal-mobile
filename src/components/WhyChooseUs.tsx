import {
    ShieldCheck,
    Zap,
    ThumbsUp,
    Clock,
    BadgeCheck,
    Headphones,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
    {
        icon: ShieldCheck,
        title: "Genuine Products",
        desc: "100% authentic products from authorized distributors with manufacturer warranty.",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: Zap,
        title: "Quick Repairs",
        desc: "Most repairs completed within 1-2 hours. Fast turnaround so you're never without your phone.",
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: ThumbsUp,
        title: "Best Prices",
        desc: "Competitive pricing across all brands. Price match guarantee on new smartphones.",
        color: "from-emerald-500 to-green-600",
    },
    {
        icon: Clock,
        title: "10+ Years Experience",
        desc: "Over a decade of serving Bhopal with reliable mobile solutions and trusted service.",
        color: "from-purple-500 to-violet-600",
    },
    {
        icon: BadgeCheck,
        title: "Warranty on Repairs",
        desc: "All repairs come with a 30-day warranty. Battery replacements covered for up to 3 months.",
        color: "from-rose-500 to-pink-600",
    },
    {
        icon: Headphones,
        title: "Expert Support",
        desc: "Trained technicians and helpful staff to guide you with the right choice every time.",
        color: "from-cyan-500 to-teal-600",
    },
];

const WhyChooseUs = () => (
    <section className="container py-12 sm:py-16 md:py-24">
        <ScrollReveal>
            <div className="text-center mb-14">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                    Why Gopal Mobile
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-3">
                    Why Customers Choose Us
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Trusted by thousands of customers in Bhopal for quality products,
                    expert service, and unbeatable value.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
                <ScrollReveal key={r.title} delay={i * 100}>
                    <div className="group relative h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        {/* Gradient glow on hover */}
                        <div
                            className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                        />

                        <div
                            className={`relative h-12 w-12 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-4 shadow-lg`}
                        >
                            <r.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="relative font-display font-semibold text-lg text-foreground mb-2">
                            {r.title}
                        </h3>
                        <p className="relative text-sm text-muted-foreground leading-relaxed">
                            {r.desc}
                        </p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    </section>
);

export default WhyChooseUs;
