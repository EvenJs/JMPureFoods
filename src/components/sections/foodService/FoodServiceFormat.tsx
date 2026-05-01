import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";

const { FoodServiceFormats } = data.pages.foodService;

export default function FoodServiceFormat() {
  return (
    <section className="bg-off-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xl font-extrabold uppercase tracking-widest text-brand mb-3">
            {FoodServiceFormats.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">
            {FoodServiceFormats.heading}
          </h2>
          <div className="w-8 h-0.5 bg-gold rounded-full mx-auto mb-4" />
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {FoodServiceFormats.subtitle}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FoodServiceFormats.items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                {/* Image */}
                <div className="h-56 bg-off-white overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-6"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-text-muted text-sm">
                        {item.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-3">
                  {/* Icon + title */}
                  <div className="flex flex-col items-center text-center gap-2">
                    <h3 className="text-base font-bold text-brand">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
