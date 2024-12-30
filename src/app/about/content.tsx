/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Layers, Shield, Target, User } from "lucide-react";
import AboutHeroSection from "./AboutHeroSection";

// Floating background SVG component
const FloatingSVG = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="grid"
        width="40"
        height="40"
        x="50%"
        y="-1"
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)" />
    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
      <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z" strokeWidth="0" />
    </svg>
  </svg>
);

interface FeatureSectionProps {
  title: string;
  description: string;
  icon: any;
  items: string[];
  index: number;
}

// Feature section component
const FeatureSection = ({
  title,
  description,
  icon: Icon,
  items,
  index,
}: FeatureSectionProps) => (
  <div className="relative overflow-hidden py-24 sm:py-32" id="learn-more">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div
          className={`lg:pr-8 lg:pt-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}
        >
          <div className="lg:max-w-lg">
            <div className="flex items-center gap-4 mb-6">
              <Icon className="h-12 w-12 text-indigo-600" />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {items.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 -top-1 h-5 w-5 text-indigo-600">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/10">
                        {index + 1}
                      </span>
                    </div>
                  </dt>
                  <dd className="inline ml-1">{item}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div
          className={`flex items-center justify-center ${
            index % 2 === 1 ? "lg:order-1" : ""
          }`}
        >
          <div className="relative h-[500px] w-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-indigo-600/10 flex items-center justify-center">
                <Icon className="h-32 w-32 text-indigo-600" strokeWidth={1} />
              </div>
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent rounded-full animate-pulse"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const sections = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "At Sahulat, we empower businesses to thrive through seamless and innovative technology.",
    items: [
      "Providing powerful tools for SMEs to take control of operations",
      "Making enterprise-grade technology accessible to all businesses",
      "Driving informed decision-making through data analytics",
      "Supporting sustainable business growth through innovation",
    ],
  },
  {
    icon: Layers,
    title: "Our Platform",
    description:
      "A comprehensive suite of tools tailored for small to medium-sized enterprises.",
    items: [
      "Easy-to-manage dashboards for complete operational control",
      "Advanced analytics for data-driven decision making",
      "Real-time collaboration tools to enhance team productivity",
      "Streamlined processes for efficient business management",
    ],
  },
  {
    icon: User,
    title: "Our Team",
    description:
      "A passionate team dedicated to building solutions that solve real-world business challenges.",
    items: [
      "A diverse and experienced team of professionals in technology, business, and design",
      "Focused on collaboration and teamwork to achieve the best outcomes",
      "Committed to continuous learning and staying at the forefront of industry trends",
      "Driven by a shared vision of empowering businesses for the future",
    ],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description:
      "We prioritize the security and privacy of your business data with industry-leading practices.",
    items: [
      "End-to-end encryption to protect sensitive business information",
      "Compliant with industry standards for data privacy and security",
      "Regular security audits to ensure system integrity",
      "Multi-factor authentication for secure access management",
    ],
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white relative">
      <FloatingSVG />
      <AboutHeroSection />
      {sections.map((section, index) => (
        <FeatureSection key={index} {...section} index={index} />
      ))}
    </div>
  );
}
