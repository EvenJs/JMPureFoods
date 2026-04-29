import { motion } from "framer-motion";

import { ButtonLink } from "@/components/ui/Button";
import data from "@/data/siteData.json";

const { hero } = data.pages.services;

export default function ServicesHero() {
  return (
    <section className="relative min-h-120 md:min-h-135 flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 w-full">
        <div className="max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-4xl md:text-6xl font-bold text-brand leading-tight mb-4"
          >
            {hero.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-black text-2xl leading-relaxed mb-8"
          >
            {hero.subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ButtonLink to={hero.cta.path} variant="gold" size="lg">
              {hero.cta.label}
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
