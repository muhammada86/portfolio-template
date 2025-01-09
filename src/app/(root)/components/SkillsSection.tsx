/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { skillsData } from "@/utils/data/skills";
import { Heading } from "@/app/components/Heading";

const SkillsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="skills"
    >
      <div className="max-w-screen-2xl mx-auto ">
        <Heading title="Skills & Expertise" subtitle="My Tech Stack" />
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-48 snap-center mx-2 "
              >
                <div className="bg-white/10 rounded-md  shadow-md p-4 flex flex-col items-center justify-center h-48">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-center font-medium text-gray-300">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
