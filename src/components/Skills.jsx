import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: FaReact, level: 90, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, level: 85, color: "text-yellow-500" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: 80,
      color: "text-blue-600",
    },
    { name: "Node.js", icon: FaNodeJs, level: 75, color: "text-green-600" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 95,
      color: "text-cyan-500",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: 70,
      color: "text-gray-800 dark:text-white",
    },
    { name: "Vite", icon: SiVite, level: 85, color: "text-purple-500" },
    { name: "Express.js", icon: SiExpress, level: 75, color: "text-gray-600" },
    { name: "Python", icon: FaPython, level: 65, color: "text-yellow-600" },
    { name: "MongoDB", icon: SiMongodb, level: 70, color: "text-green-500" },
    { name: "Git", icon: FaGitAlt, level: 85, color: "text-orange-600" },
    { name: "Figma", icon: FaFigma, level: 60, color: "text-purple-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`text-4xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
