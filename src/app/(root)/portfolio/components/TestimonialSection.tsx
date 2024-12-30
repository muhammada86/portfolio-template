"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Startup",
    content:
      "Working with this designer was an absolute pleasure. They brought our brand vision to life with creativity and precision.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    content:
      "The level of creativity and attention to detail in their work is outstanding. Our brand has never looked better.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Alex Johnson",
    role: "Small Business Owner",
    content:
      "They took the time to understand our vision and delivered designs that perfectly capture our brand essence. Highly recommended!",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What Clients Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
