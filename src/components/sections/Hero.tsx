import { motion } from "framer-motion";
import { ButtonLink } from "../ui/Button";
// import heroBg from "../../assets/images/hero-bg.jpg";
import data from "../../data/siteData.json";

const { hero } = data.pages.home;

export default function Hero() {
  return (
    <section className="relative min-h-[560px] md:min-h-[680px] flex items-center overflow-hidden">
      {/* Full-width background image — both mobile and desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.pages.home.hero.image})` }}
      />

      {/* Overlay — lighter on right so image shows through, stronger on left for text */}
      <div
        className="absolute 
      "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div
          className="
          w-full
          md:w-[50%]
          lg:w-[45%]
          xl:w-[40%]
        "
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            className="text-4xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight mb-4"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="text-base text-text-muted leading-relaxed mb-8"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <ButtonLink to={hero.cta.path} variant="gold" size="lg">
              {hero.cta.label}
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline-gold" size="lg">
              Get a Quote
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
