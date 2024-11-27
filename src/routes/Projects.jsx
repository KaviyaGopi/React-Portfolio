import React from "react";
import Nav from "../Components/Nav";

function Projects() {
  const projectData = [
    {
      title: "Donation App",
      image: "https://media.istockphoto.com/photos/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-picture-id1353332258?b=1&k=20&m=1353332258&s=170667a&w=0&h=tsU8wdJuXCIXJ8wTC8PgLAin3A5sDAStCbqwB8erLyI=",
      description: [
        "Integrate all kinds of donations in one page like food, books, and blood donation.",
        "Made using Python and Streamlit.",
        "Recreated from scratch using HTML, CSS, and JavaScript."
      ],
      link: "https://star-rak.github.io"
    },
    {
      title: "Website Clone",
      image: "https://www.yarddiant.com/images/copy-a-website-code-and-make-it-your-own.jpg",
      description: [
        "Cloned and developed websites like Omnifood and Mega from scratch.",
        "Gained confidence in Flexbox and CSS Grid concepts.",
        "Made using HTML, CSS, and Basic JavaScript"
      ],
      link: "https://kaviyagopi.github.io/Omnifood-Desktop-and-Responsive/"
    },
    {
      title: "Rolling Dice Game",
      image: "https://media.istockphoto.com/id/1151921706/photo/four-glowing-dice.jpg?s=612x612&w=0&k=20&c=XiVxs9Fomh8jwxQu7f7aKeOEET0PHY5DKIe2dyhDpz0=",
      description: [
        "Unique approach to learning JavaScript through game development.",
        "Created games to make learning fun.",
        "Project uses HTML, CSS, and JavaScript"
      ],
      link: "https://kaviyagopi.github.io/Rolling-Dice-Game/"
    },
    {
      title: "Guess The Number",
      image: "https://i.ytimg.com/vi/E-Voff821tE/maxresdefault.jpg",
      description: [
        "Game selects a mystery number with hint mechanism.",
        "Player guesses the number with progressive feedback.",
        "Made using HTML, CSS, and JavaScript"
      ],
      link: "https://kaviyagopi.github.io/Guess-The-Number/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      <div className="container mx-10 my-20 px-20 md:px-40 lg:px-60 py-8 md:pt-16 md:pb-8">
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-8 md:mb-16">
          PROJECTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index}
              className="
                bg-[#f7f7f7] rounded-3xl 
                overflow-hidden 
                shadow-lg 
                hover:shadow-xl 
                transform hover:-translate-y-2 
                transition-all 
                duration-300 
                group
              "
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>

              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  {project.title}
                </h2>

                <ul className="text-sm md:text-base mb-6 space-y-2">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-gray-700">
                      • {desc}
                    </li>
                  ))}
                </ul>

                <div className="text-right">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="
                      inline-block 
                      bg-[#B85839] 
                      text-white 
                      px-4 py-2 
                      rounded-lg 
                      hover:bg-[#EC5500] 
                      transition-colors
                    "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;