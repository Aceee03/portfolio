import React, { useState } from "react";
import patternRings from "../assets/pattern-rings.svg";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser";

const Footer = () => {
  // State to hold form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize EmailJS
  emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

  // Handle form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Send email function
  const sendMail = () => {
    const { name, email, message } = formValues;

    // Check if fields are filled
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Parameters to send with emailjs
    const templateParams = {
      from_name: name, 
      email_id: email, 
      message: message,
    };

    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams).then(
      (result) => {
        alert("Email sent successfully!");
        console.log("Email sent: ", result.text);
      },
      (error) => {
        console.error("Failed to send email: ", error.text);
      }
    );
  };

  return (
    <>
      <div className="secondary relative flex flex-col lg:flex-row lg:justify-between px-8 py-8 lg:px-52 lg:py-16 mt-8">
        <img
          src={patternRings}
          className="h-28 lg:h-36 absolute -left-64 lg:-left-28 lg:bottom-64"
        />
        <div className="flex flex-col lg:basis-1/2 gap-8 mb-16">
          <h1 className="font-bold title lg:text-7xl text-white">Contact me</h1>
          <p className="lg:text-2xl">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        {/* Email Input Fields */}
        <div className="flex flex-col gap-8">
          <input
            className="px-6 pr-24 py-4 text-xl secondary focus:outline-none border-b-2 focus:border-b-[#3cd092]"
            type="text"
            placeholder="NAME"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <input
            className="px-6 pr-24 py-4 text-xl secondary focus:outline-none border-b-2 focus:border-b-[#3cd092]"
            type="email"
            placeholder="EMAIL"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="px-6 pr-24 py-4 text-xl secondary focus:outline-none border-b-2 focus:border-b-[#3cd092]"
            placeholder="MESSAGE"
            name="message"
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            className="text-white font-semibold hover:text-[#3cd092] hover:duration-150 duration-150 place-self-end underline underline-offset-8 decoration-2 decoration-[#3cd092] text-xl"
            onClick={sendMail}
          >
            Send Email
          </button>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Footer;
