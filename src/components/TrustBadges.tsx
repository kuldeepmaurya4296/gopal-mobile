import {
    MapPin,
    Star,
    ShieldCheck,
    CreditCard,
    Truck,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const badges = [
    {
        icon: Star,
        label: "4.8★ Google Rating",
        subtext: "500+ Reviews",
    },
    {
        icon: ShieldCheck,
        label: "Authorized Dealer",
        subtext: "All Major Brands",
    },
    {
        icon: MapPin,
        label: "Prime Location",
        subtext: "M.P. Nagar, Bhopal",
    },
    {
        icon: CreditCard,
        label: "Easy EMI Options",
        subtext: "0% Interest Available",
    },
    {
        icon: Truck,
        label: "Home Delivery",
        subtext: "Within Bhopal City",
    },
];

const TrustBadges = () => (
    <section className="border-y border-border bg-card">
        <div className="container py-6 sm:py-10">
            <ScrollReveal>
                <div className="flex overflow-x-auto md:overflow-x-visible md:flex-wrap justify-start md:justify-center gap-x-8 gap-y-5 pb-2 md:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {badges.map((badge) => (
                        <div
                            key={badge.label}
                            className="flex items-center gap-3 group cursor-default shrink-0"
                        >
                            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero group-hover:scale-110 transition-all duration-300">
                                <badge.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-foreground leading-tight">
                                    {badge.label}
                                </p>
                                <p className="text-xs text-muted-foreground">{badge.subtext}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
    </section>
);

export default TrustBadges;
