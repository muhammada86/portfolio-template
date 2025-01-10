"use client";

import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/utils/data/contactsData";
import { motion } from "framer-motion";

const ContactCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="bg-white bg-opacity-10 backdrop-filter min-h-[425px] backdrop-blur-lg border-none shadow-xl">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Contact Information
          </h3>
          <div className="space-y-4">
            {socialLinks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <item.icon className="w-5 h-5 text-purple-400" />
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-white">{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactCard;
