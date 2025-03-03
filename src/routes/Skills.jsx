import React, { useEffect, useState } from "react";

// Simple Nav component defined within the file
const Nav = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#EC5500] font-bold text-xl">Portfolio</div>
        <div className="flex space-x-6">
          <a
            href="/"
            className="text-white hover:text-[#EC5500] transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-[#EC5500] transition-colors"
          >
            About
          </a>
          <a
            href="/skills"
            className="text-white hover:text-[#EC5500] border-b-2 border-[#EC5500]"
          >
            Skills
          </a>
          <a
            href="/projects"
            className="text-white hover:text-[#EC5500] transition-colors"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="text-white hover:text-[#EC5500] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

// Custom icon components using SVG instead of lucide-react
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#EC5500]"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DatabaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#EC5500]"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const PenToolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#EC5500]"
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    <path d="M2 2l7.586 7.586"></path>
    <circle cx="11" cy="11" r="2"></circle>
  </svg>
);

const GitBranchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#EC5500]"
  >
    <line x1="6" y1="3" x2="6" y2="15"></line>
    <circle cx="18" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>
);

function Skills() {
  const [animate, setAnimate] = useState(false);

  // Apply dark mode class to body element and trigger animations
  useEffect(() => {
    document.body.classList.add("dark");
    // Delay animation to allow page rendering
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const programmingLanguages = [
    { name: "Python", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "Java", level: 70, color: "bg-red-500" },
    { name: "C", level: 65, color: "bg-purple-500" },
  ];

  const webTechnologies = [
    { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
    { name: "ReactJS", level: 85, color: "bg-cyan-500" },
    { name: "NodeJS", level: 70, color: "bg-green-500" },
    { name: "Bootstrap", level: 80, color: "bg-indigo-500" },
    { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
  ];

  const databases = [
    { name: "MongoDB", level: 85, color: "bg-green-600" },
    { name: "MySQL", level: 60, color: "bg-blue-600" },
  ];

  const otherTools = [
    { name: "Git", level: 75, color: "bg-red-600" },
    { name: "Figma", level: 90, color: "bg-purple-600" },
    { name: "Adobe Illustrator", level: 70, color: "bg-orange-600" },
    { name: "Adobe Photoshop", level: 70, color: "bg-blue-600" },
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4 group">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </span>
        <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
          style={{
            width: animate ? `${skill.level}%` : "0%",
            transitionDelay: "0.1s",
          }}
        ></div>
      </div>
    </div>
  );

  const SkillCategory = ({ title, skills, icon }) => (
    <div className="transform hover:scale-105 transition-all duration-300 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 mb-8">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-bold text-[#EC5500] ml-2">{title}</h2>
      </div>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-16">
        <div
          className="opacity-0 animate-fade-in"
          style={{ animation: animate ? "fadeIn 0.8s forwards" : "none" }}
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-[#EC5500]">
            My Skills
          </h1>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <SkillCategory
              title="Programming Languages"
              skills={programmingLanguages}
              icon={<CodeIcon />}
            />

            <SkillCategory
              title="Web Technologies"
              skills={webTechnologies}
              icon={<PenToolIcon />}
            />

            <SkillCategory
              title="Database"
              skills={databases}
              icon={<DatabaseIcon />}
            />

            <SkillCategory
              title="Other Tools"
              skills={otherTools}
              icon={<GitBranchIcon />}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;
