import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-3 w-4/5 mx-auto my-8 flex justify-between items-center text-white bg-opacity-50">
      <ul className="flex justify-between w-full h-full cursor-pointer text-sm md:text-md lg:text-lg xl:text-3xl xl:h-16 3xl:text-4xl text-center border border-gray-500 rounded">
        <Link href="/">
          <li className="w-full hover:bg-gray-400 my-auto rounded">Home</li>
        </Link>
        <Link href="/projects">
          <li className="w-full hover:bg-gray-400 my-auto rounded">Projects</li>
        </Link>
        <Link href="/resume">
          <li className="w-full hover:bg-gray-400 my-auto rounded">Resume</li>
        </Link>
        <Link href="/contact">
          <li className="w-full hover:bg-gray-400 my-auto rounded">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};
