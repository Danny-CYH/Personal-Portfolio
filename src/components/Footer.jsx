import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:john.doe@example.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">John Doe</h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Full-stack developer passionate about creating exceptional
                digital experiences. Always learning, always building, and
                always open to new opportunities.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4 text-lg">Let's Connect</h4>
              <div className="space-y-3 text-gray-400">
                <p className="hover:text-white transition-colors duration-200">
                  <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                </p>
                <p className="hover:text-white transition-colors duration-200">
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </p>
                <p>San Francisco, CA</p>

                {/* Availability Status */}
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-green-400">
                    Available for work
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} John Doe. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2 text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span>and lots of coffee</span>
            </div>

            <div className="text-gray-400 text-sm">
              <p>
                Built with <span className="text-primary-400">React</span> &{" "}
                <span className="text-primary-400">Tailwind CSS</span>
              </p>
            </div>
          </motion.div>

          {/* Fun Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 text-sm">
              P.S. You've reached the end! Thanks for scrolling this far 👋
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
