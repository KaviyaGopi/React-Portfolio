import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projectData = [
    {
      title: "Donation App",
      image:
        "https://media.istockphoto.com/photos/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-picture-id1353332258?b=1&k=20&m=1353332258&s=170667a&w=0&h=tsU8wdJuXCIXJ8wTC8PgLAin3A5sDAStCbqwB8erLyI=",
      description: [
        "Integrate all kinds of donations in one page like food, books, and blood donation.",
        "Made using Python and Streamlit.",
        "Recreated from scratch using HTML, CSS, and JavaScript.",
      ],
      link: "https://star-rak.github.io",
      category: "web",
      technologies: ["Python", "Streamlit", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Website Clone",
      image:
        "https://www.yarddiant.com/images/copy-a-website-code-and-make-it-your-own.jpg",
      description: [
        "Cloned and developed websites like Omnifood and Mega from scratch.",
        "Gained confidence in Flexbox and CSS Grid concepts.",
        "Made using HTML, CSS, and Basic JavaScript",
      ],
      link: "https://kaviyagopi.github.io/Omnifood-Desktop-and-Responsive/",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Flexbox", "CSS Grid"],
    },
    {
      title: "Rolling Dice Game",
      image:
        "https://media.istockphoto.com/id/1151921706/photo/four-glowing-dice.jpg?s=612x612&w=0&k=20&c=XiVxs9Fomh8jwxQu7f7aKeOEET0PHY5DKIe2dyhDpz0=",
      description: [
        "Unique approach to learning JavaScript through game development.",
        "Created games to make learning fun.",
        "Project uses HTML, CSS, and JavaScript",
      ],
      link: "https://kaviyagopi.github.io/Rolling-Dice-Game/",
      category: "game",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Guess The Number",
      image: "https://i.ytimg.com/vi/E-Voff821tE/maxresdefault.jpg",
      description: [
        "Game selects a mystery number with hint mechanism.",
        "Player guesses the number with progressive feedback.",
        "Made using HTML, CSS, and JavaScript",
      ],
      link: "https://kaviyagopi.github.io/Guess-The-Number/",
      category: "game",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projectData
      : projectData.filter((project) => project.category === selectedFilter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "game", label: "Games" },
  ];

  useEffect(() => {
    // Add dark mode class to body on component mount
    document.body.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Nav />

      <div className="container mx-auto px-6 py-16 max-w-7xl ml-20 md:ml-24">
        <div className="text-center">
          <h1 className="font-bold text-4xl md:text-5xl mb-4 animate-fade-in">
            My <span className="text-[#EC5500]">Projects</span>
          </h1>

          <div className="w-24 h-1 bg-[#EC5500] mx-auto mb-12 animate-width"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delayed">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                selectedFilter === filter.id
                  ? "bg-[#EC5500] text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg bg-gray-800/60 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300 group hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#EC5500] text-white px-4 py-2 rounded-lg hover:bg-[#d04a00] transition-colors text-sm font-medium"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-100">
                  {project.title}
                </h2>

                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-gray-300 text-sm flex items-start"
                    >
                      <span className="text-[#EC5500] mr-2 mt-1">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* "More Projects Coming Soon" Section */}
        <div className="mt-16 text-center animate-fade-in-delayed-more">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            More Projects Coming Soon
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm constantly working on new projects and expanding my skills.
            Check back soon to see what I'm building next!
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes width-animation {
          0% {
            width: 0;
          }
          100% {
            width: 96px;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.6s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-fade-in-delayed-more {
          animation: fade-in 0.6s ease forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease forwards;
          opacity: 0;
        }

        .animate-width {
          animation: width-animation 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default Projects;
