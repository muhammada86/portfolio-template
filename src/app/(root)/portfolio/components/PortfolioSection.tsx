"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ProjectsType = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const projects: ProjectsType[] = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Logos",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Design",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    title: "Product Packaging",
    category: "Packaging",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    title: "Mobile App UI",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    title: "Illustration Series",
    category: "Illustrations",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    title: "Magazine Layout",
    category: "Print",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
    null
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: ProjectsType) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 mb-4">{selectedProject.category}</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
