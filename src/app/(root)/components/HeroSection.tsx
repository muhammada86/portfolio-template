"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ContactIcon, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ShootingStars from "./ShootingStars";
import AboutMe from "./AboutMe";
import HeroSectionRight from "./HeroSectionRight";
import { personalData } from "@/utils/data/personal-data";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      mouseX.set(touch.clientX);
      mouseY.set(touch.clientY);
    };

    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-black via-gray-900 to-purple-700  overflow-hidden"
    >
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0"
      />
      <ShootingStars />
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-full blur-2xl"
        style={{
          width: 400,
          height: 400,
          left: mouseXSpring,
          top: mouseYSpring,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className=" max-w-7xl mx-auto sm:w-screen flex flex-col md:flex-row items-center space-between relative z-10 lg:mt-40 sm:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-[500px] text-center md:text-left"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
            Hi, I&apos;m <span className="text-secondary">Muhammad Aqib</span>
          </h1>
          <p className="mt-3 text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            MERN Stack Developer & Cloud Computing Enthusiast
          </p>
          <p className="mt-3 text-lg text-gray-400">
            I craft seamless web and mobile applications to bring ideas to life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-green-500 hover:to-violet-600"
            >
              <button
                onClick={() => window.open(personalData.resume, "_blank")}
                className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3"
              >
                <span>View My Resume</span>
                <Download />
              </button>
            </Link>
            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-gray-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href="/"
              // href={personalData.resume}
            >
              <span>Hire Me</span>
              <ContactIcon size={16} />
            </Link>
          </div>
        </motion.div>
        <HeroSectionRight />
      </div>
      <AboutMe />
    </section>
  );
};

export default HeroSection;
