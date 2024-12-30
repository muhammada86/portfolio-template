"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    degree: "Master in Computer Science",
    institution: "University of Arid Agriculture, Rawalpindi",
    period: "2018 - 2020",
  },
  {
    degree: "Bachelor in Commerce",
    institution: "University of Punjab, Kharian",
    period: "2013 - 2015",
  },
];

const Education = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 
      radial-gradient(var(--tw-gradient-stops)) conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))
      "
      id="education"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col items-center justify-start">
            <div className="border-l-2 border-indigo-500 h-full absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex justify-start items-center"
              >
                <div className="w-6 h-6 bg-indigo-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <Card className="w-96 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
