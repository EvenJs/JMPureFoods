import WaveDivider from "../components/ui/WaveDivider";

export default function Services() {
  return (
    <>
      {/* Section A — dark green */}
      <div className="bg-dark-section px-10 py-16">
        <p className="text-white">Dark green section</p>
      </div>

      {/* Wave: dark green → white */}
      <WaveDivider fill="#ffffff" />

      {/* Section B — white */}
      <div className="bg-white px-10 py-16">
        <p className="text-text-dark">White section</p>
      </div>

      {/* Wave: white → off-white (flipped) */}
      <WaveDivider fill="#f8f9f7" flip />

      {/* Section C — off-white */}
      <div className="bg-off-white px-10 py-16">
        <p className="text-text-dark">Off-white section</p>
      </div>
    </>
  );
}
