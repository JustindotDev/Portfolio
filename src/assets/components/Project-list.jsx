import { useState } from "react";
import { motion } from "framer-motion";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const projects = [
  {
    title: "Crypto Nest",
    description:
      "Crypto Nest is a personal project designed to provide a seamless and hassle-free experience for monitoring cryptocurrency holdings across multiple wallets. It enables users to track their assets in real time—all within a single, intuitive interface. With a focus on convenience and efficiency, this project aims to simplify crypto portfolio management for both beginners and experienced traders.",
    logo: "./Cryp N.svg",
    techStack: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        name: "HTML",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        name: "CSS",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "JavaScript",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
      },
      {
        src: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
        name: "Zustand",
      },
      {
        src: "https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg",
        name: "Chakra UI",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        name: "Express",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        name: "MongoDB",
      },
    ],
    projectLink: "#",
    codeLink: "https://github.com/JustindotDev/CryptoNest",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application that enables direct messaging between users. It supports user authentication, message history, typing indicators, and text and image messages.",
    logo: "./chat-svgrepo-com.svg",
    techStack: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        name: "HTML",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        name: "CSS",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "JavaScript",
      },
      {
        src: "https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/logo.png",
        name: "Material UI",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
      },
      {
        src: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
        name: "Zustand",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        name: "Express",
      },
      {
        src: "./socketio-icon.svg",
        name: "Socket.IO",
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
        name: "JWT",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        name: "MongoDB",
      },
    ],
    projectLink: "#",
    codeLink: "https://github.com/JustindotDev/Chat-App",
  },
];

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;

  const totalPages = Math.max(1, Math.ceil(projects.length / projectsPerPage));

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  return (
    <motion.div
      className="w-full max-h-[1200px] flex flex-col "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% is visible
    >
      <div className=" w-full lg:w-5xl max-h-[1200px] overflow-hidden flex flex-col  self-center bg-[#f4f4f2] text-white">
        {projects
          .slice(
            currentPage * projectsPerPage,
            (currentPage + 1) * projectsPerPage
          )
          .map((project, index) => (
            <div
              key={index}
              className="bg-[#242124] text-white mt-5 py-5 lg:rounded-lg shadow-lg flex flex-col"
            >
              <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 ">
                <img
                  src={project.logo}
                  alt="Thumbnail"
                  className="w-60 h-50 bg-transparent rounded-lg "
                />

                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl font-bold text-center lg:text-left">
                    {project.title}
                  </h1>
                  <p className="w-80 lg:w-150 text-gray-300 text-sm ml-10 lg:ml-0 text-justify">
                    {project.description}
                  </p>

                  <p className="text-gray-400 text-sm pl-10 lg:pl-0">
                    Built With{" "}
                    <span className="text-cyan-400 text-sm">{" </>"}</span>
                  </p>

                  <div className="flex flex-wrap gap-4 pl-10 lg:pl-0 w-90 lg:w-full">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img
                          src={tech.src}
                          alt={tech.name}
                          className="h-9 w-9"
                        />
                        <span className="text-xs text-gray-400 mt-1">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pl-10 lg:pl-0">
                    <a
                      href={project.projectLink}
                      className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <span className="text-sm font-medium">View project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        viewBox="0 -1 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>

                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-md"
                    >
                      <span className="text-sm   text-gray-400 hover:text-gray-300 transition-colors transform hover:scale-105 duration-300">
                        {"</>"} code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="flex gap-2 mt-2 ml-5 lg:ml-0">
          {/* Previous Page Button */}
          {currentPage > 0 && (
            <button
              onClick={prevPage}
              className="flex items-center gap-1 text-sm px-3 py-2 rounded-sm bg-gray-700 text-white hover:bg-gray-600 transition"
            >
              <MdNavigateBefore className="text-xl" />
              Back
            </button>
          )}

          {/* Page Number Buttons */}
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
            let pageIndex;

            if (totalPages <= 3) {
              pageIndex = i; // If only 1-3 pages, just display all
            } else if (currentPage <= 1) {
              pageIndex = i; // First two pages: show 1,2,3
            } else if (currentPage >= totalPages - 2) {
              pageIndex = totalPages - 3 + i; // Last three pages: show last three
            } else {
              pageIndex = currentPage - 1 + i; // Otherwise, center around `currentPage`
            }

            return (
              <button
                key={pageIndex}
                onClick={() => setCurrentPage(pageIndex)}
                className={`px-4 py-2 rounded-sm font-bold ${
                  currentPage === pageIndex
                    ? "bg-cyan-700 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } transition`}
              >
                {pageIndex + 1}
              </button>
            );
          })}

          {/* Next Page Button */}
          {currentPage < totalPages - 1 && (
            <button
              onClick={nextPage}
              className="flex items-center  px-3 py-2 text-sm rounded-sm bg-gray-700 text-white hover:bg-gray-600 transition"
            >
              Next
              <MdNavigateNext className="text-xl" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectList;
