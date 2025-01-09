"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import { CallToActionButtons } from "./CallToActionButtons";
import HeroSectionRight from "./HeroSectionRight";
import ShootingStars from "./ShootingStars";

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
      <div className="max-w-7xl mx-auto sm:w-screen flex flex-col md:flex-row items-center space-between relative z-10 lg:mt-40 mt-24 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:min-w-[500px] text-center md:text-left px-12 xl:px-0 "
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
          <CallToActionButtons />
        </motion.div>
        <HeroSectionRight />
      </div>
      <AboutMe />
    </section>
  );
};

export default HeroSection;
