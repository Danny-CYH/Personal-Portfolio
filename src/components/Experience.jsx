import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const experiences = [
    {
      company: "Tech Startup Inc.",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: [
        "Led development of a SaaS product serving 10,000+ active users",
        "Implemented microservices architecture reducing latency by 40%",
        "Mentored 3 junior developers and established coding standards",
        "Collaborated with product team to implement user-facing features",
      ],
    },
    {
      company: "Digital Agency Co.",
      role: "Frontend Developer",
      period: "2020 - 2022",
      description: [
        "Developed responsive web applications for Fortune 500 clients",
        "Worked with React, Vue, and modern JavaScript frameworks",
        "Improved website performance scores by 30% across projects",
        "Participated in client meetings and technical planning sessions",
      ],
    },
    {
      company: "Freelance",
      role: "Web Developer",
      period: "2019 - 2020",
      description: [
        "Built custom websites and web applications for small businesses",
        "Managed projects from conception to deployment",
        "Worked with various CMS platforms and e-commerce solutions",
        "Developed strong client communication and project management skills",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Work Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                {/* Timeline dot */}
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-primary-500 rounded-full border-4 border-white"></div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 flex items-start"
                      >
                        <span className="text-primary-500 mr-3">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
