// src/Pages/Education/EducationalQualification.jsx
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUniversity, FaSchool } from "react-icons/fa";

AOS.init({ duration: 1000, once: true });

const qualifications = [
  {
    id: 1,
    title: "B.Sc. in Electrical and Electronics Engineering (EEE)",
    institution: "Khulna University of Engineering and Technology (KUET)",
    year: "Graduated",
    icon: <FaUniversity className="text-3xl text-blue-500" />,
    aos: "fade-right",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate (HSC) - Science",
    institution: "Science Background",
    year: "",
    icon: <FaSchool className="text-3xl text-green-500" />,
    aos: "fade-left",
  },
  {
    id: 3,
    title: "Secondary School Certificate (SSC) - Science",
    institution: "Science Background",
    year: "",
    icon: <FaSchool className="text-3xl text-orange-500" />,
    aos: "fade-right",
  },
];

const Education = () => {
  return (
    <div id="education" className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <h2
        className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400"
        data-aos="zoom-in"
      >
        Educational Qualification
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-105 bg-blue-500 rounded"></span>
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>

        {qualifications.map((item, index) => (
          <div
            key={item.id}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            data-aos={item.aos}
          >
            <div className="w-5/12"></div>
            <div className="z-10 flex items-center justify-center w-10 h-10 bg-white border-4 border-blue-300 rounded-full shadow-lg">
              {item.icon}
            </div>
            <div className="w-5/12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.institution}
              </p>
              {item.year && (
                <p className="text-sm text-blue-500 mt-1">{item.year}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
