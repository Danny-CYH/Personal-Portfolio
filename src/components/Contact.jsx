import { useState, useRef } from "react";
import { motion } from "framer-motion";
import resume from "../assets/CHENG_YANG_HO.pdf";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  FileText,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact({ isDarkMode }) {
  const formRef = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  // Get environment variables - these are secure and not in your code
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: "" });

    // Validate environment variables are set
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS credentials are not configured");
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Contact form is not configured. Please email me directly.",
      });
      return;
    }

    try {
      // Initialize EmailJS with the public key from environment variable
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message:
          "Message sent successfully! I'll get back to you within 24 hours.",
      });

      // Reset form
      formRef.current.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitting: false,
          success: false,
          error: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);

      let errorMessage =
        "Failed to send message. Please try again or email me directly.";

      if (error.text) {
        errorMessage = error.text;
      } else if (error.message && error.message.includes("Failed to fetch")) {
        errorMessage =
          "Network error. Please check your connection and try again.";
      }

      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: errorMessage,
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "chengyangho14@gmail.com",
      link: "mailto:chengyangho14@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+60 18-9724865",
      link: "tel:+60189724865",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Kedah, Malaysia",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Danny-CYH",
      color: isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200",
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/cheng-yang-ho-6a222b289/",
      color: "hover:bg-blue-600",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/cyh2870/",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              {/* Contact Card */}
              <div
                className={`rounded-2xl p-8 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-xl mb-8`}
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${info.bgColor}`}
                      >
                        <div className={info.color}>{info.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className={`${
                              isDarkMode
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                            } transition-colors`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p
                            className={
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            }
                          >
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-bold mb-4">Follow Me</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.platform}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        } ${social.color} transition-all hover:text-white`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Download Resume */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`rounded-2xl p-6 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20"
                    : "bg-gradient-to-r from-blue-50 to-purple-50"
                } border ${
                  isDarkMode ? "border-blue-500/30" : "border-blue-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-bold">Resume</h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Download my CV
                      </p>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={resume}
                    download="CHENG_YANG_HO_Resume.pdf"
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                  >
                    Download
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div
                className={`rounded-2xl p-8 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-xl`}
              >
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

                {/* Status Messages */}
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-green-500">{status.message}</span>
                    </div>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span className="text-red-500">{status.message}</span>
                    </div>
                  </motion.div>
                )}

                {/* EmailJS Setup Note for Development */}
                {!import.meta.env.VITE_EMAILJS_SERVICE_ID &&
                  !import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
                  !import.meta.env.VITE_EMAILJS_PUBLIC_KEY && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
                    >
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                        <div>
                          <p className="text-yellow-500 font-medium">
                            EmailJS not configured
                          </p>
                          <p className="text-yellow-500/70 text-sm mt-1">
                            Create a .env.local file with
                            VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID,
                            and VITE_EMAILJS_PUBLIC_KEY
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        className={`w-full px-4 py-3 rounded-lg ${
                          isDarkMode
                            ? "bg-gray-900 border-gray-700 focus:border-blue-500"
                            : "bg-white border-gray-300 focus:border-blue-400"
                        } border focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="reply_to"
                        required
                        className={`w-full px-4 py-3 rounded-lg ${
                          isDarkMode
                            ? "bg-gray-900 border-gray-700 focus:border-blue-500"
                            : "bg-white border-gray-300 focus:border-blue-400"
                        } border focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className={`w-full px-4 py-3 rounded-lg ${
                        isDarkMode
                          ? "bg-gray-900 border-gray-700 focus:border-blue-500"
                          : "bg-white border-gray-300 focus:border-blue-400"
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all`}
                      placeholder="Project inquiry or collaboration"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      className={`w-full px-4 py-3 rounded-lg ${
                        isDarkMode
                          ? "bg-gray-900 border-gray-700 focus:border-blue-500"
                          : "bg-white border-gray-300 focus:border-blue-400"
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all resize-none`}
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  {/* Hidden field for EmailJS template */}
                  <input type="hidden" name="to_name" value="Alex Chen" />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p
                    className={`text-sm text-center ${
                      isDarkMode ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    I typically respond within 24 hours
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
