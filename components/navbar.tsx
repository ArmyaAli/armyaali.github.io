import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-3 flex justify-between items-center text-white">
       <span>Welcome</span>
       <ul className="flex text-xs justify-between w-96">
           <li>About Me</li>
           <li>Resume</li>
           <li>Projects</li>
           <li>About Me</li>
           <li>Contact</li>
       </ul>
    </nav>
  );
};
