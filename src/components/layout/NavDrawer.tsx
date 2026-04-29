import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ButtonLink } from "@/components/ui/Button";
import data from "@/data/siteData.json";

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  const location = useLocation();

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm flex flex-col"
            style={{ backgroundColor: "#1e4028" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 shrink-0">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">JMP</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-sm tracking-wide">
                    JM PUREFOODS
                  </span>
                  <span className="text-white/50 text-[10px] tracking-widest uppercase">
                    PTY LTD
                  </span>
                </div>
              </Link>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mx-6" />

            {/* Nav links */}
            <nav className="flex flex-col px-6 py-8 gap-1 flex-1 overflow-y-auto">
              {data.navigation.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`
                        block py-3 text-base font-medium uppercase tracking-widest
                        border-b border-white/10 transition-colors duration-200
                        ${
                          isActive
                            ? "text-gold-light"
                            : "text-white/80 hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom CTA + decoration */}
            <div className="relative px-6 pb-10 shrink-0 overflow-hidden">
              {/* Oil drop decoration */}
              <svg
                className="absolute bottom-0 right-0 opacity-10 pointer-events-none"
                width="120"
                height="150"
                viewBox="0 0 120 150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 10 C60 10 10 70 10 100 C10 127 33 145 60 145 C87 145 110 127 110 100 C110 70 60 10 60 10 Z"
                  fill="#c8960c"
                />
              </svg>

              {/* Get a Quote — using ButtonLink */}
              <ButtonLink
                to="/contact"
                variant="outline-gold"
                size="md"
                className="relative w-full justify-center"
              >
                Get a Quote
              </ButtonLink>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
