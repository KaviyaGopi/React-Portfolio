import React, { useState, useEffect } from "react";
import kaviya from "../images/kaviya.png";

const Home = () => {
  const [roleText, setRoleText] = useState("");
  const fullRoleText = "Software Developer";
  const [roleIndex, setRoleIndex] = useState(0);

  const technologies = [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "TailwindCSS",
    "SQL",
    "Git",
    "Streamlit",
  ];

  useEffect(() => {
    // Add dark mode class to body on component mount
    document.body.classList.add("dark");
  }, []);

  useEffect(() => {
    // Typing animation
    if (roleIndex < fullRoleText.length) {
      const timeout = setTimeout(() => {
        setRoleText(roleText + fullRoleText[roleIndex]);
        setRoleIndex(roleIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [roleIndex, roleText]);

  return (
    <div className="flex flex-col min-h-screen font-sans transition-colors duration-300 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="flex-grow flex flex-col md:flex-row justify-center items-center px-6 md:px-16 py-12 md:py-20 max-w-7xl mx-auto">
        {/* Left Column - Text */}
        <div className="md:w-1/2 text-center md:text-left md:pr-12 transition-all duration-700 ease-in-out">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Hello, I'm <span className="text-[#EC5500]">Kaviya Gopi</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-[#EC5500]">{roleText}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg mb-8 leading-relaxed text-gray-300">
            Currently pursuing a Master's in Computer Science at
            <span className="font-semibold text-[#EC5500]">
              {" "}
              Stony Brook University
            </span>
            , with a passion for creating innovative and efficient solutions
            through software development.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm transition-colors duration-300 hover:bg-[#EC5500] hover:text-white bg-gray-800 text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="relative transition-all duration-700 ease-in-out">
            <div className="absolute inset-0 bg-[#EC5500] rounded-3xl opacity-20 blur-xl pulse-slow"></div>
            <img
              src={kaviya}
              className="w-64 h-64 md:w-80 md:h-80 rounded-3xl shadow-lg relative z-10 object-cover hover:scale-105 transition-transform duration-300"
              alt="Kaviya Gopi"
            />

            {/* Floating elements decoration */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500 rounded-full opacity-70 z-0 float-animation"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-70 z-0 float-animation-delayed"></div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="text-[#EC5500]">About</span> Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#EC5500] mt-2"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="leading-relaxed mb-6 text-gray-300">
                Through my academic journey and hands-on projects, I've
                developed a strong foundation in software development. I'm
                passionate about creating applications that solve real-world
                problems and provide excellent user experiences.
              </p>
              <p className="leading-relaxed text-gray-300">
                My experience ranges from full-stack web development to data
                analysis, with a particular interest in creating intuitive user
                interfaces and efficient backend systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Education & Goals</h3>
              <div className="mb-4">
                <p className="font-medium">Master's in Computer Science</p>
                <p className="text-gray-400">
                  Stony Brook University, 2024-Present
                </p>
              </div>
              <p className="leading-relaxed text-gray-300">
                My objective is to secure a software development role where I
                can apply my technical expertise, hands-on project experience,
                and problem-solving skills to build innovative and efficient
                solutions. I am eager to contribute to dynamic teams and
                organizations that value innovation and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-5deg);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }

        .pulse-slow {
          animation: pulse-slow 3s infinite;
        }

        .float-animation {
          animation: float 4s ease-in-out infinite;
        }

        .float-animation-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
