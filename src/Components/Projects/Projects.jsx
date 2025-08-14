import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Assignment10 from "../../assets/Assignment-10.png";
import Assignment11 from "../../assets/Assignment-11.png";
import Assignment12 from "../../assets/Assignment-12.png";
import { FiExternalLink, FiInfo } from "react-icons/fi";
import { Link } from "react-router";

AOS.init({ duration: 1000, once: true });

const projects = [
  {
    id: 1,
    name: "Manage Life Saving Element",
    image: Assignment12,
    description:
      "A fully functional e-commerce platform to sell and buy Medicine and payment integration.",
    detailsDescription:
      "This project is a fully responsive web application, optimized for mobile, tablet, and laptop devices, ensuring a smooth user experience across all screen sizes. It is a role-based platform with three distinct roles: Admin, Seller, and User, each with specific permissions and capabilities. Admin Features : Full control over users, including account management.Ability to view detailed payment information. Manage product categories with Add, Update, and Delete functionalities. Seller Features:Simple registration process to become a seller.Easy product (medicine) listing system. Access to earnings reports, paid payment details, and other business insights. Here one can sell medicine and earn money. an user can buy medicine so that he/she doesn't need to go outside and as it is online based an user will get some price concession ",
    tech: [
      "React.js",
      "Express.Js",
      "mongoDB",
      "JWT",
      "Stripe Payment",
      "Firebase Authentication",
      "TailwindCSS",
      "HTML",
    ],
    keyFeatures: [
      "Role Based Website",
      "Admin can control the user",
      "Download File in pdf, Table in xls format",
      "Firebase authentication",
      "JWT",
      "Secure payments",
      "Responsive design",
    ],
    challenges: "Handling secure payment gateway integration.",
    solution: "Used Stripe with server-side verification.",
    futurePlan:
      "Add AI-powered product recommendations. User Purchased Product Track Management,",
    liveLink: "https://medicine-selling-e-comme-325f5.web.app/",
    githubRepo: "https://github.com/Tareq088/Medicine-selling-Client-Side",
  },
  {
    id: 2,
    name: "Rent Car",
    image: Assignment11,
    description: "A fully responsive website to rent car and for car rental",
    detailsDescription:
      "This project is a fully responsive web application, optimized for mobile, tablet, and laptop devices, ensuring a smooth user experience across all screen sizes. Here one can add for car Rental. And an user can rent a car according to his/her need. Here One can easily rent car so that anyone doesn't need to go market. Thus one can save time. As all data are stored in database, no one cannot be fraud.",
    tech: [
      "React.js",
      "mongoDB",
      "Firebase Authentication",
      "Express.Js",
      "JWT",
      "TailwindCSS",
      "HTML",
    ],
    keyFeatures: [
      "Car booking system",
      "Car rental system",
      "Info stored in database",
      "Update Car Info",
      "Fully Responsive Design",
      "Dark or Light Mode Integration",
    ],
    challenges: "Managing booking conflicts.",
    solution: "Implemented real-time booking validation.",
    futurePlan: "Integrate GPS tracking, Payment System",
    liveLink: "https://car-rent-app-assignment-10.web.app/",
    githubRepo: "https://github.com/Tareq088/Car-Rent-Client-Side",
  },
  {
    id: 3,
    name: "Find Roommates",
    image: Assignment10,
    description: "Responsive Website for finding roommates",
    detailsDescription:
      "This project is a fully responsive web application, optimized for mobile, tablet, and laptop devices, ensuring a smooth user experience across all screen sizes. Here One can publish that he/she needs roommates along with requirements. And one can communicate with him/her to rent. so, It is a very much need website for students or job holders who needs to stay away from home. It will be very cost effective, less time consuming, less harassment for everyone",
    tech: [
      "React.js",
      "Express.Js",
      "mongoDB",
      "JWT",
      "Firebase Authentication",
      "TailwindCSS",
      "HTML",
    ],
    keyFeatures: [
      "Roommate search",
      "Profile management",
      "all users data are stored in Database",
    ],
    challenges: "Matching algorithms.",
    solution: "Used location and preference filters.",
    futurePlan:
      "Add AI-based roommate suggestions, Payment Management, Google Map Integration etc",
    liveLink: "https://roommate-app-auth.web.app/",
    githubRepo: "https://github.com/Tareq088/Roommates-Find-Client-Side",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400 pb-2"
          data-aos="zoom-in"
        >
          My Projects
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-50 bg-blue-500 rounded"></span>
        </h2>
        <p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg"
          data-aos="fade-up"
        >
          My Some Projects at a glance...
        </p>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative group transition-all duration-300 hover:text-blue-600 cursor-pointer">
                    {project.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 rounded"></span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between gap-2 mt-4">
                 <button
  onClick={() => setSelectedProject(project)}
  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-2 rounded-md hover:from-pink-500 hover:to-orange-500 transition-all duration-300 font-medium cursor-pointer shadow-md hover:shadow-lg"
>
  <FiInfo size={18} />
  View Details
</button>


                  <Link
                    to={project.liveLink}
                    //   target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
                  >
                    <FiExternalLink size={18} />
                    Live Website
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-6 overflow-y-auto max-h-[90vh] relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-white bg-gray-200 hover:bg-red-500 
                            w-10 h-10 flex items-center justify-center rounded-full shadow-md 
                            transition-all duration-300 ease-in-out cursor-pointer"
              >
                ✕
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedProject.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                {selectedProject.detailsDescription}
              </p>
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                Key Features:
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                {selectedProject.keyFeatures.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                Challenges & Solution:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Challenge:</strong> {selectedProject.challenges}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Solution:</strong> {selectedProject.solution}
              </p>
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                Future Plan:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedProject.futurePlan}
              </p>
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                Technologies Used:
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  to={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  <FiExternalLink />
                  View Live Project
                </Link>
                <Link
                  to={selectedProject.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  GitHub Repository
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
