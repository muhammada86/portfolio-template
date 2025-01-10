"use client";

import { whyWorkWithMe } from "@/utils/data/contactsData";
import { motion } from "framer-motion";

const ContactFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-12 text-center"
    >
      <h3 className="text-2xl font-semibold text-white mb-4">
        Why Work With Me?
      </h3>
      <p className="text-purple-300 max-w-2xl mx-auto">{whyWorkWithMe}</p>
    </motion.div>
  );
};

export default ContactFooter;
