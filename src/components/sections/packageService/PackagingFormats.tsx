import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";
import type { JSX } from "react";
import { GiOilDrum } from "react-icons/gi";

const { packagingFormats } = data.pages.services;

const formatIcons: Record<string, JSX.Element> = {
  "Glass Bottles": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2h6M10 2v3.5a4 4 0 00-4 4V20a2 2 0 002 2h8a2 2 0 002-2V9.5a4 4 0 00-4-4V2" />
      <line x1="6" y1="13" x2="18" y2="13" />
    </svg>
  ),
  "PET Bottles": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2h6M10 2v3.5a4 4 0 00-4 4V20a2 2 0 002 2h8a2 2 0 002-2V9.5a4 4 0 00-4-4V2" />
    </svg>
  ),
  "Tin Drums": <GiOilDrum size={22} />,
};

export default function PackagingFormats() {
  return (
    <section className="bg-off-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xl font-extrabold uppercase tracking-widest text-brand mb-3">
            {packagingFormats.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">
            {packagingFormats.heading}
          </h2>
          <div className="w-8 h-0.5 bg-gold rounded-full mx-auto mb-4" />
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {packagingFormats.subtitle}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packagingFormats.items.map((item) => (
            <StaggerItem key={item.title}>
              <div
                className="bg-white rounded-2xl overflow-hidden border border-gray-100
                shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="h-56 bg-off-white overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-6"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-text-muted text-sm">
                        {item.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-3">
                  {/* Icon + title */}
                  <div className="flex flex-col items-center text-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full border border-brand/30
                      flex items-center justify-center text-brand bg-green-300/20"
                    >
                      <div
                        className="w-10 h-10 rounded-full border border-brand/30
  flex items-center justify-center text-brand"
                      >
                        {formatIcons[item.title] ??
                          formatIcons["Glass Bottles"]}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-text-dark">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {item.description}
                    </p>
                  </div>

                  {/* Size tags */}
                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    {item.sizes.map((size) => (
                      <span
                        key={size}
                        className="text-xs px-3 py-1 rounded-full
                          border border-gray-200 text-text-muted bg-off-white"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
