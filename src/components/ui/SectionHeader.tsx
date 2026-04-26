import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = light ? "text-white" : "text-text-dark";
  const subtitleColor = light ? "text-white/60" : "text-text-muted";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
    >
      {/* Title */}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${titleColor}`}
      >
        {title}
      </h2>

      {/* Green bar accent */}
      <div className="w-8 h-0.5 bg-gold rounded-full" />

      {/* Optional subtitle */}
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
