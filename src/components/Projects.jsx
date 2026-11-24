import { motion } from "framer-motion";

import { projects } from "../constants/Project/projects";

export default function Projects({ isDarkMode }) {
  return (
    <section className="md:py-20 md:px-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
        <p
          className={`text-center mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Here are some of my recent works and personal projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-2xl overflow-hidden h-full flex flex-col ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg border ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              {/* Project Image */}
              <div className="p-6 pb-4">
                <div className="mb-4">
                  {typeof project.image === "string" &&
                  project.image.length <= 5 ? (
                    // Emoji placeholder for projects without images
                    <div className="w-full h-48 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800">
                      <span className="text-6xl">{project.image}</span>
                    </div>
                  ) : (
                    // Actual image
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 line-clamp-3 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
              </div>

              {/* Tags - Fixed at bottom */}
              <div className="px-6 pb-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button - Always at bottom */}
              <div className="px-6 pb-6 pt-2 mt-auto">
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2.5 text-center rounded-lg font-medium transition-all ${
                      project.github === "#"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg"
                    } ${isDarkMode ? "text-white" : "text-white"}`}
                    onClick={(e) => {
                      if (project.github === "#") e.preventDefault();
                    }}
                  >
                    {project.github === "#" ? "Coming Soon" : "View on GitHub"}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
