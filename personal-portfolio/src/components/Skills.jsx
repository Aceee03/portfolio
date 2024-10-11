import React from "react";
import { icons } from "../assets/constants.jsx";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";

const Skills = () => {
  return (
    <div className="flex flex-col primary mx-8 lg:gap-14 gap-8 lg:mx-52 pt-12 border-t-[1px] mt-14 mb-14">
      {/* Skills Title */}
      <h1 className="title">Skills</h1>
      {/* Skills Icons Grid */}
      <div className="grid grid-cols-4">
        {icons.map((value, index) =>
          [0, 2, 5, 7].includes(index) ? (
            <div
              key={index}
              className="flex justify-center items-center lg:p-12 p-4 secondary hover:text-[#3cd092] hover:duration-150 duration-150"
            >
              {value}
            </div>
          ) : (
            <div
              key={index}
              className="flex justify-center items-center lg:p-12 p-4 hover:text-[#3cd092] hover:duration-150 duration-150"
            >
              {value}
            </div>
          )
        )}
      </div>
      {/* Actual Skills */}
      <div className="flex flex-col lg:flex-col gap-6 ">
        <div className="flex flex-col border-2 border-[#3cd092] p-4 primary gap-3">
          <div className="flex flex-row justify-center gap-2 group">
            <FaServer className="text-3xl lg:text-5xl group-hover:text-[#3cd092]  group-hover:duration-150 duration-150" />
            <IoServer className="text-3xl lg:text-5xl group-hover:text-[#3cd092]  group-hover:duration-150 duration-150" />
          </div>
          <p className="text-center text-sm lg:text-lg">
            I have extensive experience in building backend services with
            Node.js and Express, utilizing a range of databases. I've
            successfully developed multiple backend systems for personal
            projects.
          </p>
        </div>
        <div className="flex flex-col border-2 border-[#3cd092] p-4 primary gap-3">
          <div className="flex flex-row justify-center gap-2 group">
            <FaReact className="text-3xl lg:text-5xl group-hover:text-[#3cd092]  group-hover:duration-150 duration-150" />
            <RiTailwindCssFill className="text-3xl lg:text-5xl group-hover:text-[#3cd092]  group-hover:duration-150 duration-150" />
          </div>
          <p className="text-center text-sm lg:text-lg">
            I specialize in building websites with React and have completed a
            number of projects for personal use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
