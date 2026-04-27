import SectionHeader from "../ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../ui/Stagger";
import data from "../../data/siteData.json";
import type { JSX } from "react";

const { whyPartner } = data.pages.home;

function PartnerIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    grid: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    "shield-check": (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    refresh: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
      </svg>
    ),
    users: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    cpu: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    handshake: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l.77.78L12 21l7.65-7.64.77-.78a5.4 5.4 0 000-7.65z" />
      </svg>
    ),
  };

  return (
    // Badge-shaped icon container — matches the design
    <div
      className="
      w-16 h-16
      flex items-center justify-center
      text-brand
      border-2 border-brand
      rounded-[30%]
      shrink-0
    "
    >
      {icons[name] ?? icons["shield-check"]}
    </div>
  );
}

interface Item {
  icon: string;
  title: string;
  description: string;
}

function DesktopCard({ item }: { item: Item }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <PartnerIcon name={item.icon} />
      <div className="flex flex-col gap-2">
        <h3 className="text-xs font-bold uppercase tracking-widest text-text-dark">
          {item.title}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function MobileRow({ item }: { item: Item }) {
  return (
    <div className="flex items-start gap-4">
      <PartnerIcon name={item.icon} />
      <div className="flex flex-col gap-1 pt-1">
        <h3 className="text-sm font-bold uppercase tracking-wide text-text-dark">
          {item.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

// Dynamic column class based on item count
function getColClass(count: number) {
  const map: Record<number, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };
  return map[count] ?? "md:grid-cols-4";
}

export default function WhyPartner() {
  const items = whyPartner.items;
  return (
    <section className="bg-off-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <SectionHeader title={whyPartner.heading} align="center" />
        </div>

        {/* Desktop */}
        <StaggerContainer
          className={`hidden md:grid ${getColClass(items.length)} gap-10`}
        >
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <DesktopCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile */}
        <StaggerContainer className="md:hidden flex flex-col gap-6">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <MobileRow item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
