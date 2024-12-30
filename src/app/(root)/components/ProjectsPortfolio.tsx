"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Built a scalable e-commerce platform using MERN stack with 50k+ daily active users.",
    link: "https://github.com/muhammada86/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "Developed a real-time task management app with React Native and Firebase, improving team productivity by 25%.",
    link: "https://github.com/muhammadaqib86/task-management-app",
  },
  {
    title: "Cloud-based CMS",
    description:
      "Created a cloud-based CMS using Next.js and AWS, reducing hosting costs by 40% for clients.",
    link: "https://github.com/muhammadaqib86/cloud-cms",
  },
];

const ProjectsPortfolio = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50"
      id="projects"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          Projects Portfolio
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
