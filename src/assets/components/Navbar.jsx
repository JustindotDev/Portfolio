import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Function to scroll to section smoothly
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id); // Update active section on click
  };

  // Detect which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "home"; // Default section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:bg-[#f4f4f2] bg-[#242124] w-full h-16 md:h-20 lg:h-24 flex gap-42 lg:gap-0 items-end fixed top-0 left-0 z-50 lg:shadow-lg pr-20 font-bold font-['Poppins'] text-md ">
      <h1 className="lg:ml-20 ml-5 b-1 text-lg font-bold text-cyan-400 lg:text-cyan-800 flex">
        <span>{"<"}</span>JustindotDev <span>{"/>"}</span>
      </h1>
      <div className="hidden lg:flex justify-center items-center w-full mb-1 text-gray-800">
        {["Home", "About", "Works", "Contact"].map((section) => {
          const sectionId = section.toLowerCase();
          const isActive = activeSection === sectionId;

          return (
            <h1
              key={section}
              onClick={() => scrollToSection(sectionId)}
              className={`relative mx-7 inline-block cursor-pointer transition-all duration-300
    ${
      isActive
        ? "text-cyan-700 -translate-y-1"
        : "hover:text-cyan-700 hover:-translate-y-1"
    }
    before:absolute before:bottom-0 before:h-[3px] before:bg-cyan-700 before:rounded-full before:transition-all before:duration-300 before:content-['']
    ${
      isActive
        ? "before:w-full before:left-0"
        : "before:w-0 before:left-1/2 hover:before:w-full hover:before:left-0"
    }`}
            >
              {section}
            </h1>
          );
        })}
      </div>

      {/* Mobile Menu Icon (Only visible on small screens) */}
      <div className="lg:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-cyan-400 text-2xl bg-gray-700 p-2 rounded-full mb-2 active:bg-cyan-900 active:text-cyan-500"
        >
          <FaBars />
        </button>
      </div>

      {/* Background Overlay (only visible when menu is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)} // Closes menu when clicked outside
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-70 bg-[#f4f4f2] shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden z-50`}
      >
        {/* Close Button */}
        <div className="flex h-20 w-11/12 items-end border-b-1 border-gray-400 ml-3">
          <h1 className="text-cyan-900 text-xl font-bold  mb-7">
            {"<"}JustindotDev{"/>"}
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-cyan-900 text-2xl bg-gray-300 p-2 rounded-full active:bg-gray-400 active:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Items */}
        <div className="mt-5 flex flex-col items-center gap-6 text-cyan-900 border-b-1 border-gray-400 w-11/12 h-50 ml-3">
          {["Home", "About", "Works", "Contact"].map((section) => (
            <h1
              key={section}
              onClick={() => {
                scrollToSection(section.toLowerCase());
                setIsOpen(false); // Close drawer after clicking
              }}
              className="text-lg font-semibold cursor-pointer hover:text-cyan-500"
            >
              {section}
            </h1>
          ))}
        </div>
        <p className="text-cyan-900/90 text-md font-semibold mt-10 ml-5 ">
          Connect with Me
        </p>
        <div className="flex gap-4 text-cyan-900 ml-5 mt-4 ">
          <a
            href="https://www.instagram.com/_justiiiinn?igsh=MW5xbW9jM2ZuYjZ5Ng=="
            target="_blank"
            className="w-12 h-12 rounded-full bg-gray-400 active:bg-cyan-500 flex items-center justify-center transition-all duration-300 group"
          >
            <FaInstagram className="text-xl active:group-hover:scale-111 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-acebedo-820815320/"
            target="_blank"
            className="w-12 h-12 rounded-full bg-gray-400 active:bg-cyan-500 hover:to-cyan-700 flex items-center justify-center transition-all duration-300 group"
          >
            <FaLinkedin className="text-xl active:group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~014732ff5f31158432"
            target="_blank"
            className="w-12 h-12 rounded-full bg-gray-400 active:bg-cyan-500 flex items-center justify-center transition-all duration-300 group"
          >
            <SiUpwork className="text-xl active:group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/justindotdev"
            target="_blank"
            className="w-12 h-12 rounded-full bg-gray-400 active:bg-cyan-500 flex items-center justify-center transition-all duration-300 group"
          >
            <FaGithub className="text-xl active:group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
