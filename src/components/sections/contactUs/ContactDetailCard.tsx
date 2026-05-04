import type { JSX } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const detailIcons: Record<string, JSX.Element> = {
  phone: <MdPhone size={20} />,
  mail: <MdEmail size={20} />,
  "map-pin": <MdLocationOn size={20} />,
};

export default function DetailCard({
  item,
}: {
  item: { icon: string; label: string; value: string; href: string };
}) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        flex flex-col items-center text-center gap-3 p-6
        bg-white rounded-2xl border border-gray-100
        shadow-sm hover:shadow-md
        transition-shadow duration-300 group
      "
    >
      {/* Icon circle */}
      <div
        className="
        w-12 h-12 rounded-full bg-brand/10
        flex items-center justify-center
        text-brand group-hover:bg-brand group-hover:text-white
        transition-colors duration-300
      "
      >
        {detailIcons[item.icon]}
      </div>

      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
        {item.label}
      </p>

      {/* Value */}
      <p className="text-sm font-medium text-text-dark leading-relaxed">
        {item.value}
      </p>
    </a>
  );
}
