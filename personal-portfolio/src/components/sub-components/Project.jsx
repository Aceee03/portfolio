import React from "react";

const Project = ({ title, techs, link, image }) => {
  const technos = [
    "React",
    "JS",
    "Express",
    "Node JS",
    "Admin JS",
    "LOL",
    "MDR",
  ];
  return (
    <>
      <div className="flex flex-col gap-4">
        <img src={image} className="h-96 aspect-square object-cover lg:object-fill" />
        <h1 className="font-bold text-2xl text-white">{title}</h1>
        <div className="grid grid-cols-4 auto-rows-auto gap-3">
          {techs.map((value, index) => (
            <h2
              key={index}
              className="lg:text-sm text-xs py-1 secondary text-center cursor-pointer hover:bg-green hover:duration-150 duration-150 hover:text-[#242424] rounded-lg"
            >
              {value}
            </h2>
          ))}
        </div>
        <button className=" lg:mt-auto place-self-start text-lg hover:duration-150 duration-150 text-white font-semibold underline underline-offset-8 hover:text-[#3cd092] decoration-2 decoration-[#3cd092]">
          <a target="_blank" rel="noopener noreferrer" href={link}>
            View Project
          </a>
        </button>
      </div>
    </>
  );
};

export default Project;
