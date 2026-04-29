import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";

const { packagingCapability } = data.pages.home;

interface PackagingItem {
  label: string;
  size: string;
  image: string;
}

function PackagingCard({ item }: { item: PackagingItem }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 group">
      {/* Image — no box, just the image */}
      <div className="w-full h-40 flex items-end justify-center pb-2">
        {item.image ? (
          <img
            src={item.image}
            alt={item.label}
            className="max-h-full max-w-full object-contain
              transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-24 h-32 bg-gray-100 rounded-lg flex items-center
            justify-center opacity-40"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Label */}
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-text-dark">
          {item.label}
        </span>
        {item.size && (
          <span className="text-xs text-text-muted">{item.size}</span>
        )}
      </div>
    </div>
  );
}

function getGridClass(count: number) {
  const map: Record<number, string> = {
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  };
  return map[count] ?? "md:grid-cols-5";
}

export default function PackagingCapability() {
  const items = packagingCapability.items;
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <SectionHeader
            title={packagingCapability.heading}
            subtitle={packagingCapability.subtitle}
            align="left"
          />
        </div>

        {/* Desktop — items separated by vertical dividers */}
        <StaggerContainer
          className={`
          hidden md:grid ${getGridClass(items.length)}
          divide-x divide-gray-200
        `}
        >
          {items.map((item) => (
            <StaggerItem key={item.label} className="px-6 first:pl-0 last:pr-0">
              <PackagingCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile — 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {items.map((item, index) => {
            const isLastOdd =
              index === items.length - 1 && items.length % 2 !== 0;
            return (
              <div
                key={item.label}
                className={
                  isLastOdd ? "col-span-2 max-w-[50%] mx-auto w-full" : ""
                }
              >
                <PackagingCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
