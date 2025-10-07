import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Prisma",
        "Tailwind CSS",
      ],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Chart.js", "API Integration", "CSS3"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently. Each one
            presented unique challenges and learning opportunities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <span className="text-gray-600">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="bg-white p-3 rounded-full hover:scale-110 transition-transform"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
                        className="bg-white p-3 rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium flex items-center"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium flex items-center"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
