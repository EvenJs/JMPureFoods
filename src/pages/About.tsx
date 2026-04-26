import AnimatedSection from "../components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../components/ui/Stagger";

export default function About() {
  const items = [
    "Premium Quality",
    "Food Safety",
    "Advanced Technology",
    "Flexible Solutions",
    "Reliable Partnership",
  ];

  return (
    <div className="flex flex-col gap-20 p-10">
      {/* AnimatedSection — single block fade up */}
      <AnimatedSection>
        <div className="bg-off-white p-8 rounded-lg">
          <p className="text-text-dark font-semibold">
            This block fades up when scrolled into view
          </p>
        </div>
      </AnimatedSection>

      {/* AnimatedSection with delay */}
      <AnimatedSection delay={0.2}>
        <div className="bg-off-white p-8 rounded-lg">
          <p className="text-text-dark font-semibold">
            This block fades up 0.2s later
          </p>
        </div>
      </AnimatedSection>

      {/* StaggerContainer — children animate one by one */}
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((item) => (
          <StaggerItem key={item}>
            <div className="bg-brand text-white text-sm font-semibold p-4 rounded-lg text-center">
              {item}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
