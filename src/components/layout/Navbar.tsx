import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonLink } from "../ui/Button";
import NavDrawer from "./NavDrawer";
import data from "../../data/siteData.json";
// import logo from "../../assets/images/Logo1.png";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 bg-white transition-shadow duration-300
          ${scrolled ? "shadow-md" : "shadow-none"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-20 h-full items-center justify-center">
              <img src={data.company.logo} alt="Logo" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-brand font-bold text-sm tracking-wide">
                JM PUREFOODS
              </span>
              <span className="text-text-muted text-[10px] tracking-widest uppercase">
                PTY LTD
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {data.navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    text-xs font-medium uppercase tracking-widest
                    transition-colors duration-200
                    ${
                      isActive
                        ? "text-brand border-b-2 border-brand pb-0.5"
                        : "text-text-muted hover:text-brand"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <ButtonLink to="/contact" variant="gold" size="sm">
              Get a Quote
            </ButtonLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-brand" />
            <span className="block w-5 h-0.5 bg-brand" />
            <span className="block w-5 h-0.5 bg-brand" />
          </button>
        </div>
      </header>

      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
