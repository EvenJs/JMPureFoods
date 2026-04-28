import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WhyCard from "../ui/WhyCard";
import data from "../../data/siteData.json";

const { whyPartner } = data.pages.home;

export default function WhyPartner() {
  const items = whyPartner.items;
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
  const next = () => setActive((i) => (i + 1) % items.length);

  const prevIdx = (active - 1 + items.length) % items.length;
  const nextIdx = (active + 1) % items.length;

  return (
    <section className="relative bg-off-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            {whyPartner.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {whyPartner.heading}
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {whyPartner.subtitle}
          </p>
        </div>

        {/* ── Desktop carousel ── */}
        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="
                shrink-0 z-10 w-10 h-10 rounded-full
                bg-white border border-gray-200 shadow-sm
                flex items-center justify-center
                hover:bg-brand hover:text-white hover:border-brand
                transition-colors duration-200 text-text-muted
              "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Cards — centre is 2x wider than sides */}
            <div className="flex-1 flex gap-3 items-center">
              {/* Prev card — half width, clickable */}
              <div className="w-[25%] shrink-0 cursor-pointer" onClick={prev}>
                <WhyCard item={items[prevIdx]} active={false} />
              </div>

              {/* Active card — full remaining width */}
              <div className="flex-1">
                <WhyCard item={items[active]} active={true} />
              </div>

              {/* Next card — half width, clickable */}
              <div className="w-[25%] shrink-0 cursor-pointer" onClick={next}>
                <WhyCard item={items[nextIdx]} active={false} />
              </div>
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next"
              className="
                shrink-0 z-10 w-10 h-10 rounded-full
                bg-white border border-gray-200 shadow-sm
                flex items-center justify-center
                hover:bg-brand hover:text-white hover:border-brand
                transition-colors duration-200 text-text-muted
              "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile carousel — full width single card ── */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
            >
              <WhyCard item={items[active]} active />
            </motion.div>
          </AnimatePresence>

          {/* Mobile arrows */}
          <div className="flex justify-center gap-4 mt-6 px-6">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full bg-white border border-gray-200
                flex items-center justify-center text-text-muted
                hover:bg-brand hover:text-white transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-white border border-gray-200
                flex items-center justify-center text-text-muted
                hover:bg-brand hover:text-white transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to ${i + 1}`}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${i === active ? "w-8 bg-brand" : "w-2 bg-gray-300 hover:bg-gray-400"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
