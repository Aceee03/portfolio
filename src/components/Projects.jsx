import React from "react";
import Project from "./sub-components/Project";
import { ProjectsList } from "../assets/constants";

const Projects = () => {
  return (
    <div className="flex flex-col primary mx-8 lg:gap-14 gap-4 lg:mx-52 pt-12 border-t-[1px]">
      {/* Projects Title */}
      <h1 className="title">Projects</h1>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
        {ProjectsList.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            techs={project.techs}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
