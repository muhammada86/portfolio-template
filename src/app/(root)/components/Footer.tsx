"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex space-x-6 mb-4"
        >
          <a
            href="https://github.com/muhammadaqib86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadaqib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:muhammadaqib86@gmail.com"
            className="text-foreground hover:text-primary"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground"
        >
          &copy; {new Date().getFullYear()} Muhammad Aqib. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
