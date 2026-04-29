import CTABanner from "@/components/sections/packageService/CTABanner";
import PackagingFormats from "@/components/sections/packageService/PackagingFormats";
import PrivateLabel from "@/components/sections/packageService/PrivateLabel";
import Process from "@/components/sections/packageService/Progress";
import ServicesHero from "@/components/sections/packageService/ServicesHero";
import WhatWeDo from "@/components/sections/packageService/WhatWeDo";

export default function PackageServices() {
  return (
    <>
      <ServicesHero />
      <WhatWeDo />
      <PackagingFormats />
      <PrivateLabel />
      <Process />
      <CTABanner />
    </>
  );
}
