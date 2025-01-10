"use client";

import { submitContactForm } from "@/actions/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    setFormStatus(result);
    if (result.success) {
      setFormState({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none shadow-xl">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Get in Touch
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="text-white text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:text-white peer-focus:text-sm"
              >
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="my-2 bg-transparent border-b border-purple-400 focus:border-white transition-colors duration-300 text-white placeholder-transparent"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="name"
                className="text-white text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:text-white peer-focus:text-sm"
              >
                Your Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="bg-transparent border-b border-purple-400 focus:border-white transition-colors duration-300 text-white placeholder-transparent"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="name"
                className="text-white text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:text-white peer-focus:text-sm"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="bg-transparent border-b border-purple-400 focus:border-white transition-colors duration-300 text-white placeholder-transparent"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300"
            >
              Send Message
            </Button>
          </form>
          <AnimatePresence>
            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-3 rounded ${
                  formStatus.success ? "bg-green-500" : "bg-red-500"
                } text-white text-center`}
              >
                {formStatus.message}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
