import ApplicationScenarios from "@/components/sections/foodService/ApplicationScenarios";
import FoodServiceFormat from "@/components/sections/foodService/FoodServiceFormat";
import FoodServiceHero from "@/components/sections/foodService/FoodServiceHero";
import WhatWeDo from "@/components/sections/foodService/WhatWeDo";
import { Helmet } from "react-helmet-async";

export default function FoodService() {
  return (
    <>
      <Helmet>
        <title>Food Service Supply | JM Purefoods Pty Ltd</title>
        <meta
          name="description"
          content="Bulk edible oil supply for restaurants, catering businesses, and commercial kitchens across Australia."
        />
        <meta
          property="og:title"
          content="Food Service Supply | JM Purefoods"
        />
        <meta
          property="og:description"
          content="Bulk edible oil supply for restaurants, catering, and commercial kitchens across Australia."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jmpurefoods.com.au/food-service"
        />
        <link rel="canonical" href="https://jmpurefoods.com.au/food-service" />
      </Helmet>
      <FoodServiceHero />
      <WhatWeDo />
      <FoodServiceFormat />
      <ApplicationScenarios />
    </>
  );
}
