"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const milestones = [
    { year: 2013, title: "Started Freelancing" },
    { year: 2015, title: "Joined Design Agency XYZ" },
    { year: 2018, title: "Launched Own Design Studio" },
    { year: 2021, title: "Expanded to International Clients" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Designer"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <div>
            <p className="text-lg mb-6">
              I&apos;m a passionate designer with expertise in logo design,
              branding, and UI/UX. My approach combines creativity with
              strategic thinking to deliver impactful visual solutions that
              resonate with audiences and drive business growth.
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-300">
              <li>Expert in Adobe Creative Suite and Figma</li>
              <li>Strong communication and collaboration skills</li>
              <li>Adaptable to various design styles and industries</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">Career Milestones</h3>
            <motion.ul className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <span className="text-blue-400 font-bold">
                    {milestone.year}
                  </span>
                  <span className="flex-1 border-b border-gray-700 border-dashed"></span>
                  <span>{milestone.title}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
