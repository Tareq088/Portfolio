import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";


const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10 pb-6 mt-20 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
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
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black dark:hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sky-500 transition"
              >
                <FaTwitter size={22} />
              </a>
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
