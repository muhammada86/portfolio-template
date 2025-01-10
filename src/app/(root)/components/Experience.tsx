"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Building2, Calendar, Award } from "lucide-react";
import { experiencesData } from "@/utils/data/experienceData";
import { FloatingBubbbles } from "@/app/components/FloatingBubbles";
import { Heading } from "@/app/components/Heading";

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <FloatingBubbbles />
      <div className="max-w-6xl mx-auto relative z-10">
        <Heading
          title="Journey Through Experience"
          subtitle="Where I've Worked"
        />

        <div className="flex flex-col gap-8">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() =>
                setSelectedExp(selectedExp === index ? null : index)
              }
              className="relative"
            >
              <Card className="h-full backdrop-blur-xl bg-white/10 border border-white/20 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-5 h-5 text-purple-400" />
                    <CardTitle className="text-xl font-bold text-white">
                      {exp.title}
                    </CardTitle>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <AnimatePresence>
                    {(hoveredIndex === index || selectedExp === index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                      >
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={achievementVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <Award className="w-4 h-4 text-pink-400 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    animate={{ rotate: selectedExp === index ? 90 : 0 }}
                    className="absolute bottom-4 right-4"
                  >
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
