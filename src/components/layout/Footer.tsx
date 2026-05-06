import { useState } from "react";
import { Link } from "react-router-dom";
import { MdPhone, MdEmail, MdLocationOn, MdBusiness } from "react-icons/md";

import data from "@/data/siteData.json";

const { company, footer } = data;

function FooterAccordion({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; path?: string; href?: string }[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between px-4 py-3
          text-white font-semibold text-sm text-left w-full"
      >
        {heading}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
      {open && (
        <div className="flex flex-col px-4 pb-4 gap-3 border-t border-white/10 pt-3">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path ?? link.href ?? "/"}
              className="text-white/70 text-sm hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="bg-bottom bg-cover"
      style={{ backgroundImage: `url(${footer.image})` }}
    >
      {/* Outer dark padding area */}
      <div className="px-4 md:px-8 pt-6 pb-0">
        {/* Inner rounded card with wave bg */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient overlay — left side darker for text readability */}
          <div className="absolute inset-0 bg-footer/80" />

          {/* ── Desktop layout ── */}
          <div
            className="relative z-10 hidden md:grid grid-cols-3 gap-12
            px-12 py-12"
          >
            {/* Column 1 — Brand */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-white/15 rounded-md flex items-center
                  justify-center shrink-0"
                >
                  <span className="text-white text-sm font-bold">JMP</span>
                </div>
                <div className="flex flex-col leading-none gap-0.5">
                  <span className="text-white font-bold text-sm tracking-widest uppercase">
                    JM PUREFOODS
                  </span>
                  <span className="text-white/60 text-[10px] tracking-widest uppercase">
                    PTY LTD
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white/80 text-sm">ABN: {company.abn}</p>
                <p className="text-white/80 text-sm">Melbourne, Australia</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-white/80 text-sm hover:text-white
                    transition-colors duration-200"
                >
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="text-white/80 text-sm hover:text-white
                    transition-colors duration-200"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {footer.columns[0].links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={"path" in link ? link.path : "/"}
                      className="text-gray-300 text-sm hover:text-white
                        transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {footer.columns[1].links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={"path" in link ? link.path : "/"}
                      className="text-gray-300 text-sm hover:text-white
                        transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Mobile layout ── */}
          <div className="relative z-10 md:hidden flex flex-col gap-4 px-5 py-8">
            {/* Brand card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-white/15 rounded-md flex items-center
                  justify-center shrink-0"
                >
                  <span className="text-white text-sm font-bold">JMP</span>
                </div>
                <div className="flex flex-col leading-none gap-0.5">
                  <span className="text-white font-bold text-sm tracking-widest uppercase">
                    JM PUREFOODS
                  </span>
                  <span className="text-white/60 text-[10px] tracking-widest uppercase">
                    PTY LTD
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 border-t border-white/10 pt-3">
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <MdBusiness size={16} className="shrink-0 text-white/50" />
                  <span>ABN: {company.abn}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <MdLocationOn size={16} className="shrink-0 text-white/50" />
                  <span>Location, Australia</span>
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-white/80 text-sm
                    hover:text-white transition-colors duration-200"
                >
                  <MdEmail size={16} className="shrink-0 text-white/50" />
                  <span>{company.email}</span>
                </a>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-white/80 text-sm
                    hover:text-white transition-colors duration-200"
                >
                  <MdPhone size={16} className="shrink-0 text-white/50" />
                  <span>{company.phone}</span>
                </a>
              </div>
            </div>

            <FooterAccordion
              heading="Quick Links"
              links={
                footer.columns[0].links as { label: string; path?: string }[]
              }
            />
            <FooterAccordion
              heading="Services"
              links={
                footer.columns[1].links as { label: string; path?: string }[]
              }
            />
          </div>
        </div>
      </div>

      {/* Bottom bar — outside the card */}
      <div className="px-4 md:px-8 py-4">
        <div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row
          items-center justify-between gap-2"
        >
          <p className="text-white text-xs">{footer.legal}</p>
          <p className="text-white text-xs">{footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
