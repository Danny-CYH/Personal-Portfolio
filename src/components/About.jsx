import { motion } from "framer-motion";
import myProfessionalImage from "../assets/professional_image.jpg";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Code,
  Server,
  Database,
  Cloud,
  Users,
  Award,
} from "lucide-react";

export default function About({ isDarkMode }) {
  const skills = [
    { name: "React.js", level: 90, icon: "⚛️", category: "Frontend" },
    { name: "Vue.js", level: 20, icon: "📘", category: "Frontend" },
    { name: "Bootstrap", level: 90, icon: "⏭️", category: "Frontend" },
    { name: "Laravel", level: 75, icon: "🟢", category: "Backend" },
    { name: "Java", level: 70, icon: "🚀", category: "Backend" },
    { name: "Supabase", level: 60, icon: "🍃", category: "Database" },
    { name: "MySQL", level: 80, icon: "🐘", category: "Database" },
    { name: "AWS", level: 30, icon: "☁️", category: "Cloud" },
    { name: "Docker", level: 20, icon: "🐳", category: "DevOps" },
    { name: "Git", level: 95, icon: "📌", category: "Tools" },
    { name: "Tailwind CSS", level: 92, icon: "🎨", category: "Frontend" },
    { name: "Python", level: 80, icon: "🐍", category: "Backend" },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology (Bsc.IT)",
      institution: "University Utara Malaysia",
      period: "2023 - Present",
      CGPA: "3.72/4.0",
      achievements: ["Dean's List (2 Semesters)"],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Mobile Programming",
        "Web Engineering",
      ],
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Politeknik Sultan Abdul Halim Mu'adzam Shah",
      period: "2020 - 2023",
      CGPA: "3.92/4.0",
      achievements: ["Dean's List (All Semesters)"],
      relevantCourses: [
        "Data Structures",
        "System Analysis and Design",
        "Human Computer Interaction",
        "Web Development Technology",
        "Mobile App Development",
      ],
    },
  ];

  const certifications = [
    "Presenter Certificate – International Digital Expert Symposium (deXsym) 2025",
    "Workshop Participation Certificate - From Local to Web Hosting",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Passionate Software Engineering student with expertise in full-stack
            development, cloud technologies, and creating exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 md:mx-28">
          {/* Left Column - Profile & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Profile Card */}
            <div
              className={`rounded-2xl overflow-hidden ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-xl mb-8`}
            >
              {/* Profile Image with Effects */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
                <img
                  src={myProfessionalImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* Profile Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Software Developer
                </div>
              </div>

              {/* Personal Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Danny Cheng</h3>
                <p
                  className={`mb-6 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Full-Stack Web Developer
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="font-medium">Software Engineering</p>
                      <p className="text-sm opacity-75">
                        Bachelor of Science with Honours ( IT )
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-500 mr-3" />
                    <div>
                      <p className="font-medium">Alor Setar, Malaysia</p>
                      <p className="text-sm opacity-75">Open to Relocation</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium">5 Years</p>
                      <p className="text-sm opacity-75">
                        Learning Technology and Development
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      3
                    </div>
                    <div className="text-sm opacity-75">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      4
                    </div>
                    <div className="text-sm opacity-75">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm opacity-75">Quality Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div
              className={`rounded-2xl p-6 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 text-yellow-500 mr-2" />
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-900/50" : "bg-gray-50"
                    }`}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Introduction */}
            <div
              className={`rounded-2xl p-8 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg mb-8`}
            >
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4">
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  As a passionate Software Engineering student, I've dedicated
                  myself to mastering both frontend and backend technologies. My
                  journey began with simple HTML/CSS websites and has evolved
                  into building complex, scalable applications using modern
                  frameworks and cloud technologies.
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  What drives me is the ability to transform ideas into
                  functional, beautiful digital experiences. I believe in
                  writing clean, maintainable code and following best practices
                  in software development.
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Currently, I'm focused on deepening my expertise in cloud
                  architecture and full stack development, while continuing to
                  build innovative solutions that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Skills by Category */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>

              {/* Skill Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Frontend",
                  "Backend",
                  "Database",
                  "Cloud",
                  "DevOps",
                  "Tools",
                ].map((category) => {
                  const categorySkills = skills.filter(
                    (skill) => skill.category === category
                  );
                  if (categorySkills.length === 0) return null;

                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className={`rounded-xl p-6 ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      } shadow-lg`}
                    >
                      <h4 className="text-lg font-bold mb-4 flex items-center">
                        {category === "Frontend" && (
                          <Code className="w-5 h-5 text-blue-500 mr-2" />
                        )}
                        {category === "Backend" && (
                          <Server className="w-5 h-5 text-green-500 mr-2" />
                        )}
                        {category === "Database" && (
                          <Database className="w-5 h-5 text-yellow-500 mr-2" />
                        )}
                        {category === "Cloud" && (
                          <Cloud className="w-5 h-5 text-purple-500 mr-2" />
                        )}
                        {category === "DevOps" && (
                          <Server className="w-5 h-5 text-red-500 mr-2" />
                        )}
                        {category === "Tools" && (
                          <Code className="w-5 h-5 text-indigo-500 mr-2" />
                        )}
                        {category}
                      </h4>
                      <div className="space-y-4">
                        {categorySkills.map((skill, index) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1">
                              <div className="flex items-center">
                                <span className="mr-2">{skill.icon}</span>
                                <span className="font-medium">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="font-bold">{skill.level}%</span>
                            </div>
                            <div
                              className={`h-2 rounded-full ${
                                isDarkMode ? "bg-gray-700" : "bg-gray-300"
                              }`}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Education Details */}
            <div
              className={`rounded-2xl p-8 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 mb-8"
                >
                  <div className="md:flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <p
                        className={`text-lg ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {edu.institution}
                      </p>
                    </div>
                    <div className="md:text-right">
                      <div
                        className={`px-3 py-1 rounded-full ${
                          isDarkMode ? "bg-blue-900/30" : "bg-blue-100"
                        } text-blue-500 font-medium`}
                      >
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold mb-2 flex items-center">
                      <Award className="w-4 h-4 text-yellow-500 mr-2" />
                      Achievements
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-gray-900 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course Highlights */}
                  <div>
                    <h5 className="font-bold mb-2">Relevant Coursework</h5>
                    <div className="flex md:flex-row flex-col-reverse flex-wrap gap-2">
                      {edu.relevantCourses.map((course, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-gray-900/50 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
