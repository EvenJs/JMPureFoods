import { motion } from "framer-motion";
import Icon from "@/components/ui/Icons";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";

const { whyPartner } = data.pages.about;

export default function WhyPartnerStrip() {
  return (
    <section className="bg-off-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {whyPartner.items.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <Icon name={item.icon} />
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
