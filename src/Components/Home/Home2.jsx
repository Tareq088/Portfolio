import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ProfilePic from "../../assets/Profile Picture.jpg";
import { Link } from "react-router";

const Home2 = () => {
   // ✅ NEW FUNCTION: Generate Resume PDF

  return (
    <section id="home"
      className="flex flex-col-reverse md:flex-row py-10 items-center justify-around bg-base-200 container mx-auto"
    >
      {/* Left Social Links */}
      <div className="flex md:flex-col items-center gap-6">
        <Link
          to="https://github.com/Tareq088"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary transition"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/tareq-rahman-ab29221b0/"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary transition"
        >
          <FaLinkedin />
        </Link>
      </div>

      {/* Middle Info */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
        <h1 className="text-4xl md:text-5xl font-bold">Tareq Rahman</h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "MERN STACK DEVELOPER",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl text-primary font-semibold"
          repeat={Infinity}
        />
        <p className="max-w-md mt-2 text-base-content">
          I build responsive, user-friendly, and modern web applications using
          React,mongoDB, ExpressJs, NodeJs, TailwindCSS, and the latest frontend technologies.
        </p>
        <a
          href="/Tareq Rahman Resume.pdf"
          download
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <FaDownload className="text-lg" />
          Download Resume
        </a>
      </div>

      {/* Right Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={ProfilePic} // replace with your image path
          alt="Tareq Rahman"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home2;
