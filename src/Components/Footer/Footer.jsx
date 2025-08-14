import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6  border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Md. Tareq Rahman
            </h3>
            <p className="max-w-sm">
              Passionate MERN stack developer creating beautiful, responsive, 
              and user-friendly web applications. Always learning, always building.
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Follow Me
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="https://github.com/Tareq088"
                className="text-gray-500 hover:text-black dark:hover:text-white transition"
              >
                <FaGithub size={22} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/tareq-rahman-ab29221b0/" 
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <FaLinkedin size={22} />
              </Link>       
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300 dark:border-gray-700"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} Md. Tareq Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
