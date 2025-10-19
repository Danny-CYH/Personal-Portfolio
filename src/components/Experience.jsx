import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const experiences = [
    {
      id: 1,
      role: "FreeLancer - Frontend Developer",
      company: "-",
      period: "2023 - Present",
      location: "-",
      description:
        "Getting a project from the company for developing or maintaining the project",
      achievements: [
        "Experience working on the project alone",
        "Manage to solve the problem within the time",
        "Better improvement on the communication with the client",
      ],
    },
    {
      id: 2,
      role: "Backend Developer",
      company: "Syarikat Air Darul Aman",
      period: "2023 January - 2023 June",
      location: "On-Site",
      description:
        "Performing my first internship on the company as backend developer and developing the Clinic Panel site for company.",
      achievements: [
        "Contribute the project by developing the project using Laravel.",
        "Learning new knowledge about new technologies and programming language.",
        "Received positif feedback from the company to the project",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-blue-500">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } mb-12`}
              >
                {/* Timeline Line */}
                <div className="flex items-center justify-center md:w-24 relative">
                  <div className="hidden md:block absolute top-0 bottom-0 w-0.5 bg-blue-500"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 ml-0 md:ml-6 mt-4 md:mt-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-blue-400 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm mt-2 sm:mt-0">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-white">
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
