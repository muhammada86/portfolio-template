"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { personalData } from "@/utils/data/personalData";
import { skillsData } from "@/utils/data/skillsData";

const TypewriterText = ({
  text,
  delay = 50,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="font-mono text-sm md:text-base"
  >
    {children}
  </motion.div>
);

export default function HeroSectionRight() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto p-4"
    >
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Terminal size={18} />
            <span className="text-sm font-semibold">
              developer_portfolio.sh
            </span>
          </div>
        </div>
        <div className="p-4 bg-gray-900">
          <div className="flex mb-4 border-b border-gray-700">
            <button
              className={`px-4 py-2 focus:outline-none ${
                activeTab === "info"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("info")}
            >
              Info
            </button>
            <button
              className={`px-4 py-2 focus:outline-none ${
                activeTab === "skills"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={`px-4 py-2 focus:outline-none ${
                activeTab === "hire"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("hire")}
            >
              Hire
            </button>
          </div>
          <div className="text-green-400 mb-2">
            <TypewriterText text="$ ./load_developer_profile.sh" />
          </div>
          {activeTab === "info" && (
            <CodeBlock>
              <div className="text-blue-400">const developer = {"{"}</div>
              <div className="ml-4">
                <span className="text-purple-400">name:</span>{" "}
                <span className="text-yellow-300">
                  &apos;{personalData.name}&apos;
                </span>
                ,
              </div>
              <div className="ml-4">
                <span className="text-purple-400">title:</span>{" "}
                <span className="text-yellow-300">
                  &apos;{personalData.designation}&apos;
                </span>
                ,
              </div>
              <div className="ml-4">
                <span className="text-purple-400">experience:</span>{" "}
                <span className="text-white">{personalData.experience}+ </span>
                <span className="text-yellow-300">&apos;years&apos;</span>,
              </div>
              <div className="text-blue-400">{"}"}</div>
            </CodeBlock>
          )}
          {activeTab === "skills" && (
            <CodeBlock>
              <div className="text-blue-400">developer.skills = [</div>
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="ml-4 flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-yellow-300">
                    &apos;{skill.name}&apos;
                  </span>
                  ,
                </motion.div>
              ))}
              <div className="text-blue-400">]</div>
            </CodeBlock>
          )}
          {activeTab === "hire" && (
            <CodeBlock>
              <div className="text-blue-400">
                developer.hire = () {"=>"} {"{"}
              </div>
              <div className="ml-4">
                <span className="text-purple-400">if</span> (
                <span className="text-yellow-300">
                  developer.skills.length {">"} 5
                </span>{" "}
                <span className="text-white">&amp;&amp;</span>
              </div>
              <div className="ml-8">
                <span className="text-yellow-300">
                  developer.isHardWorker()
                </span>{" "}
                <span className="text-white">&amp;&amp;</span>
              </div>
              <div className="ml-8">
                <span className="text-yellow-300">
                  developer.canSolveProblems()
                </span>
              </div>
              <div className="ml-4  text-blue-400">) {"{"}</div>
              <div className="ml-8">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-orange-400">true</span>;
              </div>
              <div className="ml-4 text-blue-400">{"}"}</div>
              <div className="text-blue-400">{"}"}</div>
            </CodeBlock>
          )}
          <div className="mt-4 text-gray-400">
            <TypewriterText
              text="$ Loaded successfully. Ready for your next big project!"
              delay={30}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
