import React from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-base-100 px-6 md:px-16 py-6"
    >
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold mb-8 text-primary"
        data-aos="fade-up"
      >
        About Me
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-45 bg-blue-500 rounded"></span>
      </h2>

      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          "Electrical & Electronics Engineer ⚡",
          2000,
          "Government Power Plant Engineer ⚙️",
          2000,
          "Passionate Frontend Developer 💻",
          2000,
          "MERN Stack Developer 🚀",
          2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-lg md:text-xl text-secondary font-semibold mb-6"
        repeat={Infinity}
      />

      {/* Description */}
      <p
        className="max-w-3xl text-center text-base-content leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I graduated in Electrical and Electronics Engineering from{" "}
        <span className="font-semibold">
          Khulna University of Engineering & Technology
        </span>
        , and currently work at a government power plant. Alongside my
        engineering career, I have pursued my passion for web development,
        mastering technologies like React Router, Node.js, MongoDB, Firebase
        Authentication, JavaScript, Tailwind CSS, and more. With over{" "}
        <span className="font-semibold text-blue-500">40 completed projects</span>, I have
        grown into a dedicated{" "}
        <span className="font-semibold text-blue-500">MERN stack developer</span> ready to
        create engaging and impactful web applications.
      </p>
    </section>
  );
};

export default About;
