"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ShootingStar = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-0.5 h-0.5 bg-white rounded-full"
    initial={{ opacity: 0, top: `${Math.random() * 100}%`, left: "100%" }}
    animate={{
      opacity: [0, 1, 0],
      top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
      left: ["100%", "-5%"],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 10 + 5,
    }}
  />
);

const ShootingStars = () => {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, i) => (
        <ShootingStar key={i} delay={Math.random() * 10} />
      ))}
    </div>
  );
};

export default ShootingStars;
