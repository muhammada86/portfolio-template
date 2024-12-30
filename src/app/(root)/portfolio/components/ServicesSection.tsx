"use client";

import { motion } from "framer-motion";
import { Paintbrush, Layers, Smartphone, Globe } from "lucide-react";

const services = [
  {
    title: "Logo Design",
    icon: Paintbrush,
    description:
      "Create memorable and impactful logos that represent your brand identity.",
  },
  {
    title: "Branding",
    icon: Layers,
    description:
      "Develop comprehensive brand strategies and visual identities for businesses.",
  },
  {
    title: "UI/UX Design",
    icon: Smartphone,
    description:
      "Design intuitive and engaging user interfaces for web and mobile applications.",
  },
  {
    title: "Web Design",
    icon: Globe,
    description:
      "Craft visually stunning and functional websites that leave a lasting impression.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
