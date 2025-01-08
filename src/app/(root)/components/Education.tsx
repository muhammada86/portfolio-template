"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import ShootingStars from "./ShootingStars";

const educationData = [
  {
    degree: "Master in Computer Science",
    institution: "University of Arid Agriculture, Rawalpindi",
    period: "2018 - 2020",
    location: "Rawalpindi, Pakistan",
  },
  {
    degree: "Bachelor in Commerce",
    institution: "University of Punjab, Kharian",
    period: "2013 - 2015",
    location: "Kharian, Pakistan",
  },
  {
    degree: "Secendary Education",
    institution: "Darul Salam, Kharian",
    period: "2011 - 2013",
    location: "Kharian, Pakistan",
  },
];

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900"
      id="education"
    >
      <ShootingStars />
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Educational Journey
        </motion.h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none shadow-xl">
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full p-6 py-10 flex justify-between items-center text-left hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-teal-300">{edu.institution}</p>
                    </div>
                    <ChevronDown
                      className={`text-white transition-transform duration-300 ${
                        expandedIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </Button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-white"
                      >
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Calendar className="text-teal-300" size={18} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="text-teal-300" size={18} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
          >
            <GraduationCap className="mr-2" />
            View Full Academic History
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
