import { motion } from "framer-motion";
import { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

export const Heading: FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <motion.div
        className="inline-block"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block">
          {title}
        </h2>
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-4 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
