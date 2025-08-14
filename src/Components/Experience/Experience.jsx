import React from "react";
import { FaBuilding, FaMapMarkerAlt, FaChalkboardTeacher } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="py-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
              <h2
        className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400"
        data-aos="zoom-in"
      >
        Professional Experiences
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-105 bg-blue-500 rounded"></span>
      </h2>
        <div className="space-y-8">
          {/* Experience 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <FaBuilding className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
              <h3 className="text-xl font-semibold">
                Assistant Engineer – Bangladesh Power Development Board
              </h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              2019 – Present
            </p>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <span>
                Currently: Khulna 330 MW CCPP, Khulna, Bangladesh  
                <br />
                Previously: Bera 70 MW Peaking Power Plant, Pabna, Bangladesh
              </span>
            </div>
            <p>
              Responsible for overseeing plant operations, maintenance, and performance optimization.  
              Contributed to increasing operational efficiency through systematic troubleshooting and technical solutions.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <FaChalkboardTeacher className="text-green-600 dark:text-green-400 mr-3 text-xl" />
              <h3 className="text-xl font-semibold">
                Faculty Member – Northern University Bangladesh
              </h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Before 2019
            </p>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <p>
              Taught undergraduate courses in Electrical and Electronic Engineering, focusing on  
              power systems, electronics, and practical laboratory sessions. Guided students in  
              academic projects and career development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
