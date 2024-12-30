/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "React.js", logo: "/svg/react.svg" },
  { name: "Next.js", logo: "/svg/nextjs.svg" },
  { name: "Node.js", logo: "/svg/node.svg" },
  { name: "Express.js", logo: "/svg/express.svg" },
  { name: "MongoDB", logo: "/svg/mongodb.svg" },
  { name: "AWS", logo: "/svg/aws.svg" },
  { name: "Azure", logo: "/svg/azure.svg" },
  { name: "GraphQL", logo: "/svg/graphql.svg" },
];

const SkillsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          Skills & Expertise
        </motion.h2>
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-48 snap-center mx-2"
              >
                <div className="bg-background rounded-lg shadow-md p-4 flex flex-col items-center justify-center h-48">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-center font-medium">{skill.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
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
