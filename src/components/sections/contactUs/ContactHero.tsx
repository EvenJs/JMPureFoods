import { motion } from "framer-motion";

import data from "@/data/siteData.json";

export default function ContactHero() {
  const { contact } = data.pages;
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#1e4028" }}
    >
      {/* Leaf decoration — left */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-20">
        <svg
          width="180"
          height="220"
          viewBox="0 0 180 220"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 200 Q-20 140 10 80 Q40 20 90 5 Q105 50 95 105 Q85 155 30 200Z"
            fill="#fff"
          />
          <path
            d="M30 200 Q25 150 38 110 Q52 65 90 5"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Oil drop — right */}
      <div className="absolute bottom-0 right-12 pointer-events-none opacity-20">
        <svg
          width="80"
          height="110"
          viewBox="0 0 80 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 5 C40 5 5 50 5 72 C5 92 20 108 40 108 C60 108 75 92 75 72 C75 50 40 5 40 5Z"
            fill="#c8960c"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-xs font-semibold uppercase tracking-widest text-gold mb-4"
        >
          Contact Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
        >
          {contact.hero.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-white/70 text-base leading-relaxed max-w-lg mx-auto"
        >
          {contact.hero.subheading}
        </motion.p>
      </div>
    </section>
  );
}
