"use client";

import { motion } from "framer-motion";

const FloatingSVGs = () => {
  const svgs = [
    { path: "/svg/react.svg", alt: "React" },
    { path: "/svg/node.svg", alt: "Node.js" },
    { path: "/svg/mongodb.svg", alt: "MongoDB" },
    { path: "/svg/aws.svg", alt: "AWS" },
    { path: "/svg/azure.svg", alt: "Azure" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {svgs.map((svg, index) => (
        <motion.img
          key={svg.alt}
          src={svg.path}
          alt={svg.alt}
          className="absolute w-12 h-12 opacity-20"
          animate={{
            x: ["0%", "100%", "0%"],
            y: ["0%", "100%", "0%"],
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
        />
      ))}
    </div>
  );
};

export default FloatingSVGs;
