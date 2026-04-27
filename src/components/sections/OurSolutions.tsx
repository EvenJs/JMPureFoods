import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../ui/Stagger";
import data from "../../data/siteData.json";
// import type { JSX } from "react";

// // Inline SVG icons keyed by icon name from siteData
// function SolutionIcon({ name }: { name: string }) {
//   const icons: Record<string, JSX.Element> = {
//     package: (
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       >
//         <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
//         <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
//         <line x1="12" y1="22.08" x2="12" y2="12" />
//       </svg>
//     ),
//     truck: (
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       >
//         <rect x="1" y="3" width="15" height="13" />
//         <path d="M16 8h4l3 3v5h-7V8z" />
//         <circle cx="5.5" cy="18.5" r="1.5" />
//         <circle cx="18.5" cy="18.5" r="1.5" />
//       </svg>
//     ),
//   };
//   return icons[name] ?? icons["package"];
// }

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
                    {/* Gold icon */}
                    {/* <div
                      className="
                      w-10 h-10 rounded-lg
                      flex items-center justify-center
                      text-gold
                      bg-gold-bg
                    "
                    >
                      <SolutionIcon name={item.icon} />
                    </div> */}

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
