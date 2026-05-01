import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import data from "@/data/siteData.json";

const { whatWeDo } = data.pages.foodService;

interface Slide {
  image: string;
  title: string;
  description: string;
}

const variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
  }),
};

function ActiveSlide({ slide }: { slide: Slide }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white h-full flex flex-col">
      <div className="h-64 overflow-hidden shrink-0">
        {slide.image ? (
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-xs text-text-muted">{slide.title}</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="text-sm font-semibold text-text-dark">{slide.title}</h3>
        <p className="text-xs text-text-muted leading-relaxed">
          {slide.description}
        </p>
      </div>
    </div>
  );
}

function SideSlide({ slide }: { slide: Slide }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white h-full flex flex-col">
      <div className="h-64 overflow-hidden shrink-0">
        {slide.image ? (
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>
      {/* Empty flex-1 to match ActiveSlide height */}
      <div className="flex-1" />
    </div>
  );
}

export default function WhatWeDo() {
  const slides = whatWeDo.slides;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    const total = slides.length;

    // wrap forward: last → first
    if (active === total - 1 && index === 0) {
      setDirection(1);
    }
    // wrap backward: first → last
    else if (active === 0 && index === total - 1) {
      setDirection(-1);
    }
    // normal
    else {
      setDirection(index > active ? 1 : -1);
    }

    setActive(index);
  };

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  const prevIdx = (active - 1 + slides.length) % slides.length;
  const nextIdx = (active + 1) % slides.length;

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left panel */}
          <div className="md:w-56 shrink-0 flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              {whatWeDo.label}
            </p>
            <h2 className="text-2xl font-bold text-text-dark leading-snug">
              {whatWeDo.heading}
            </h2>
            <div className="w-8 h-0.5 bg-gold rounded-full" />
            <p className="text-sm text-text-muted leading-relaxed">
              {whatWeDo.description}
            </p>
            <ButtonLink to={whatWeDo.cta.path} variant="outline-gold" size="sm">
              {whatWeDo.cta.label} →
            </ButtonLink>
          </div>

          {/* Carousel */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* Desktop — prev | active | next */}
            <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] gap-3 items-stretch">
              {/* Prev — arrow overlaid */}
              <div className="relative cursor-pointer h-full" onClick={prev}>
                <SideSlide slide={slides[prevIdx]} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                    w-9 h-9 rounded-full
                    bg-white/80 border border-gray-200
                    flex items-center justify-center
                    text-text-muted shadow-sm
                  "
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Active — animated */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="w-full h-full"
                  >
                    <ActiveSlide slide={slides[active]} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next — arrow overlaid */}
              <div className="relative cursor-pointer h-full" onClick={next}>
                <SideSlide slide={slides[nextIdx]} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white/80 border border-gray-200 flex items-center justify-center text-text-muted shadow-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile — single card */}
            <div className="md:hidden relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <ActiveSlide slide={slides[active]} />
                </motion.div>
              </AnimatePresence>

              {/* Mobile arrows */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-text-muted hover:bg-brand hover:text-white hover:border-brand transition-colors duration-200"
                >
                  <svg
                    width="14"
                    height="14"
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
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-text-muted hover:bg-brand hover:text-white hover:border-brand transition-colors duration-200"
                >
                  <svg
                    width="14"
                    height="14"
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

            {/* Dots — centred under active card */}
            <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] gap-3">
              <div />
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`
                        h-2 rounded-full transition-all duration-300
                        ${
                          i === active
                            ? "w-6 bg-brand"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
              <div />
            </div>

            {/* Mobile dots */}
            <div className="md:hidden flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${
                      i === active
                        ? "w-6 bg-brand"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
