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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.period}</p>
                  <ul className="mt-4 list-disc list-inside">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
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
