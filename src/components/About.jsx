// components/About.jsx
import React from "react";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Creating visually appealing and user-friendly interfaces",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing for speed and smooth user experiences",
    },
    {
      icon: Users,
      title: "User Focused",
      description: "Putting users at the center of every design decision",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 lg:py-24 bg-gray-50 dark:bg-gray-800 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4 lg:mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg max-w-2xl mx-auto px-4">
            Passionate in web and mobile development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center lg:text-left">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-400">
              <p className="leading-relaxed text-base lg:text-lg text-center lg:text-left">
                I'm a passionate full-stack developer specializing in modern web
                and mobile technologies. I love solving complex problems,
                designing beautiful and interactive page, and developing a
                software.
              </p>
              <p className="leading-relaxed text-base lg:text-lg text-center lg:text-left">
                When I'm not coding, you'll find me exploring new technologies,
                learning new programming language, or sharing knowledge and
                experience with other developer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-4 max-w-xs mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 lg:mb-2">
                  2
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 lg:mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Learning Technology
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-4 lg:p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 group hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                  <Icon
                    className="text-blue-600 dark:text-blue-400 lg:w-6 lg:h-6"
                    size={20}
                  />
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-center lg:text-left mb-2 text-base lg:text-lg">
                  {title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center lg:text-left leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
