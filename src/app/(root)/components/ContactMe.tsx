"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
} from "lucide-react";
import { submitContactForm } from "@/actions/contact-form";

const contactsData = {
  email: "muhammadaqib86@gmail.com",
  phone: "+923484124477",
  address: "House #2, Street #3, Kharian, Gujrat",
  github: "https://github.com/muhammada86",
  facebook: "https://www.facebook.com/muhammad.aqib.3701",
  linkedIn: "https://www.linkedin.com/in/muhammad-aqib-333640161/",
  twitter: "https://twitter.com/#",
  stackOverflow: "https://stackoverflow.com/users/11119419/muhammad-aqib",
  devUsername: "muhammadaqib86",
};

const ContactMe = () => {
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
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-900"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Let&apos;s Connect and Create Something Amazing
        </motion.h2>
        <div className="grid gap-8 lg:grid-cols-2">
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
                      className="my-2 bg-transparent border-b border-blue-400 focus:border-white transition-colors duration-300 text-white placeholder-transparent"
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
                      className="bg-transparent border-b border-blue-400 focus:border-white transition-colors duration-300 text-white placeholder-transparent"
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
                      className="bg-transparent border-b border-blue-400 focus:border-white transition-colors duration-300 text-white placeholder-transparent"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      text: contactsData.email,
                      href: `mailto:${contactsData.email}`,
                    },
                    {
                      icon: Phone,
                      text: contactsData.phone,
                      href: `tel:${contactsData.phone}`,
                    },
                    { icon: MapPin, text: contactsData.address },
                    { icon: Github, text: "GitHub", href: contactsData.github },
                    {
                      icon: Linkedin,
                      text: "LinkedIn",
                      href: contactsData.linkedIn,
                    },
                    {
                      icon: Facebook,
                      text: "Facebook",
                      href: contactsData.facebook,
                    },
                    {
                      icon: Twitter,
                      text: "Twitter",
                      href: contactsData.twitter,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <item.icon className="w-5 h-5 text-blue-400" />
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors duration-300"
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
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Why Work With Me?
          </h3>
          <p className="text-blue-300 max-w-2xl mx-auto">
            I&apos;m passionate about creating exceptional digital experiences.
            With a keen eye for detail and a commitment to excellence, I&apos;ll
            bring your vision to life. Let&apos;s collaborate and turn your
            ideas into reality!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
