import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_cha53ko", // Replace with your EmailJS Service ID
        "template_e9tk45a", // Replace with your EmailJS Template ID
        form.current,
        "fZ552p8DPnhCVIbWt" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSuccessMessage("Message sent successfully!");
          setIsSending(false);
          form.current.reset(); // Clear form after submission
        },
        (error) => {
          console.error("Failed to send email.", error.text);
          setSuccessMessage("Failed to send message. Try again.");
          setIsSending(false);
        }
      );
  };

  // Clear the success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      return () => clearTimeout(timer); // Cleanup function
    }
  }, [successMessage]);

  return (
    <motion.div
      className="w-3/5 max-h-full grid justify-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% is visible
    >
      <div className="w-160 h-130 py-5 grid justify-center shadow-lg shadow-gray-900/30 rounded-3xl">
        <form ref={form} onSubmit={sendEmail} className="w-145">
          <div className="flex gap-65 font-semibold text-cyan-900">
            <label htmlFor="name" className="mt-2">
              Name
            </label>
            <label htmlFor="phone" className="mt-2">
              Phone
            </label>
          </div>
          <div className="flex gap-5">
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-70 h-12 p-2 rounded-md border-2 border-cyan-900 mt-1 placeholder:text-sm outline-cyan-700"
            />
            <input
              name="phone"
              type="number"
              required
              placeholder="Phone Number"
              className="w-70 h-12 p-2 rounded-md border-2 border-cyan-900 mt-1 placeholder:text-sm outline-cyan-700"
            />
          </div>
          <div className="flex gap-66 mt-5 font-semibold text-cyan-900">
            <label htmlFor="email">Email</label>
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="flex gap-5">
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-70 h-12 p-2 rounded-md border-2 border-cyan-900 mt-1 placeholder:text-sm outline-cyan-700"
            />
            <input
              name="subject"
              type="text"
              required
              placeholder="Subject"
              className="w-70 h-12 p-2 rounded-md border-2 border-cyan-900 mt-1 placeholder:text-sm outline-cyan-700"
            />
          </div>
          <label htmlFor="message" className="mt-5 font-semibold text-cyan-900">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-145 max-w-145 h-45 p-3 pt-2 rounded-md border-2 border-cyan-900 resize-none leading-tight mt-1 placeholder:text-sm outline-cyan-700"
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className="bg-cyan-900 w-full relative flex justify-center items-center gap-2 h-12 mt-3 rounded-full text-white font-semibold hover:bg-cyan-700 transition-all duration-300 cursor-pointer group px-4"
          >
            {/* Left Arrow (Initially Hidden) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-48 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
              viewBox="0 -1 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>

            {/* Text - Moves Slightly Right */}
            <span className="relative transition-all duration-300 group-hover:translate-x-2 group-hover:scale-98">
              {isSending ? "Sending..." : "Send Your Message"}
            </span>

            {/* Right Arrow (Initially Visible) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-48 opacity-100 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300"
              viewBox="0 -1 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {successMessage && (
            <p className="mt-2 text-cyan-700 transition-opacity duration-500 ease-in-out opacity-100">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
