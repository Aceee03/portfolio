import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col place-items-center justify-center gap-4 p-4">
      <h1 className="font-bold text-6xl">Not Found</h1>
      <p className="lead">The page you are looking for does not exist...</p>
      <Link className="bg-purple-600 hover:bg-purple-500 px-6 py-4 rounded-sm font-bold" to="/">
        <MdHome className="inline " />
        <p className="inline pl-2">BACK TO HOME</p>
      </Link>
    </div>
  );
};

export default NotFound;
