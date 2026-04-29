import { ButtonLink } from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import data from "@/data/siteData.json";

const { ctaBanner } = data.pages.services;

export default function CTABanner() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBanner.image})` }}
      />
      {/* Dark green overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#1e4028cc" }}
      />

      {/* Content */}
      <AnimatedSection className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {ctaBanner.heading}
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            {ctaBanner.description}
          </p>
          <ButtonLink to={ctaBanner.cta.path} variant="outline-white" size="md">
            {ctaBanner.cta.label}
          </ButtonLink>
        </div>
      </AnimatedSection>
    </section>
  );
}
