import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="bg-gray-800 h-screen text-white flex flex-col gap-4 place-items-center p-4">
        <h1 className="font-bold">About This App</h1>
        <p>App to search Github users</p>
        <p>Version: 1.0.0</p>
      </div>
    </Fragment>
  );
};

export default About;
