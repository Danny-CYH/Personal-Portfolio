// File: src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      id: 1,
      role: "Freelancer - Frontend Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      location: "Remote",
      description:
        "Getting projects from companies for developing or maintaining their web applications using Bootstrap.",
      achievements: [
        "Experience working on designing the frontend page independently.",
        "Built responsive and accessible frontend interfaces",
      ],
      technologies: ["Bootstrap", "HTML", "CSS"],
    },
    {
      id: 2,
      role: "Backend Developer Intern",
      company: "Syarikat Air Darul Aman",
      period: "Jan 2023 - Jun 2023",
      location: "On-Site, Kedah",
      description:
        "Performed internship as a backend developer, developed a Clinic Panel management system for the company using Laravel and MySQL.",
      achievements: [
        "Developed full CRUD operations for clinic management system",
        "Integrated AJAX requests for smoother without page reloads.",
        "Received positive feedback from company stakeholders",
        "Developed pagination for improved data performance and readability.",
      ],
      technologies: ["Laravel", "MySQL", "Bootstrap", "AJAX", "JQuery"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Work{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My professional journey and career milestones
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto">
          {/* Vertical Timeline for Desktop */}
          <div className="hidden md:block relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
              <div
                className={`absolute inset-0 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 animate-gradient-y"></div>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-center mb-20 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"
                />

                {/* Experience Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: isDarkMode
                      ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                      : "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                  }}
                  className={`w-full md:w-[45%] p-8 rounded-2xl ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700 hover:border-blue-500/50"
                      : "bg-white border-gray-200 hover:border-blue-400"
                  } border shadow-lg backdrop-blur-sm ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-16"
                      : "md:ml-auto md:pl-16"
                  }`}
                >
                  {/* Company & Role */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="text-2xl font-bold mb-2"
                        >
                          {exp.role}
                        </motion.h3>
                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                        >
                          {exp.company}
                        </motion.h4>
                      </div>

                      {/* Floating Tech Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className={`hidden lg:flex items-center justify-center w-16 h-16 rounded-full ${
                          isDarkMode ? "bg-gray-900" : "bg-gray-100"
                        } shadow-lg`}
                      >
                        <span className="text-2xl">
                          {index === 0 ? "⚛️" : "⚙️"}
                        </span>
                      </motion.div>
                    </div>

                    {/* Period & Location */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap gap-4 mb-6"
                    >
                      <div
                        className={`flex items-center ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div
                        className={`flex items-center ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <MapPin className="w-5 h-5 mr-2 text-purple-500" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`mb-8 leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h5 className="font-bold mb-4 text-lg flex items-center">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                          className="flex items-start"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 mr-3 flex-shrink-0`}
                          ></div>
                          <span
                            className={
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            }
                          >
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h5 className="font-bold mb-3 text-lg flex items-center">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.9 + idx * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            isDarkMode
                              ? "bg-gray-900 hover:bg-gray-800"
                              : "bg-gray-100 hover:bg-gray-200"
                          } border ${
                            isDarkMode
                              ? "border-gray-700 hover:border-blue-500"
                              : "border-gray-300 hover:border-blue-400"
                          } transition-all`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Card for Mobile */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700"
                      : "bg-white border-gray-200"
                  } border shadow-lg relative`}
                >
                  {/* Timeline Dot for Mobile */}
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900"></div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                      {exp.company}
                    </h4>

                    <div className="flex flex-col gap-3 mb-4">
                      <div
                        className={`flex items-center ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div
                        className={`flex items-center ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mb-6 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {exp.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold mb-3">Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-3"></div>
                            <span
                              className={
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                              }
                            >
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs ${
                              isDarkMode
                                ? "bg-gray-900 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div
              className={`inline-flex items-center px-8 py-4 rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20"
                  : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
              }`}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse mr-3"></div>
              <span
                className={`font-medium ${
                  isDarkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                Currently open to new opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="animate-pulse bg-gradient-to-b from-blue-500/20 to-purple-600/20"></div>
    </section>
  );
};

export default Experience;
