import { Link } from "react-router-dom";

import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";

const { ourSolutions } = data.pages.home;

export default function OurSolutions() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <SectionHeader
            title={ourSolutions.heading}
            subtitle={ourSolutions.subtitle}
            align="center"
          />
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ourSolutions.items.map((item, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <StaggerItem key={item.title}>
                <div
                  className="
                  flex 
                  border border-gray-100
                  rounded-2xl
                  shadow-sm hover:shadow-md
                  transition-shadow duration-300
                  overflow-hidden
                  h-full
                "
                >
                  {/* Card image */}
                  <div className="relative h-52 bg-off-white overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`
                        w-full h-full object-cover
                        ${imageOnLeft ? "object-left" : "object-right"}
                      `}
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-6 gap-4">
                    {/* Title */}
                    <h3
                      className="
                      text-lg font-extrabold uppercase tracking-widest
                      text-brand
                    "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-muted leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* Learn More link */}
                    <Link
                      to={item.cta.path}
                      className="
                        inline-flex items-center gap-1
                        text-sm font-semibold text-brand
                        hover:text-brand-mid
                        transition-colors duration-200
                        group
                      "
                    >
                      {item.cta.label}
                      <span
                        className="
                        transition-transform duration-200
                        group-hover:translate-x-1
                      "
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
