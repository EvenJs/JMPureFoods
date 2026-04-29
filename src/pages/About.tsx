import AboutHero from "@/components/sections/aboutUs/Hero";
import AboutSection from "@/components/sections/aboutUs/About";
import WhyPartnerStrip from "@/components/sections/aboutUs/WhyPartnerStrip";
import data from "@/data/siteData.json";

export default function About() {
  const { sections } = data.pages.about;
  return (
    <>
      <AboutHero />
      <div className="divide-y divide-gray-100">
        {sections.map((section, index) => (
          <AboutSection key={section.number} section={section} index={index} />
        ))}
      </div>
      <WhyPartnerStrip />
    </>
  );
}
