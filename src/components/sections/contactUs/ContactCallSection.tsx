import { MdPhone } from "react-icons/md";
import {
  LuClock,
  LuMail,
  LuUser,
  LuMessageSquare,
  LuTag,
  LuHeadphones,
  LuShield,
} from "react-icons/lu";
import data from "@/data/siteData.json";

const { company } = data;

export default function ContactCallSection() {
  return (
    <section
      className="relative py-12 px-6 overflow-hidden"
      style={{ backgroundColor: "#1e4028" }}
    >
      {/* Olive leaf decoration — bottom left */}
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-60 w-48">
        <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 260 Q-20 200 10 130 Q40 60 90 20 Q105 60 95 120 Q85 175 30 260Z"
            fill="#2a5c3f"
            opacity="0.6"
          />
          <path
            d="M30 260 Q25 200 38 155 Q52 100 90 20"
            stroke="#1a3d25"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="20" cy="270" r="14" fill="#8ab830" />
          <circle cx="8" cy="252" r="10" fill="#7aa020" />
          <circle cx="35" cy="265" r="10" fill="#8ab830" />
          <circle cx="48" cy="255" r="8" fill="#c8960c" />
        </svg>
      </div>

      {/* Olive leaf decoration — top right */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-40 w-64">
        <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M230 10 Q280 60 250 120 Q220 180 160 190 Q155 150 170 110 Q185 70 230 10Z"
            fill="#2a5c3f"
            opacity="0.5"
          />
          <path
            d="M230 10 Q210 60 200 100 Q188 140 160 190"
            stroke="#1a3d25"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main card */}
        <div className="bg-[#f5f2e8] rounded-3xl overflow-hidden shadow-2xl">
          {/* Card body */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* ── Left panel ── */}
            <div className="p-8 md:p-10 flex flex-col gap-6">
              {/* Label */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">
                  Speak with our team
                </p>
                <div className="w-8 h-0.5 bg-gold rounded-full" />
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-tight">
                Prefer to speak
                <br />
                with us directly?
              </h2>

              {/* Subheading */}
              <p className="text-text-muted text-base leading-relaxed">
                Talk to a real person — no waiting, no hassle.
              </p>

              {/* 3 feature pills */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    icon: <LuUser size={18} />,
                    label: "Real people, ready to help",
                  },
                  {
                    icon: <LuMessageSquare size={18} />,
                    label: "Quick answers to your questions",
                  },
                  {
                    icon: <LuTag size={18} />,
                    label: "Advice on products & solutions",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center gap-2 p-3
                      border border-gray-200 rounded-xl bg-white/60"
                  >
                    <div
                      className="w-10 h-10 rounded-full bg-brand/10
                      flex items-center justify-center text-brand"
                    >
                      {item.icon}
                    </div>
                    <p className="text-xs text-text-muted leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call button */}
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="
                  flex items-center justify-between
                  bg-gold hover:bg-gold-light
                  text-white font-semibold text-base
                  px-6 py-4 rounded-xl
                  transition-colors duration-200
                  group
                "
              >
                <div className="flex items-center gap-3">
                  <MdPhone size={20} />
                  <span>Call Now: {company.phone}</span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>

              {/* Disclaimer */}
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <LuShield size={14} className="shrink-0 text-brand" />
                <span>
                  Your call is important to us. We'll get back to you as soon as
                  possible.
                </span>
              </div>
            </div>

            {/* ── Right panel ── */}
            <div
              className="border-t md:border-t-0 md:border-l border-gray-200
              flex flex-col"
            >
              {/* Call hours */}
              <div className="p-8 md:p-10 flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-brand/10
                    flex items-center justify-center text-brand shrink-0"
                  >
                    <LuClock size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">
                      Call Hours
                    </p>
                    <h3 className="text-xl font-bold text-text-dark leading-snug">
                      Mon – Fri
                      <br />
                      9:00am – 5:00pm (AEST)
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mt-1">
                      Our team is available during these hours to take your
                      call.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 mx-8 md:mx-10" />

              {/* After hours */}
              <div className="p-8 md:p-10 flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-brand/10
                    flex items-center justify-center text-brand shrink-0"
                  >
                    <LuMail size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">
                      After Hours?
                    </p>
                    <h3 className="text-xl font-bold text-text-dark">
                      Send us a message
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mt-1">
                      Leave us a message or send us an email outside of these
                      hours and we'll get back to you next business day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom strip ── */}
          <div
            className="px-8 md:px-10 py-4 flex flex-col sm:flex-row items-center
              justify-center sm:justify-between gap-3"
            style={{ backgroundColor: "#1e4028" }}
          >
            <div className="flex items-center gap-3 text-white">
              <LuHeadphones size={28} className="text-gold shrink-0" />
              <span className="text-sm font-semibold">
                We're here to support your business.
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/20" />
            <p className="text-sm text-white/70">
              Fast responses. Friendly team. Real results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
