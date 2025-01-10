"use client";

import { submitContactForm } from "@/actions/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import FormField from "../FormField";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitContactForm(formData);
      setFormStatus(result);
      if (result.success) {
        setFormState({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({ ...formState, [field]: e.target.value });
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
            <FormField
              id="name"
              name="name"
              label="Your Name"
              value={formState.name}
              onChange={handleInputChange("name")}
              disabled={isSubmitting}
            />

            <FormField
              id="email"
              name="email"
              label="Your Email Address"
              type="email"
              value={formState.email}
              onChange={handleInputChange("email")}
              disabled={isSubmitting}
            />

            <FormField
              id="phone"
              name="phone"
              label="Your Phone Number"
              type="tel"
              value={formState.phone}
              onChange={handleInputChange("phone")}
              disabled={isSubmitting}
            />

            <FormField
              id="message"
              name="message"
              label="Your Message"
              value={formState.message}
              onChange={handleInputChange("message")}
              isTextarea={true}
              disabled={isSubmitting}
            />

            <Button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
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
