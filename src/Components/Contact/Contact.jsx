// src/Pages/Contact/Contact.jsx
import React, { useEffect,useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail } from "react-icons/md";
import { FaPaperPlane,FaUser } from "react-icons/fa";

const Contact = () => {
 const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

 const onSubmit = () => {
    console.log(form.current)
  emailjs
    .sendForm(
      "service_5r2qduc",
      "template_x7i4bwk",
      form.current,
      "lmYegjTFebJCIV6jg"
    )
    .then(() => {
      alert("Message sent successfully!");
      reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Something went wrong. Please try again.");
    });
};


  return (
    <div id="contact" className="bg-gray-50 dark:bg-gray-900 py-6 px-4">
      {/* Heading */}
      <div className="text-center mb-10" data-aos="zoom-in">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 relative inline-block">
          Contact Me
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-50 bg-blue-500 rounded"></span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          Have a project idea,or any question, or just want to say hello? Fill out the
          form below and I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <form ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6"
        data-aos="fade-up"
      >
                    {/* name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Name
          </label>
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <span className="px-3 text-gray-500">
              <FaUser/>
            </span>
            <input
              type="text"
              placeholder="Name"
              {...register("from_name", { required: true })}
              className="w-full px-3 py-2 bg-transparent outline-none text-gray-800 dark:text-gray-200"
            />
          </div>
          {errors.from_name && (
            <p className="text-red-500 text-sm mt-1">Name is required</p>
          )}
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address
          </label>
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <span className="px-3 text-gray-500">
              <MdEmail />
            </span>
            <input
              type="email"
              placeholder="your@email.com"
              {...register("from_email", { required: true })}
              className="w-full px-3 py-2 bg-transparent outline-none text-gray-800 dark:text-gray-200"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Message
          </label>
          <textarea
            placeholder="Write your message here..."
            {...register("message", { required: true })}
            rows="5"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-transparent outline-none text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">Message is required</p>
          )}
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition transform hover:scale-105"
        >
          <FaPaperPlane /> Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
