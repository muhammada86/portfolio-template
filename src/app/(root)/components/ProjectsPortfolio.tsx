"use client";

import { Heading } from "@/app/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@/utils/data/projects-data";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, X } from "lucide-react";
import { useState } from "react";

// Define the types for project data
interface Project {
  id: number;
  name: string;
  description: string;
  role: string;
  tools: string[];
  demo?: string;
  code?: string;
}

const ProjectPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(147,51,234,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(236,72,153,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(147,51,234,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Heading
          title="Featured Projects"
          subtitle="Showcasing innovation through code and design"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projectsData.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card
                  className={`h-full backdrop-blur-xl bg-white/10 border border-white/20 overflow-hidden transition-colors duration-300 ${
                    hoveredProject === project.id ? "bg-white/20" : ""
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-white">
                        {project.name}
                      </CardTitle>
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-medium mb-2">
                      {project.role}
                    </p>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-200 hover:bg-purple-500/30"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0.7,
                      }}
                      className="flex space-x-3"
                    >
                      {project.demo && (
                        <Button
                          variant="outline"
                          className="bg-white/10 border-white/20 hover:bg-white/20"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-purple-200 "
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.code && (
                        <Button
                          variant="outline"
                          className="bg-white/10 border-white/20 hover:bg-white/20"
                          asChild
                        >
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Source
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border border-white/10 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedProject.name}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-200 hover:bg-purple-200 hover:text-purple-500 "
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4 mt-6">
                      {selectedProject.demo && (
                        <Button
                          variant="default"
                          className="bg-purple-600 hover:bg-purple-700"
                          asChild
                        >
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Demo
                          </a>
                        </Button>
                      )}
                      {selectedProject.code && (
                        <Button variant="outline" asChild>
                          <a
                            href={selectedProject.code}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
