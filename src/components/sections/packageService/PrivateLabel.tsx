import AnimatedSection from "@/components/ui/AnimatedSection";
import data from "@/data/siteData.json";

const { privateLabel } = data.pages.services;

export default function PrivateLabel() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <AnimatedSection className="w-full md:w-1/2" delay={0}>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-4/3">
              {privateLabel.image ? (
                <img
                  src={privateLabel.image}
                  alt={privateLabel.heading}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full bg-off-white flex items-center justify-center">
                  <span className="text-text-muted text-sm">
                    Private label image
                  </span>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection
            className="w-full md:w-1/2 flex flex-col gap-6"
            delay={0.15}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark">
              {privateLabel.heading}
            </h2>
            <div className="w-8 h-0.5 bg-gold rounded-full" />
            <p className="text-sm text-text-muted leading-relaxed">
              {privateLabel.description}
            </p>
            <ul className="flex flex-col gap-3">
              {privateLabel.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2a5c3f"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm text-text-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
