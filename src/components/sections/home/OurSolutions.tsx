import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
          {ourSolutions.items.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="
                  flex flex-row
                  border border-gray-100 rounded-2xl
                  shadow-sm hover:shadow-md
                  transition-shadow duration-300
                  overflow-hidden h-full
                "
              >
                {/* Image — left side */}
                <div className="w-48 shrink-0 overflow-hidden bg-off-white">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      width="400"
                      height="300"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-text-muted text-sm">
                        {item.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Body — right side */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  {/* Title */}
                  <h3 className="text-sm font-bold uppercase tracking-widest text-text-dark">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    to={item.cta.path}
                    className="
                      inline-flex items-center gap-1
                      text-sm font-semibold text-brand
                      hover:text-brand-mid
                      transition-colors duration-200
                      group w-fit
                    "
                  >
                    {item.cta.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
