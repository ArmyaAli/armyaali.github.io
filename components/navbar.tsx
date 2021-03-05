import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-3 w-4/5 mx-auto my-8 flex justify-between items-center text-white bg-opacity-50">
      <ul className="flex justify-between w-full h-full cursor-pointer text-center">
        <li className="w-full hover:bg-gray-400 my-auto">Home</li>
        <li className="w-full hover:bg-gray-400 my-auto">Projects</li>
        <li className="w-full hover:bg-gray-400 my-auto">Resume</li>
        <li className="w-full hover:bg-gray-400 my-auto">Contact</li>
      </ul>
    </nav>
  );
};
