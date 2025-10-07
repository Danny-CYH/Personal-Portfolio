import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "GraphQL",
    "PostgreSQL",
    "AWS",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left Column - Text */}
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hello! I'm John, a full-stack developer with a passion for
                  creating digital solutions that make a difference. My journey
                  in web development started back in 2019 when I decided to turn
                  my passion for technology into a career.
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working
                  at
                  <span className="text-gray-900 font-medium"> a start-up</span>
                  ,
                  <span className="text-gray-900 font-medium">
                    {" "}
                    a huge corporation
                  </span>
                  , and
                  <span className="text-gray-900 font-medium">
                    {" "}
                    a student-led design studio
                  </span>
                  . My main focus these days is building accessible, inclusive
                  products and digital experiences.
                </p>
                <p>
                  I also recently launched a course that covers everything you
                  need to build a web app with the Spotify API using Node &
                  React.
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
              </div>
            </div>

            {/* Right Column - Image & Skills */}
            <div className="md:col-span-2">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group mb-8"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 text-lg">Profile Image</span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-primary-500 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
