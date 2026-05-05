import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/home/Hero";
import OurSolutions from "@/components/sections/home/OurSolutions";
import PackagingCapability from "@/components/sections/home/PackagingCapability";
import WhyPartner from "@/components/sections/home/WhyPartner";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>JM Purefoods Pty Ltd</title>
        <meta
          name="description"
          content="Premium liquid toll packing in Australia. Contract packaging and food service supply. Based in Pakenham, VIC."
        />
        <meta property="og:title" content="JM Purefoods Pty Ltd" />
        <meta
          property="og:description"
          content="Premium liquid toll packing in Australia. Contract packaging and food service supply."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jmpurefoods.com.au/" />
        <link rel="canonical" href="https://jmpurefoods.com.au/" />
      </Helmet>
      <Hero />
      <OurSolutions />
      <WhyPartner />
      <PackagingCapability />
    </>
  );
}
