import AnimatedSection from "../../ui/AnimatedSection";

interface SectionData {
  number: string;
  heading: string;
  image: string;
  imagePosition: string;
  paragraphs: string[];
}

export default function AboutSection({
  section,
  index,
}: {
  section: SectionData;
  index: number;
}) {
  const imageLeft = section.imagePosition === "left";

  return (
    <AnimatedSection
      className="max-w-7xl mx-auto px-6 md:px-16 py-16"
      delay={0.1}
      key={index}
    >
      <div
        className={`
        flex flex-col gap-8
        md:grid md:grid-cols-2 md:gap-12
        md:items-center
        ${imageLeft ? "" : "md:[&>*:first-child]:order-2"}
      `}
      >
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-md aspect-4/3">
          {section.image ? (
            <img
              src={section.image}
              alt={section.heading}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-off-white flex items-center justify-center">
              <span className="text-text-muted text-sm">Image placeholder</span>
            </div>
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-5">
          {/* Number badge */}
          <div
            className="
            w-10 h-10 rounded-full
            bg-dark-section
            flex items-center justify-center
            shrink-0
          "
          >
            <span className="text-white text-xs font-bold tracking-wider">
              {section.number}
            </span>
          </div>

          {/* Heading + gold bar */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-3">
              {section.heading}
            </h2>
            <div className="w-8 h-0.5 bg-gold rounded-full" />
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-3">
            {section.paragraphs.map((para, i) => (
              <p key={i} className="text-text-muted text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
