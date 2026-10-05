import { motion } from "framer-motion";

import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";

const { whyPartner } = data.pages.about;

export default function WhyPartnerStrip() {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-items-center max-w-3xl mx-auto">
          {whyPartner.items.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-32 h-32 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-text-dark">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
