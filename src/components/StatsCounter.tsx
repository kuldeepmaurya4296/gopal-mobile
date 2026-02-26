import { useEffect, useRef, useState } from "react";
import { Users, Smartphone, Wrench, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
    { icon: Users, value: 15000, suffix: "+", label: "Happy Customers" },
    { icon: Smartphone, value: 50, suffix: "+", label: "Brands Available" },
    { icon: Wrench, value: 25000, suffix: "+", label: "Repairs Completed" },
    { icon: Award, value: 10, suffix: "+", label: "Years of Trust" },
];

const AnimatedNumber = ({
    target,
    suffix,
}: {
    target: number;
    suffix: string;
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 2000;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    const formatted =
        count >= 1000
            ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K`
            : count.toString();

    return (
        <span ref={ref}>
            {formatted}
            {suffix}
        </span>
    );
};

const StatsCounter = () => (
    <section className="relative bg-gradient-hero overflow-hidden">
        {/* Decorative floating circles */}
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-white/5 blur-xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-xl" />

        <div className="container py-12 sm:py-16 md:py-20 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                {stats.map((stat, i) => (
                    <ScrollReveal key={stat.label} delay={i * 100}>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center h-11 w-11 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm mb-3 sm:mb-4 group-hover:bg-white/20 transition-colors duration-300">
                                <stat.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                            </div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-xs sm:text-sm text-primary-foreground/70 font-medium tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </section>
);

export default StatsCounter;
