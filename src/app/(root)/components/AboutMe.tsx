"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              Dynamic software development professional with 4 years of
              experience in crafting impactful solutions using modern
              technologies like MERN stack, DevOps, and cloud services. Adept at
              leading teams, improving performance, and delivering high-quality
              projects.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Location: Kharian, Gujrat, Pakistan
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default AboutMe;
