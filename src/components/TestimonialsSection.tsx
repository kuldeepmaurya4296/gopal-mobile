import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
    {
        name: "Rajesh Sharma",
        role: "Business Owner",
        rating: 5,
        text: "Got my iPhone screen replaced at Gopal Mobile. The work was flawless and done within an hour. Genuine parts and very reasonable pricing. Highly recommended!",
    },
    {
        name: "Priya Verma",
        role: "Student",
        rating: 5,
        text: "Bought a certified pre-owned Samsung from here. The phone was in excellent condition and came with warranty. Saved a lot of money compared to buying new!",
    },
    {
        name: "Amit Patel",
        role: "IT Professional",
        rating: 5,
        text: "Best mobile shop in Bhopal, hands down. They have all the latest models and the staff is incredibly knowledgeable. They helped me pick the perfect phone for my needs.",
    },
    {
        name: "Sunita Jain",
        role: "Homemaker",
        rating: 4,
        text: "My phone had a water damage issue and I thought it was gone. The team at Gopal Mobile recovered everything. Very professional service and honest pricing.",
    },
    {
        name: "Karan Malhotra",
        role: "Freelancer",
        rating: 5,
        text: "I've been buying phones and accessories from Gopal Mobile for years now. Their customer service is top-notch and they always have the best deals in town.",
    },
    {
        name: "Neha Gupta",
        role: "Teacher",
        rating: 5,
        text: "Traded in my old phone and got a great deal on a new OnePlus. The process was smooth and transparent. Will definitely come back for future upgrades!",
    },
];

const TestimonialsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
            breakpoints: {
                "(min-width: 768px)": { slidesToScroll: 2 },
                "(min-width: 1024px)": { slidesToScroll: 3 },
            },
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="bg-muted/50 py-12 sm:py-16 md:py-24 overflow-hidden">
            <div className="container">
                <ScrollReveal>
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
                        <div>
                            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                                Customer Love
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-3">
                                What Our Customers Say
                            </h2>
                            <p className="text-muted-foreground max-w-md">
                                Don't just take our word for it — hear from thousands of happy
                                customers across Bhopal.
                            </p>
                        </div>

                        {/* Desktop arrows */}
                        <div className="hidden md:flex items-center gap-2 shrink-0">
                            <button
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                className="h-10 w-10 rounded-full border border-border bg-card shadow-card flex items-center justify-center hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                aria-label="Previous testimonials"
                            >
                                <ChevronLeft className="h-5 w-5 text-foreground" />
                            </button>
                            <button
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                className="h-10 w-10 rounded-full border border-border bg-card shadow-card flex items-center justify-center hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                aria-label="Next testimonials"
                            >
                                <ChevronRight className="h-5 w-5 text-foreground" />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Carousel */}
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex -ml-4">
                        {testimonials.map((t) => (
                            <div
                                key={t.name}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0"
                            >
                                <div className="group relative h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300">
                                    {/* Quote icon */}
                                    <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-4">
                                        {Array.from({ length: 5 }).map((_, si) => (
                                            <Star
                                                key={si}
                                                className={`h-4 w-4 ${si < t.rating
                                                    ? "text-amber-400 fill-amber-400"
                                                    : "text-muted-foreground/30"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Review text */}
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                        "{t.text}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-sm shrink-0">
                                            {t.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-foreground">
                                                {t.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {scrollSnaps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex
                                ? "w-8 bg-primary"
                                : "w-2 bg-primary/20 hover:bg-primary/40"
                                }`}
                            aria-label={`Go to slide group ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
