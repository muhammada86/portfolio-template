"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Shahtez Software Solutions",
    period: "2022 - Present",
    achievements: [
      "Led a team to deliver 10+ projects",
      "Improved performance by 40%",
      "Ensured 99.9% uptime",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Dynamic Tech Group",
    period: "2020 - 2022",
    achievements: [
      "Delivered 15+ CMS and SaaS projects",
      "Migrated legacy systems to AWS",
      "Reduced costs by 30%",
    ],
  },
  {
    title: "React Native Developer",
    company: "Didit Dev",
    period: "July 2020 - Sep 2020",
    achievements: [
      "Revamped multilingual apps",
      "Increased user retention by 35%",
    ],
  },
];

const Experience = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="experience"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-10"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 px-4">
                <Card className="backdrop-blur-sm bg-white/10 border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {exp.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.period}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="w-1 bg-gradient-to-b from-purple-400 to-pink-600 h-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
