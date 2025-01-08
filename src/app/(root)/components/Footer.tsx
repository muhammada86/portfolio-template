"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          &copy; {new Date().getFullYear()} Proudly created with ❤️ by Muhammad
          Aqib.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
