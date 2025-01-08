"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

const FloatingSVGs = () => {
  const shapes = Array(8).fill(null);

  const generateRandomShape = useCallback(() => {
    const shapeType = Math.floor(Math.random() * 3); // 0: triangle, 1: box, 2: line
    const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 0.05)`; // Reduced opacity to 0.05

    switch (shapeType) {
      case 0: // Triangle
        const size = 30 + Math.random() * 30;
        return (
          <polygon
            points={`0,${size} ${size / 2},0 ${size},${size}`}
            fill={color}
          />
        );
      case 1: // Box
        const width = 20 + Math.random() * 30;
        const height = 20 + Math.random() * 30;
        return <rect width={width} height={height} fill={color} />;
      case 2: // Line
        const length = 30 + Math.random() * 50;
        const strokeWidth = 1 + Math.random() * 3;
        return (
          <line
            x1="0"
            y1="0"
            x2={length}
            y2="0"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        );
      default:
        return null;
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
            duration: 30 + index * 2,
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
