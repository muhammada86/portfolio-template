"use cient";
import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { scrollToSection } from "../utils";

const AboutHeroSection = () => {
  return (
    <div className="relative isolate">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 opacity-90" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/80 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      {/* Floating elements */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 transform">
          <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            className="text-purple-300/30"
          >
            <defs>
              <pattern
                id="smallGrid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#smallGrid)" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute left-0 bottom-0 -translate-y-12 translate-x-12 transform">
          <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            className="text-purple-300/30"
          >
            <defs>
              <pattern
                id="smallGrid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#smallGrid)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-40">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-indigo-600/10 px-4 py-1.5">
              <span className="text-sm font-semibold leading-6 text-indigo-600">
                <Sparkles className="mr-2 inline-block h-4 w-4" />
                Transforming Businesses
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Empowering Your Business Success
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Discover how Sahulat is transforming business operations with
              cutting-edge technology and unparalleled support. Join thousands
              of businesses already growing with our solutions.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="group relative rounded-full px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 ease-in-out"
              >
                Contact Us
                <ChevronRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#learn-more"
                onClick={(e) => scrollToSection(e, "learn-more")}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <dt className="text-base leading-7 text-gray-600">
                  Active Users
                </dt>
                <dd className="text-3xl font-bold leading-9 tracking-tight text-indigo-600">
                  10,000+
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="text-base leading-7 text-gray-600">
                  Success Rate
                </dt>
                <dd className="text-3xl font-bold leading-9 tracking-tight text-indigo-600">
                  99.9%
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="text-base leading-7 text-gray-600">Vendors</dt>
                <dd className="text-3xl font-bold leading-9 tracking-tight text-indigo-600">
                  20+ Stores
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
