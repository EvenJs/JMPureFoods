import ApplicationScenarios from "@/components/sections/foodService/ApplicationScenarios";
import FoodServiceFormat from "@/components/sections/foodService/FoodServiceFormat";
import FoodServiceHero from "@/components/sections/foodService/FoodServiceHero";
import WhatWeDo from "@/components/sections/foodService/WhatWeDo";

export default function FoodService() {
  return (
    <>
      <FoodServiceHero />
      <WhatWeDo />
      <FoodServiceFormat />
      <ApplicationScenarios />
    </>
  );
}
