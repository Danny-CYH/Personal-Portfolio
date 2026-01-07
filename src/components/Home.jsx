import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Home({ isDarkMode }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Into Reality",
    "Into Solutions",
    "Through Code",
    "For Impact",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Tech stack with emoji mapping
  const techStack = [
    { name: "React", emoji: "⚛️" },
    { name: "Laravel", emoji: "🔧" },
    { name: "Bootstrap", emoji: "🖼️" },
    { name: "Tailwind CSS", emoji: "🎨" },
    { name: "Supabase", emoji: "☁️" },
    { name: "JavaScript", emoji: "📘" },
    { name: "Java", emoji: "☕" },
    { name: "PHP", emoji: "🐘" },
    { name: "Git", emoji: "🐙" },
    { name: "Python", emoji: "🐍" },
    { name: "Android Studio", emoji: "🤖" },
    { name: "Postman", emoji: "📡" },
    { name: "Figma", emoji: "✏️" },
    { name: "MySQL", emoji: "🗄️" },
    { name: "Vite", emoji: "⚡" },
    { name: "Node.js", emoji: "🟢" },
  ];

  return (
    <section className="min-h-[90vh] flex items-center md:mx-28">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-lg font-medium text-blue-500 mb-4"
            >
              👋 Hello, I'm Danny
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold md:mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transforming Ideas <br />
                <span className="inline-block whitespace-nowrap min-w-[280px] h-[72px] md:h-[60px] overflow-visible">
                  {text}
                  <span className="animate-pulse inline-block ml-1">|</span>
                </span>
              </span>
            </h1>

            <p
              className={`text-lg mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about building scalable web applications with modern
              technologies. Currently specializing in full-stack development
              using React, Laravel, and Supabase.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`px-6 py-3 border-2 border-blue-500 font-medium rounded-lg ${
                  isDarkMode ? "hover:bg-blue-900/30" : "hover:bg-blue-50"
                } transition-colors`}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Animated background gradient */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                    "linear-gradient(45deg, #8b5cf6, #ec4899)",
                    "linear-gradient(45deg, #ec4899, #3b82f6)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
              />

              {/* Main animated container */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.02, 1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 p-1"
              >
                <div
                  className={`w-full h-full rounded-full ${
                    isDarkMode ? "bg-gray-900" : "bg-white"
                  } flex items-center justify-center`}
                >
                  {/* Animated developer illustration/GIF container */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* GIF/Animated SVG Placeholder */}
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className="relative"
                    >
                      {/* You can replace this with your actual GIF/image */}
                      <div className="text-7xl md:text-8xl mb-2">👨‍💻</div>

                      {/* Animated coding brackets */}
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-2 -left-6 text-4xl"
                      >
                        {"{"}
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="absolute -top-2 -right-6 text-4xl"
                      >
                        {"}"}
                      </motion.div>
                    </motion.div>

                    {/* Floating code elements */}
                    <motion.div
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-8 left-8 text-xs font-mono bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      {"<div>"}
                    </motion.div>

                    <motion.div
                      animate={{
                        x: [0, -15, 0],
                        y: [0, 15, 0],
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                      }}
                      className="absolute bottom-8 right-8 text-xs font-mono bg-purple-500 text-white px-2 py-1 rounded"
                    >
                      {"</>"}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Badges with enhanced animation */}
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  x: [0, 10, 0],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl rotate-12 flex items-center justify-center shadow-lg"
              >
                <div className="text-white text-sm font-bold">Web</div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                  rotate: [0, -15, 0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -left-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl -rotate-12 flex items-center justify-center shadow-lg"
              >
                <div className="text-white font-bold">Mobile</div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full"
                />
              </motion.div>

              {/* New floating element */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 15, 0],
                  rotate: [0, 20, 0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 -right-10 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl rotate-6 flex items-center justify-center shadow-lg"
              >
                <div className="text-white text-xs font-bold">API</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack with Emoji Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-center text-2xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h3>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                }}
                className={`px-5 py-3 rounded-xl flex items-center gap-3 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-white/80"
                } shadow-lg backdrop-blur-sm cursor-default border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                  className="text-2xl"
                >
                  {tech.emoji}
                </motion.div>
                <span className="font-medium text-sm md:text-base">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
