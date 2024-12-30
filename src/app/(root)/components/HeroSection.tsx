"use client";

import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { Button } from "@/components/ui/button";
import animationData from "@/public/lottie/developer-animation.json";

const HeroSection = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-primary">Muhammad Aqib</span>
          </h1>
          <p className="mt-3 text-xl text-muted-foreground sm:mt-5 sm:text-2xl">
            MERN Stack Developer & Cloud Computing Enthusiast
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            I craft seamless web and mobile applications to bring ideas to life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button size="lg">View My Resume</Button>
            <Button size="lg" variant="outline">
              Hire Me
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <Lottie options={lottieOptions} height={400} width={400} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
