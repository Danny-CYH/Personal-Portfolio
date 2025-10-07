import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Intro Text */}
          <motion.p
            variants={itemVariants}
            className="text-primary-600 font-medium mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            John Doe
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-600 mb-8"
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I'm a full-stack developer specializing in building exceptional
            digital experiences. Currently, I'm focused on creating accessible,
            human-centered products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:john@example.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-gray-600 transition-colors p-3"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
