import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";
import Home2 from "../Home/Home2";

// ✅ ADDED: jsPDF imports
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "jspdf-autotable";
import profilePic from "../../assets/Profile Picture.jpg"; //


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ NEW FUNCTION: Generate Resume PDF
 const handleDownloadResume = () => {
  const doc = new jsPDF();

  // Profile Image
  doc.addImage(profilePic, "JPEG", 15, 10, 30, 30);

  // Name & Title
  doc.setFontSize(18);
  doc.text("Tareq Rahman", 50, 20);
  doc.setFontSize(12);
  doc.text("Assistant Engineer | Web Developer", 50, 28);

  // Contact Info
  doc.setFontSize(10);
  doc.text("📧 tareq@example.com | 📱 +8801XXXXXXXXX", 50, 36);
  doc.text("📍 Khulna, Bangladesh", 50, 42);

  // Education
  doc.setFontSize(14);
  doc.text("Education", 15, 55);
  autoTable(doc, {
    startY: 60,
    head: [["Degree", "Institution", "Year"]],
    body: [
      ["B.Sc in EEE", "XYZ University", "2015"],
      ["M.Sc in EEE", "ABC University", "2018"],
    ],
  });

  // Experience
  doc.setFontSize(14);
  doc.text("Experience", 15, doc.lastAutoTable.finalY + 10);
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [["Position", "Organization", "Duration", "Location"]],
    body: [
      [
        "Assistant Engineer",
        "Bangladesh Power Development Board",
        "2019 - Present",
        "Khulna 330 MW CCPP & Bera 70 MW Peaking Plant, Pabna",
      ],
      [
        "Faculty Member",
        "Northern University Bangladesh",
        "Before 2019",
        "Dhaka, Bangladesh",
      ],
    ],
  });

  // Skills
  doc.setFontSize(14);
  doc.text("Skills", 15, doc.lastAutoTable.finalY + 10);
  doc.setFontSize(10);
  doc.text(
    "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Firebase, Git, Problem Solving",
    15,
    doc.lastAutoTable.finalY + 18
  );

  doc.save("Tareq_Rahman_Resume.pdf");
};


  return (
    <div>
      <nav className="bg-base-100 shadow-md sticky top-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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
                className={`cursor-pointer transition ${
                  activeSection === link.id
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* ✅ CHANGED: Resume Button now calls handleDownloadResume */}
          <div className="hidden md:block">
            
            <button
              onClick={() => {
                handleDownloadResume();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <FaDownload className="text-lg" />
              Download Resume
            </button>
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
                  className={`cursor-pointer transition ${
                    activeSection === link.id
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.name}
                </li>
              ))}
              {/* ✅ CHANGED: Mobile resume download */}
              <li>
                <button
                  onClick={() => {
                    handleDownloadResume();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <FaDownload className="text-lg" />
                  Download Resume
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Sections */}
      <section id="home">
        <Home2 />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Navbar;
