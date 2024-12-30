"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

const FloatingSVGs = () => {
  const shapes = Array(5).fill(null);

  const generateRandomShape = useCallback(() => {
    const isOval = Math.random() > 0.5;
    const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 0.2)`;

    if (isOval) {
      const rx = 20 + Math.random() * 30;
      const ry = 20 + Math.random() * 30;
      return <ellipse cx="50%" cy="50%" rx={rx} ry={ry} fill={color} />;
    } else {
      const size = 40 + Math.random() * 40;
      return (
        <polygon
          points={`0,${size} ${size / 2},0 ${size},${size}`}
          fill={color}
        />
      );
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {shapes.map((_, index) => (
        <motion.svg
          key={index}
          className="absolute w-16 h-16"
          viewBox="0 0 100 100"
          animate={{
            x: ["0%", "100%", "0%"],
            y: ["0%", "100%", "0%"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {generateRandomShape()}
        </motion.svg>
      ))}
    </div>
  );
};

export default FloatingSVGs;
