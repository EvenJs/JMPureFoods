import { Link } from "react-router-dom";
import data from "../../data/siteData.json";

// Type guard — checks if a link is internal (has path) or external (has href)
type InternalLink = { label: string; path: string };
type ExternalLink = { label: string; href: string };
type FooterLink = InternalLink | ExternalLink;

function isInternal(link: FooterLink): link is InternalLink {
  return "path" in link;
}

export default function Footer() {
  const { company, footer } = data;

  return (
    <footer>
      {/* Main footer */}
      <div className="px-6 py-14" style={{ backgroundColor: "#1a3525" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-white text-sm font-bold">JMP</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm tracking-wide">
                  JM PUREFOODS
                </span>
                <span className="text-white/50 text-[10px] tracking-widest uppercase">
                  PTY LTD
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              {footer.tagline}
            </p>
            <div className="text-white/40 text-xs leading-relaxed space-y-1">
              <p>ABN: {company.abn}</p>
              <p>ACN: {company.acn}</p>
              <p>{company.address}</p>
            </div>
          </div>

          {/* Columns 2 & 3 — dynamic */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {(col.links as FooterLink[]).map((link) => (
                  <li key={link.label}>
                    {isInternal(link) ? (
                      <Link
                        to={link.path}
                        className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-4" style={{ backgroundColor: "#112a1a" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">{footer.legal}</p>
          <p className="text-white/30 text-xs">{footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
