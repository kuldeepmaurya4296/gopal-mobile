import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

const ParallaxHero = ({ src, alt, className = "", speed = 0.4 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // As we scroll down (progress 0 to 1), move the background image down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${50 * speed}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={{ y, height: "120%" }}
        className="absolute inset-x-0 -top-[10%] w-full will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-foreground/70" />
    </div>
  );
};

export default ParallaxHero;
