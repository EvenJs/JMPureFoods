import { motion } from "framer-motion";
import data from "../../../data/siteData.json";

export default function AboutHero() {
  const { hero } = data.pages.about;
  return (
    <section className="relative min-h-80 md:min-h-100 flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.image})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            {hero.heading}
          </h1>
          {/* Gold bar */}
          <div className="w-8 h-0.5 bg-gold rounded-full mb-4" />
          <p className="text-white font-semibold text-base mb-2">
            {hero.tagline}
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            {hero.subheading}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
