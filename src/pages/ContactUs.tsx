import Button, { ButtonLink } from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";

export default function ContactUs() {
  return (
    <div>
      <div className="p-10 flex flex-col gap-4 max-w-sm">
        <SectionHeader
          title="Built for Quality. Focused on You."
          subtitle="Our facility is designed to meet the highest food safety standards."
          align="left"
        />

        <div className="bg-dark-section p-8 rounded">
          <SectionHeader
            title="Specialists in Liquid Toll Packing"
            subtitle="We co-pack a wide range of liquid products."
            align="left"
            light
          />
        </div>
        <Button variant="gold" size="sm">
          Gold Small
        </Button>
        <Button variant="gold" size="md">
          Gold Medium
        </Button>
        <Button variant="gold" size="lg">
          Gold Large
        </Button>
        <Button variant="outline-gold">Outline Gold</Button>
        <div className="bg-dark-section p-4 rounded flex flex-col gap-4">
          <Button variant="outline-white">Outline White</Button>
        </div>
        <Button variant="ghost">Ghost</Button>
        <Button variant="gold" disabled>
          Disabled
        </Button>
        <ButtonLink to="/about" variant="gold">
          Link to About
        </ButtonLink>
        <ButtonLink to="/contact" variant="outline-gold">
          Outline Link
        </ButtonLink>
      </div>
    </div>
  );
}
