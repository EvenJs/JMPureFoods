import { Helmet } from "react-helmet-async";
import PackagingFormats from "@/components/sections/packageService/PackagingFormats";
import PrivateLabel from "@/components/sections/packageService/PrivateLabel";
import Process from "@/components/sections/packageService/Progress";
import ServicesHero from "@/components/sections/packageService/ServicesHero";
import WhatWeDo from "@/components/sections/packageService/WhatWeDo";

export default function PackageServices() {
  return (
    <>
      <Helmet>
        <title>Contract Packaging | JM Purefoods Pty Ltd</title>
        <meta
          name="description"
          content="End-to-end toll packing solutions including filling, capping, labelling, quality control and packaging."
        />
        <meta property="og:title" content="Contract Packaging | JM Purefoods" />
        <meta
          property="og:description"
          content="End-to-end toll packing solutions — filling, capping, labelling, QC and packaging."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jmpurefoods.com.au/services" />
        <link rel="canonical" href="https://jmpurefoods.com.au/services" />
      </Helmet>
      <ServicesHero />
      <WhatWeDo />
      <PackagingFormats />
      <PrivateLabel />
      <Process />
    </>
  );
}
