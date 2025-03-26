import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    <div className="bg-[#f4f4f2] w-full h-24 flex items-end fixed top-0 left-0 z-50 shadow-lg pr-20 font-bold font-['Poppins'] text-md">
      <h1 className="ml-20 mb-1 text-lg font-bold text-cyan-800 flex">
        <span>{"<"}</span>JustindotDev <span>{"/>"}</span>
      </h1>
      <div className="flex justify-center items-center w-full mb-1 text-gray-800">
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
    </div>
  );
};

export default Navbar;
