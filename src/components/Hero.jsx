import { FaWhatsapp } from "react-icons/fa";
import myImage from "../assets/my_image.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Instagram,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 w-full">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Danny{" "}
                <span className="text-blue-600 dark:text-blue-400">Cheng</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A passionate developer with expertise in Full Stack Development. I
              enjoy building responsive websites, mobile applications, and SaaS
              platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg w-full sm:w-auto">
                <Download size={20} />
                Download Resume
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 text-gray-700 dark:text-gray-300 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg w-full sm:w-auto">
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/BrandonCYH",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "www.linkedin.com/in/cheng-yang-ho-6a222b289",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/cyh2870?igsh=amo5MTRqeHkwc2R5",
                  label: "Instagram",
                },
                {
                  icon: FaWhatsapp,
                  href: "https://wa.me/60189724865?text=Hello",
                  label: "Whatsapp",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0"
                  aria-label={label}
                >
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image - Hidden on very small screens, shown from sm upwards */}
          <div className="relative order-first lg:order-last w-full flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform -rotate-6"></div>

              {/* Profile Image */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-4 sm:border-8 border-white dark:border-gray-800 shadow-2xl w-full h-full">
                <img
                  src={myImage}
                  alt="Danny CYH"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 lg:mt-8">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
