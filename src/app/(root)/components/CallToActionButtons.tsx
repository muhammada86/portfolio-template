"use client";

import { personalData } from "@/utils/data/personalData";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

export const CallToActionButtons = () => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <button
          onClick={() => window.open(personalData.resume, "_blank")}
          className="relative px-6 py-3 bg-gray-900 text-white rounded-md overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <Download className="w-5 h-5" />
            <span>View My Resume</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300"></span>
          <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></span>
        </button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Link
          href="#contact"
          className="relative px-6 py-3 bg-gray-900 text-white rounded-md overflow-hidden group inline-flex items-center justify-center"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>Hire Me</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300"></span>
          <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></span>
        </Link>
      </motion.div>
    </div>
  );
};
