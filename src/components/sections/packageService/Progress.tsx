import React from "react";
import { GrChat } from "react-icons/gr";
import { LuClipboardCheck, LuFactory, LuTruck } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiArrowRightLongFill } from "react-icons/ri";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";

const { process: processData } = data.pages.services;

const stepIcons = [
  <GrChat size={22} />,
  <LuClipboardCheck size={22} />,
  <FaRegCheckCircle size={22} />,
  <LuFactory size={22} />,
  <LuTruck size={22} />,
];

export default function OurProcess() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-3">
            {processData.heading}
          </h2>
          <div className="w-8 h-0.5 bg-gold rounded-full mx-auto" />
        </AnimatedSection>

        {/* Desktop — horizontal steps */}
        <StaggerContainer className="hidden md:flex items-start justify-between gap-2 overflow-x-auto">
          {processData.steps.map((step, index) => (
            <StaggerItem key={step.number} className="flex items-start min-w-0">
              {/* Step */}
              <div className="flex flex-col items-center text-center w-36 lg:w-44 min-w-0">
                {/* Icon circle */}
                <div
                  className="
                  w-16 h-16 lg:w-20 lg:h-20 rounded-full
                  border-2 border-brand
                  flex items-center justify-center
                  text-brand mb-4 shrink-0
                "
                >
                  {React.cloneElement(stepIcons[index], { size: 30 })}
                </div>

                {/* Number badge */}
                <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center mb-3 shrink-0">
                  <span className="text-white text-xs font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm lg:text-base font-bold text-text-dark mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs lg:text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow — use hex colour directly */}
              {index < processData.steps.length - 1 && (
                <div className="mt-6 lg:mt-8 mx-2 shrink-0">
                  <RiArrowRightLongFill size={40} color="#2a5c3f" />
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile — vertical steps */}
        <div className="md:hidden flex flex-col">
          {processData.steps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: icon + connector line */}
              <div className="flex flex-col items-center">
                <div
                  className="
                  w-12 h-12 rounded-full
                  border border-brand
                  flex items-center justify-center
                  text-brand shrink-0
                "
                >
                  {stepIcons[index]}
                </div>
                {index < processData.steps.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 my-2" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 pt-1 flex flex-col gap-1">
                <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center mb-2">
                  <span className="text-white text-xs font-semibold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-dark">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
