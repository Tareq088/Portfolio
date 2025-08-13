import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="bg-base-100 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-primary text-white font-bold text-lg px-3 py-1 rounded">
            TR
          </div>
          <span className="font-bold text-lg">Tareq Rahman</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-primary transition"
              onClick={() => handleNavClick(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf" // Replace with your resume link
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100 shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-primary transition"
                onClick={() => handleNavClick(link.id)}
              >
                {link.name}
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm w-full"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
