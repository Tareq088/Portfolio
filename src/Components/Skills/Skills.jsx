// src/Pages/Skills/Skills.jsx
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGoogle,
  FaLock,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaFigma,
} from "react-icons/fa";

AOS.init({ duration: 1000, once: true });

const skills = [
  { name: "React.js", projects: 8, icon: <FaReact className="text-sky-500" /> },
  { name: "Express.js", projects: 7, icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", projects: 6, icon: <FaDatabase className="text-green-600" /> },
  { name: "Firebase", projects: 7, icon: <FaGoogle className="text-yellow-500" /> },
  { name: "JWT", projects: 5, icon: <FaLock className="text-red-500" /> },
  { name: "JavaScript", projects: 30, icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "Tailwind CSS", projects: 30, icon: <FaCss3Alt className="text-sky-400" /> },
  { name: "Figma", projects: 20, icon: <FaFigma className="text-pink-500" /> },
  { name: "HTML", projects: 30, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", projects: 30, icon: <FaCss3Alt className="text-blue-500" /> },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      {/* Heading */}
      <h2
        className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400 pb-2"
        data-aos="zoom-in"
      >
        Skills and Technologies
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-100 bg-blue-500 rounded"></span>
      </h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition transform hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-5xl">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {skill.name}
            </h3>
            {skill.projects && (
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {skill.projects} Projects
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
