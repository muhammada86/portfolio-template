"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          DesignerName
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {["Home", "Portfolio", "About", "Services", "Contact"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </nav>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.header>
  );
}
