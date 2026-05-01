import { MdRestaurant } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdOutlineHotel } from "react-icons/md";
import { MdOutlineKitchen } from "react-icons/md";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";
import type { JSX } from "react";

const { applicationScenarios } = data.pages.foodService;

const iconMap: Record<string, JSX.Element> = {
  restaurant: <MdRestaurant size={28} />,
  catering: <IoRestaurantOutline size={28} />,
  hotel: <MdOutlineHotel size={28} />,
  kitchen: <MdOutlineKitchen size={28} />,
};

export default function ApplicationScenarios() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-text-dark">
            {applicationScenarios.heading}
          </h2>

          {/* ——🌿—— */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gold rounded-full" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 8C8 10 5.9 16.17 3.82 19.34a1 1 0 00.95 1.55c4-.68 8.58-2.78 11.18-8.89"
                fill="#2a5c3f"
                opacity="0.8"
              />
              <path
                d="M22 2s-7 0-11 6c-2.15 3.58-2.77 7.5-3 9a15.06 15.06 0 006-3"
                fill="#2a5c3f"
              />
            </svg>
            <div className="w-8 h-0.5 bg-gold rounded-full" />
          </div>
        </div>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {applicationScenarios.items.map((item) => (
            <StaggerItem key={item.title}>
              <div
                className="
                relative rounded-2xl overflow-hidden
                h-56 md:h-72
                group cursor-pointer
              "
              >
                {/* Background image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      absolute inset-0 w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <div className="absolute inset-0 bg-brand/40" />
                )}

                {/* Dark overlay */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/30 to-black/20
                  group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10
                  transition-all duration-300
                "
                />

                {/* Content */}
                <div
                  className="
                  absolute inset-0
                  flex flex-col items-center justify-center
                  text-white text-center px-4 gap-3
                "
                >
                  {/* Icon circle */}
                  <div
                    className="
                    w-12 h-12 rounded-full
                    border border-white/60
                    flex items-center justify-center
                    bg-white/10 backdrop-blur-sm
                    mb-1
                  "
                  >
                    {iconMap[item.icon] ?? <MdRestaurant size={24} />}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
