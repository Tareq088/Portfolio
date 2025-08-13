import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ProfilePic from "../../assets/Profile Picture.jpg";
import { Link } from "react-router";

const Home = () => {
  return (
    <section id="home"
      className="flex flex-col-reverse md:flex-row py-10 items-center justify-center gap-10 bg-base-200 container mx-auto"
    >
      {/* Left Social Links */}
      <div className="flex md:flex-col items-center gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary transition"
        >
          <FaLinkedin />
        </a>
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
          React, TailwindCSS, and the latest frontend technologies.
        </p>

        <Link
          href="/resume.pdf" // replace with your actual resume link
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4"
        >
          DownLoad Resume
        </Link>
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

export default Home;
