import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-screen primary lg:px-32 p-4 flex flex-col items-center px-10 lg:justify-center lg:gap-44 gap-3 lg:flex-row ">
      <div className="flex flex-row gap-4 place-items-center">
        <Link
          to="https://www.instagram.com/_.wadiiie._/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:green hover:duration-150 duration-150"
        >
          <FaInstagram className="lg:text-3xl text-2xl" />
        </Link>
        <Link
          to="https://github.com/Aceee03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:green hover:duration-150 duration-150"
        >
          <FaGithub className="lg:text-3xl text-2xl" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/wadie-boumediene-391988322/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:green hover:duration-150 duration-150"
        >
          <FaLinkedin className="lg:text-3xl text-2xl" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
