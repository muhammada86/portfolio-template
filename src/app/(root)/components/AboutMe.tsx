"use client";

import { CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 " id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 "
      >
        {/* Left Side: About Me Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="text-white mb-5">
              <CardTitle className="text-3xl font-bold">About Me</CardTitle>
            </div>
            <div className="text-white">
              <ul className="space-y-4 text-lg leading-relaxed">
                <li>
                  <span>Dynamic software development professional.</span>
                </li>
                <li>
                  <span>4 years of experience with modern technologies.</span>
                </li>
                <li>
                  <span>
                    Expertise in the MERN stack, DevOps, and cloud services.
                  </span>
                </li>
                <li>
                  <span>
                    Proven track record in leading teams and delivering
                    projects.
                  </span>
                </li>
                <li>
                  <span>
                    📍 <span className="font-semibold">Location:</span> Kharian,
                    Gujrat, Pakistan.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl bg-gradient-to-r to-pink-500 from-violet-600">
            <motion.img
              src="/avatar.png"
              alt="About Me"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
