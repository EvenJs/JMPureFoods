import { GrChat } from "react-icons/gr";
import { LuClipboardCheck } from "react-icons/lu";
import { LuFileCheck } from "react-icons/lu";
import { LuFactory } from "react-icons/lu";
import { LuTruck } from "react-icons/lu";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";
import React from "react";
import { RiArrowRightLongFill } from "react-icons/ri";

const { process: processData } = data.pages.services;

const stepIcons = [
  <GrChat size={22} />,
  <LuClipboardCheck size={22} />,
  <LuFileCheck size={22} />,
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
        <StaggerContainer className="hidden md:flex items-start justify-between">
          {processData.steps.map((step, index) => (
            <StaggerItem key={step.number} className="flex items-start">
              {/* Step */}
              <div className="flex flex-col items-center text-center w-44">
                {/* Icon circle — bigger */}
                <div className="w-20 h-20 rounded-full border-2 border-brand flex items-center justify-center text-brand mb-6">
                  {React.cloneElement(stepIcons[index], { size: 30 })}
                </div>

                {/* Number badge — green circle */}
                <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center mb-3">
                  <span className="text-white text-xs font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-text-dark mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < processData.steps.length - 1 && (
                <div className="text-gray-300 mt-8 mx-2 shrink-0">
                  <RiArrowRightLongFill size={40} color="green" />
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile — vertical steps */}
        <div className="md:hidden flex flex-col gap-0">
          {processData.steps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: icon + connector line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-brand flex items-center justify-center text-brand shrink-0">
                  {stepIcons[index]}
                </div>
                {index < processData.steps.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 my-2" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 pt-1 flex flex-col gap-1">
                <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center mb-3">
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
