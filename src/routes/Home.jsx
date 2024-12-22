import kaviya from "../images/kaviya.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Blank Space at the Top */}
      <div className="h-16"></div>{" "}
      {/* Adds blank space at the top of the page */}
      {/* Profile Section */}
      <div className="flex-grow bg-white flex flex-col justify-center items-center px-6">
        {/* Space before Image */}
        <div className="mt-12"></div> {/* Adds space above the image */}
        {/* Profile Image */}
        <img
          src={kaviya}
          className="w-56 h-58 rounded-3xl shadow-lg hover:scale-105 transform transition-transform duration-300"
          alt="profile"
        />
        {/* Name */}
        <p className="text-[#EC5500] text-center mt-6 text-4xl font-bold">
          Kaviya Gopi
        </p>
        {/* Introduction Text */}
        <p className="text-center text-lg mt-6 leading-relaxed text-gray-700">
          I am currently pursuing a Master’s degree in{" "}
          <span className="font-bold text-[#EC5500]">Computer Science</span> at{" "}
          <span className="font-bold text-[#EC5500]">
            Stony Brook University
          </span>
          <br /> with a strong passion for software development.
          <br />
          My objective is to secure a software development role where I can
          apply my technical expertise, hands-on project experience, <br /> and
          problem-solving skills to build innovative and efficient solutions.
        </p>
        <p className="text-center text-lg mt-6 leading-relaxed text-gray-700">
          Through my portfolio, I aim to showcase my proficiency in programming
          languages like Python and JavaScript, <br /> my experience with
          full-stack development, and my dedication to creating impactful
          applications. <br />I am eager to contribute to dynamic teams and
          organizations that value innovation and continuous learning.
        </p>
        {/* Interactive Buttons */}
        <div className="mt-8 space-x-4">
          <a
            href="https://linkedin.com/in/kaviya-gopi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#EC5500] text-white rounded-full hover:bg-orange-700 transition-colors duration-300 shadow-md"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/KaviyaGopi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300 shadow-md"
          >
            GitHub
          </a>
          <a
            href="mailto:kaviya.gopi@stonybrook.edu"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            Contact Me
          </a>
        </div>
        {/* Space After Interactive Buttons */}
        <div className="mt-8"></div>{" "}
        {/* Adds space after the interactive buttons */}
      </div>
      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-gray-500">
        &copy; 2024 Kaviya Gopi | Built with ❤️ using React & TailwindCSS
      </footer>
    </div>
  );
};

export default Home;
